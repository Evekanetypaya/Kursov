@echo off
chcp 65001 >nul
cd /d "%~dp0"

title Beautyness - Остановка проекта

echo ======================================================================
echo   ОСТАНОВКА КОНТЕЙНЕРОВ BEAUTYNESS (PostgreSQL + API)
echo ======================================================================
echo.

if exist "C:\Program Files\Docker\Docker\resources\bin" (
    set "PATH=C:\Program Files\Docker\Docker\resources\bin;%PATH%"
)
if exist "C:\Program Files\Docker\Docker" (
    set "PATH=C:\Program Files\Docker\Docker;%PATH%"
)

docker compose down

echo.
echo ======================================================================
echo   Контейнеры успешно остановлены!
echo ======================================================================
echo.
pause
