#!/usr/bin/env python3
"""Re-add Prism Launcher indexed mods to a packwiz modpack."""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

try:
    import tomllib
except ModuleNotFoundError as exc:  # pragma: no cover - only relevant on Python < 3.11
    raise SystemExit("prism_packwiz requires Python 3.11 or newer.") from exc


MINECRAFT_DIR = Path(__file__).resolve().parent.parent
INDEX_DIR = MINECRAFT_DIR / "mods" / ".index"


def command_for(metadata: dict) -> list[str] | None:
    """Build the appropriate packwiz command from parsed metadata."""
    update = metadata.get("update", {})

    curseforge = update.get("curseforge")
    if curseforge is not None:
        project_id = curseforge.get("project-id")
        file_id = curseforge.get("file-id")
        if project_id is None or file_id is None:
            raise ValueError("CurseForge metadata is missing project-id or file-id")
        return [
            "packwiz",
            "curseforge",
            "add",
            "--addon-id",
            str(project_id),
            "--file-id",
            str(file_id),
            "--yes"
        ]

    modrinth = update.get("modrinth")
    if modrinth is not None:
        mod_id = modrinth.get("mod-id")
        version = modrinth.get("version")
        if mod_id is None or version is None:
            raise ValueError("Modrinth metadata is missing mod-id or version")
        return [
            "packwiz",
            "modrinth",
            "add",
            "--project-id",
            str(mod_id),
            "--version-id",
            str(version),
            "--yes"
        ]

    return None


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Run packwiz add for every Prism Launcher .pw.toml mod index entry."
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="print the commands without running them",
    )
    args = parser.parse_args()

    if not INDEX_DIR.is_dir():
        print(f"Index directory not found: {INDEX_DIR}", file=sys.stderr)
        return 1

    files = sorted(INDEX_DIR.rglob("*.pw.toml"))
    if not files:
        print(f"No .pw.toml files found in {INDEX_DIR}")
        return 0

    succeeded = 0
    skipped = 0
    failed = 0

    for toml_path in files:
        try:
            with toml_path.open("rb") as file:
                command = command_for(tomllib.load(file))
        except (OSError, tomllib.TOMLDecodeError, ValueError) as exc:
            failed += 1
            print(f"ERROR {toml_path.name}: {exc}", file=sys.stderr)
            continue

        if command is None:
            skipped += 1
            print(f"SKIP  {toml_path.name}: no CurseForge or Modrinth update section")
            continue

        print(f"{'DRY' if args.dry_run else 'RUN'}   {toml_path.name}: {' '.join(command)}")
        if args.dry_run:
            succeeded += 1
            continue

        try:
            result = subprocess.run(command, cwd=MINECRAFT_DIR, check=False)
        except FileNotFoundError:
            print(
                "ERROR: packwiz was not found. Install it or add it to PATH.",
                file=sys.stderr,
            )
            return 1

        if result.returncode == 0:
            succeeded += 1
        else:
            failed += 1
            print(
                f"ERROR {toml_path.name}: packwiz exited with code {result.returncode}",
                file=sys.stderr,
            )

    action = "would run" if args.dry_run else "ran"
    print(
        f"Finished: {action} {succeeded} command(s), "
        f"skipped {skipped}, failed {failed}."
    )
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
