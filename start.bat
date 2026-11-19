@echo off
chcp 65001 >nul
cd /d "%~dp0"

title Beautyness - Запуск проекта (Docker + PostgreSQL + DBeaver)

echo ======================================================================
echo          ЗАПУСК ПРОЕКТА BEAUTYNESS (PostgreSQL + API + DBeaver)
echo ======================================================================
echo.

if exist "C:\Program Files\Docker\Docker\resources\bin" (
    set "PATH=C:\Program Files\Docker\Docker\resources\bin;%PATH%"
)
if exist "C:\Program Files\Docker\Docker" (
    set "PATH=C:\Program Files\Docker\Docker;%PATH%"
)

where docker >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] Команда docker не найдена!
    echo Убедитесь, что на компьютере установлен Docker Desktop.
    pause
    exit /b 1
)

echo [1/3] Проверка работы Docker Desktop...
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo [ВНИМАНИЕ] Программа Docker Desktop не запущена!
    echo Подождите 1-2 минуты, пока иконка кита станет стабильной.
    pause
    exit /b 1
)
echo       Docker Desktop активен и готов к работе!

echo [2/3] Подготовка контейнеров...
docker compose down >nul 2>&1

echo [3/3] Сборка и запуск PostgreSQL и API сервера...
docker compose up -d --build

if %errorlevel% neq 0 (
    echo.
    echo [ОШИБКА] Сбой при запуске контейнеров!
    echo Если ошибка связана с портом 5432 - port already allocated:
    echo Откройте файл .env в блокноте и измените DB_PORT=5432 на DB_PORT=5433
    echo.
    pause
    exit /b 1
)

echo Ожидание инициализации базы данных PostgreSQL...
timeout /t 5 /nobreak >nul

echo ======================================================================
echo   В С Е   К О Н Т Е Й Н Е Р Ы   У С П Е Ш Н О   З А П У Щ Е Н Ы !
echo ======================================================================
pause