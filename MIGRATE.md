- Переименовать main.ts на browser.ts и поправить в конфиге cli
- Добавить
```
  BrowserModule.withServerTransition({
    appId: 'my-app-id'
  })
```