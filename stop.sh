#!/bin/bash
echo "Остановка контейнеров Beautyness..."

if ! command -v docker &> /dev/null; then
    if [ -x "/Users/$USER/.docker/bin/docker" ]; then
        export PATH="/Users/$USER/.docker/bin:$PATH"
    elif [ -x "/usr/local/bin/docker" ]; then
        export PATH="/usr/local/bin:$PATH"
    fi
fi

docker compose down
echo "Контейнеры остановлены."
