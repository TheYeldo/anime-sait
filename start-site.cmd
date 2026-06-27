@echo off
title Taytlo
set "BUNDLED_PYTHON=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if exist "%BUNDLED_PYTHON%" (
  start "" "http://127.0.0.1:4173/"
  "%BUNDLED_PYTHON%" -m http.server 4173 --bind 127.0.0.1 --directory "%~dp0"
  exit /b
)
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
