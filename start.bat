@echo off
cd C:\OSPanel\domains\poizon-project
echo Запуск BrowserSync...
browser-sync start --proxy "poizon-project" --files "**/*" --startPath "/exchange"
pause

@REM browser-sync start --proxy "http://poizon-project" --files "css/*.css, js/*.js, *.php"