#!/usr/bin/env bash
# SessionStart hook · prepara el entorno del sitio Next.js de COLABLANCA PLAZA.
# Idempotente y no-fatal: nunca rompe el arranque de la sesión.
set -u

ROOT="${CLAUDE_PROJECT_DIR:-$(pwd)}"
APP_DIR="$ROOT/colablancasite"

if [ ! -d "$APP_DIR" ]; then
  echo "[colablanca-ads] No encontré colablancasite/ — omito setup."
  exit 0
fi

cd "$APP_DIR" || exit 0

# Instala dependencias solo si faltan, para no penalizar cada arranque.
if [ ! -d "node_modules" ]; then
  echo "[colablanca-ads] Instalando dependencias (npm ci)…"
  if [ -f "package-lock.json" ]; then
    npm ci --no-audit --no-fund >/dev/null 2>&1 && \
      echo "[colablanca-ads] Dependencias instaladas." || \
      echo "[colablanca-ads] npm ci falló; ejecuta 'npm install' manualmente en colablancasite/."
  else
    npm install --no-audit --no-fund >/dev/null 2>&1 && \
      echo "[colablanca-ads] Dependencias instaladas (npm install)." || \
      echo "[colablanca-ads] npm install falló; revísalo manualmente."
  fi
else
  echo "[colablanca-ads] Entorno listo (node_modules presente)."
fi

echo "[colablanca-ads] Comandos: /anuncio · /landing-campana · /roas · /publicar-meta"
exit 0
