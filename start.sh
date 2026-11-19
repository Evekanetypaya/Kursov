#!/bin/bash
cd "$(dirname "$0")"

echo "===================================================="
echo "  Запуск базы данных PostgreSQL в Docker"
echo "===================================================="

if ! command -v docker &> /dev/null; then
    if [ -x "/Users/$USER/.docker/bin/docker" ]; then
        export PATH="/Users/$USER/.docker/bin:$PATH"
    elif [ -x "/usr/local/bin/docker" ]; then
        export PATH="/usr/local/bin:$PATH"
    fi
fi

docker compose up -d --build

echo ""
docker ps --filter "name=beautyness_postgres"

echo ""
echo "===================================================="
echo "  БАЗА ДАННЫХ УСПЕШНО РАБОТАЕТ!"
echo "===================================================="
echo "  Подключение в DBeaver:"
echo "  - Тип базы:    PostgreSQL"
echo "  - Host:        localhost"
echo "  - Port:        5432"
echo "  - Database:    beautyness_db"
echo "  - Username:    postgres"
echo "  - Password:    postgres"
echo "===================================================="
