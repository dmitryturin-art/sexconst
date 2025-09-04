@echo off
echo Подключение к GitHub репозиторию...
git remote add origin https://github.com/dmitryturin-art/sexconst.git

echo Переименование ветки в main...
git branch -M main

echo Отправка кода на GitHub...
git push -u origin main

echo Готово! Проект отправлен на GitHub.
pause
