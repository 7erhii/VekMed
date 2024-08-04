#!/bin/bash

# Путь к вашему проекту
PROJECT_DIR="/root/vekmed"

# Переход в директорию проекта
cd $PROJECT_DIR

# Сброс локальных изменений и обновление репозитория
git fetch origin
git reset --hard origin/main

# Установка зависимостей
npm install

# Сборка проекта
npm run build

# Перезапуск приложения с использованием PM2
pm2 restart vekmed
