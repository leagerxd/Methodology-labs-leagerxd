# Використовуємо базовий образ Node.js з підтримкою Alpine Linux
FROM node:14-alpine

# Встановлюємо каталог робочої директорії в /app
WORKDIR /app

# Копіюємо файли package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності проекту
RUN npm install

# Копіюємо інші файли проекту
COPY . .

# Виконуємо команду для запуску сервера
CMD ["node", "index.js"]