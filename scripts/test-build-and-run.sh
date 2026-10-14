#!/usr/bin/env bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
project_dir="$(cd -- "$script_dir/.." && pwd)"
runner="$project_dir/build-and-run.sh"

bash -n "$runner"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Синтаксис build-and-run.sh корректен; интеграционная сборка пропущена: Node.js/npm недоступны в этом Bash."
  exit 0
fi

bash "$runner" --build-only

if [[ ! -s "$project_dir/dist/index.html" ]]; then
  echo "Ошибка: production-сборка dist/index.html не создана." >&2
  exit 1
fi

echo "Проверка build-and-run.sh пройдена."
