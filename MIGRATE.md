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
- Добавить
```
  BrowserModule.withServerTransition({
    appId: 'my-app-id'
  })
```