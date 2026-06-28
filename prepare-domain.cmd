@echo off
setlocal

if "%~1"=="" (
  echo Usage: prepare-domain.cmd https://your-domain.com
  exit /b 1
)

set "NODE_EXE=node"
where node >nul 2>nul
if errorlevel 1 (
  set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
)
if not "%NODE_EXE%"=="node" if not exist "%NODE_EXE%" (
  echo Node.js is required to prepare domain files.
  exit /b 1
)

"%NODE_EXE%" "%~dp0scripts\set-site-url.cjs" "%~1"
if errorlevel 1 exit /b 1

call "%~dp0build-seo.cmd"
endlocal
