"""Package the sarahman.in project into a clean deployment-ready ZIP."""
import os
import zipfile
from pathlib import Path

PROJECT_ROOT = Path("/home/z/my-project")
OUTPUT = Path("/home/z/my-project/download/sarahman.in-project.zip")

# Directories and files to EXCLUDE from the ZIP
EXCLUDE_DIRS = {
    "node_modules",
    ".next",
    ".git",
    ".zscripts",
    "upload",
    "agent-ctx",
    "examples",
    "skills",
    "download",
    ".venv",
    "__pycache__",
    ".cache",
    "tool-results",
    "mini-services",
    "db",
}

EXCLUDE_FILES = {
    "dev.log",
    "server.log",
    "bun.lock",
    ".DS_Store",
    "package-lock.json",
}

EXCLUDE_PATTERNS = [
    "*.log",
    "*.db",
    "*.db-journal",
    "*.tsbuildinfo",
    ".env",
    ".env.*",
    "next-env.d.ts",
]

# Directories to INCLUDE (everything else by default)
# We'll walk the tree and skip excluded items

def should_exclude(path: Path) -> bool:
    """Check if a path should be excluded from the ZIP."""
    name = path.name

    if name in EXCLUDE_DIRS or name in EXCLUDE_FILES:
        return True

    for pattern in EXCLUDE_PATTERNS:
        if path.match(pattern):
            return True

    return False


def main():
    if OUTPUT.exists():
        OUTPUT.unlink()

    file_count = 0
    total_size = 0

    with zipfile.ZipFile(OUTPUT, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        for root, dirs, files in os.walk(PROJECT_ROOT):
            root_path = Path(root)

            # Filter out excluded directories in-place (prevents walking into them)
            dirs[:] = [d for d in dirs if not should_exclude(root_path / d)]

            for filename in files:
                file_path = root_path / filename
                if should_exclude(file_path):
                    continue

                # Compute the archive path (relative to project root)
                arcname = file_path.relative_to(PROJECT_ROOT)

                # Skip the ZIP itself and other download artifacts
                if arcname.parts[0] == "download":
                    continue

                # Add file to ZIP
                zf.write(file_path, arcname)
                file_count += 1
                total_size += file_path.stat().st_size

    zip_size = OUTPUT.stat().st_size
    print(f"✓ ZIP created: {OUTPUT}")
    print(f"  Files: {file_count}")
    print(f"  Uncompressed size: {total_size / 1024:.1f} KB ({total_size / 1024 / 1024:.2f} MB)")
    print(f"  Compressed size: {zip_size / 1024:.1f} KB ({zip_size / 1024 / 1024:.2f} MB)")

    # List top-level contents for verification
    print(f"\nTop-level contents of the ZIP:")
    with zipfile.ZipFile(OUTPUT, "r") as zf:
        seen_top = set()
        for name in zf.namelist():
            top = name.split("/")[0]
            if top not in seen_top:
                seen_top.add(top)
                print(f"  {top}")


if __name__ == "__main__":
    main()
