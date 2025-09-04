# 🚀 Инструкция по публикации на GitHub

## ✅ Что уже готово

Ваш проект полностью подготовлен для публикации на GitHub:

- ✅ Git репозиторий инициализирован
- ✅ Все файлы добавлены в git
- ✅ Сделаны коммиты с описанием
- ✅ Создан README.md с подробным описанием
- ✅ Добавлен LICENSE файл (MIT лицензия)
- ✅ Настроен .gitignore
- ✅ Создана инструкция по развертыванию

## 📋 Следующие шаги

### 1. Создайте репозиторий на GitHub

1. Перейдите на [GitHub.com](https://github.com)
2. Нажмите **"New repository"** (зеленая кнопка)
3. Заполните:
   - **Repository name**: `sexconst`
   - **Description**: `Веб-приложение для оценки половой конституции и сексуального темперамента`
   - **Public** (рекомендуется)
   - **НЕ** добавляйте README, .gitignore, LICENSE (они уже есть)

### 2. Подключите локальный репозиторий к GitHub

Выполните в терминале (в папке `C:\wibecode\sexconst`):

```bash
# Замените YOUR_USERNAME на ваш GitHub username
git remote add origin https://github.com/YOUR_USERNAME/sexconst.git

# Переименуйте ветку в main
git branch -M main

# Отправьте код на GitHub
git push -u origin main
```

### 3. Настройте GitHub Pages (для демо-сайта)

1. В репозитории: **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: main, **Folder**: / (root)
4. **Save**

Ваш сайт будет доступен по адресу:
`https://YOUR_USERNAME.github.io/sexconst`

## 🎯 Дополнительные настройки

### Topics (теги)
Добавьте в настройках репозитория:
- `psychology`
- `sexology` 
- `web-app`
- `javascript`
- `html`
- `css`
- `health`

### Описание репозитория
```
Веб-приложение для психологической диагностики половой конституции и сексуального темперамента. Основано на методиках Г.С. Васильченко и Эмили Нагоски.
```

## 📁 Структура проекта

```
sexconst/
├── 📄 index.html              # Основная страница
├── 🎨 style.css               # Стили
├── ⚙️ app.js                  # Логика приложения
├── 📊 interactive-presentation.html
├── 📖 presentation.md
├── 🖼️ trochanter_measure.png
├── 📚 README.md               # Документация
├── 📄 LICENSE                 # MIT лицензия
├── 🚫 .gitignore             # Исключения Git
├── 🚀 DEPLOYMENT.md          # Инструкция развертывания
└── 📋 GITHUB_SETUP.md        # Эта инструкция
```

## 🔄 Обновление проекта

Для обновления кода на GitHub:

```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

## 🎉 Готово!

После выполнения всех шагов ваш проект будет:
- ✅ Опубликован на GitHub
- ✅ Доступен для клонирования
- ✅ Иметь демо-версию на GitHub Pages
- ✅ Содержать полную документацию
- ✅ Быть готовым для использования другими людьми

## 📞 Нужна помощь?

Если возникли вопросы:
1. Проверьте [DEPLOYMENT.md](DEPLOYMENT.md) для подробной инструкции
2. Обратитесь к [документации GitHub](https://docs.github.com/)
3. Свяжитесь с автором через [Telegram](https://t.me/dmitry_turin_psy)
