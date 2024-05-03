```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Архитектура

## Слой
\__ src/
    |__ app/        # Иниц. логика приложения (энтрипоинт прим: "провайдер, страницы, роутеры, глобальные стили, конфигурация, роутеры")
    |__ blocks/     # Самостоятельные и полноценные блоки для страниц
    |__ features/   # (Опц.) Обрабатываемые польз. сценарии (прим: "подписка на пользователя, лайк, дизлайк, шейр, смена языка...")
    |__ entities/   # (Опц.) Бизнес-сущности, которыми оперирует предметная область (прим: "товар, заказ, корзина, комментарий...")
    |__ shared/     # Переиспользуемые модули, без привязки к бизнес-логике (максимально переиспользуемые модули)

## Сегменты
1) UI - наши компоненты
2) model - бизнес логика (взаимодействие со стейтом, селекторы, экшены и тд. ...)
3) lib - это все хелперы (какие-то вспомогательные функции, которые могут использоваться внутри модуля, прим: "хуки, getFullName...")
4) config - конфигурация для модуля (используется редко)
5) api - запросы для серверс
6) consts - константы
