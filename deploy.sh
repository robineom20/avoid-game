#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$ROOT_DIR/docs"

DO_PUSH=0
BUMP_CACHE=1
COMMIT_MSG=""

usage() {
  echo "Usage: ./deploy.sh [--no-bump] [--push \"message\"]" >&2
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --no-bump) BUMP_CACHE=0 ;;
    --push)
      DO_PUSH=1
      shift
      COMMIT_MSG="${1:-}"
      [[ -n "$COMMIT_MSG" ]] || { echo "error: --push needs a message" >&2; exit 2; }
      ;;
    -h|--help) usage; exit 0 ;;
    *) echo "error: unknown arg: $1" >&2; usage; exit 2 ;;
  esac
  shift || true
done

mkdir -p "$DOCS_DIR"
: > "$DOCS_DIR/.nojekyll"

for f in avoid_game.html manifest.webmanifest sw.js icon.svg; do
  [[ -f "$ROOT_DIR/$f" ]] || { echo "error: missing $f" >&2; exit 1; }
done

cp -f "$ROOT_DIR/avoid_game.html" "$DOCS_DIR/avoid_game.html"
cp -f "$ROOT_DIR/manifest.webmanifest" "$DOCS_DIR/manifest.webmanifest"
cp -f "$ROOT_DIR/sw.js" "$DOCS_DIR/sw.js"
cp -f "$ROOT_DIR/icon.svg" "$DOCS_DIR/icon.svg"

if [[ ! -f "$DOCS_DIR/index.html" ]]; then
  cat > "$DOCS_DIR/index.html" <<'HTML'
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#1d2a30" />
  <link rel="manifest" href="manifest.webmanifest" />
  <link rel="icon" href="icon.svg" type="image/svg+xml" />
  <title>피하기 게임</title>
  <meta http-equiv="refresh" content="0; url=avoid_game.html" />
</head>
<body>
  <p>Redirecting... <a href="avoid_game.html">Open game</a></p>
  <script>location.replace("./avoid_game.html");</script>
</body>
</html>
HTML
fi

if [[ "$BUMP_CACHE" -eq 1 ]]; then
  python3 - <<'PY'
from pathlib import Path
import re, time
suffix = time.strftime('%Y%m%d%H%M%S')
pattern = r'const CACHE_NAME = "avoid-game-[^"]+";'
repl = f'const CACHE_NAME = "avoid-game-{suffix}";'
for p in [Path('sw.js'), Path('docs/sw.js')]:
    if not p.exists():
        continue
    text = p.read_text(encoding='utf-8')
    text2, n = re.subn(pattern, repl, text)
    if n:
        p.write_text(text2, encoding='utf-8')
print('cache-bumped', suffix)
PY
fi

echo "Synced to docs/"

if [[ "$DO_PUSH" -eq 1 ]]; then
  cd "$ROOT_DIR"
  git add -A
  if git diff --cached --quiet; then
    echo "No changes to commit."
    exit 0
  fi
  git commit -m "$COMMIT_MSG"
  git push
fi
