@echo off
setlocal
set "NODE_EXE=node"
where node >nul 2>nul
if errorlevel 1 (
  set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
)
if not "%NODE_EXE%"=="node" if not exist "%NODE_EXE%" (
  echo Node.js is required to rebuild SEO pages.
  exit /b 1
)
"%NODE_EXE%" "%~dp0scripts\generate-shikimori-cache.cjs"
"%NODE_EXE%" "%~dp0scripts\generate-schedule-cache.cjs"
"%NODE_EXE%" "%~dp0scripts\generate-runtime-config.cjs"
"%NODE_EXE%" "%~dp0scripts\generate-seo.cjs"
endlocal
