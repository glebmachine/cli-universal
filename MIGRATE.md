- Переименовать main.ts на browser.ts и поправить в конфиге cli

- Заменить запуск приложения:
```
platformBrowserDynamic().bootstrapModule(AppModule);
```
```
export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

document.addEventListener('DOMContentLoaded', main, false);
```
- Из app.module.ts вычистить лишнее, привратив его в app-routing.module.ts
- Сгенерить тестовых модулей
- Поправить шаблон и добавить роутинг

- Добавить tsconfig.server.json
- Добавить webpack конфиг