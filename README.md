<img width="100" src="./public/images/linki_logo.svg" />

## Stack technologies

- [React](https://react.dev/learn) + [Typescript](https://www.typescriptlang.org/docs/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - a small, fast, and scalable bearbones state management solution
- [Material UI](https://mui.com/x/react-data-grid/demo/) - как готовые UI компоненты
- [React Hook Form](https://react-hook-form.com/) - performant, flexible and extensible forms with easy-to-use validation.
- [NextJS](https://nextjs.org/) - фремворк для SSR

## Основные требования к проекту

> [!NOTE]
> Версия Node v20\*

## For Developers

```shell
npm i && npm run dev
```

запустить проект по адресу [localhost:3000](http://localhost:3000)

> [!CAUTION]
> Обязательно запустить команду

```shell
npm run prepare
```

## For DevOps

Проект на основе [NextJS](https://nextjs.org/) и по этому для запускай на проде потребуется запуск приложение. По развертки на проде можно почитать тут [Deploying NextJS](https://nextjs.org/docs/app/building-your-application/deploying)

### Для запуска проекта в production окружение запускаем команду:

```shell
npm i
npm run build
npm start
```

запустить проект по адресу [localhost:3000](http://localhost:3000)

> [!NOTE]
> Надо создать .env.production по примеру .env.example что бы все параметры были

# GIT

## Правило коммитов и наименование веток

**Создание ветки: [category]/[task]**

**category:**

- feat - новая фича
- fix - фикс багов
- hotfix - быстрый фикс багов

**task:** номер задачи из ClickUp к примеру ABUTECH-1516

**пример:**

```
fix/ABUTECH-1516

feat/ABUTECH-1516
```

**Коммиты**
краткое описание PR

**пример:**
рефакторинг в модуле ./App.tsx

## Структура проекта (по большим разделам опишим отдельно внутри папки)

```
Root
├── .hasky - prehook'и для коммитов
│
├── types - ращрияем типы TypeScript
│
├── public - все публичные файлы которые попадут в продакшн сборку
│
├── src - папка разработки
│   │
│   ├── api- описываются все запросы на бек с указанием Endpoint
│   │
│   ├── app - тут вся структура проекта по структуре [AppRoute](https://nextjs.org/docs/app/building-your-application/routing)
│   │
│   ├── components - компоненты общие для проекта которые никак не входить в ui
│   │
│   ├── constants - общие константы для проекта, которые используется по всему проекту
│   │
│   ├── stores - состояние Zustand пишем в этой папке
│   │
│   ├── shared - компоненты которые исползуются по всему проеету
│   │
│   ├── providers - все провайдеры проекта описываются и формируются в этой папке
│   │
│   ├── styles - тема MUI и общие константы цветов и другие параметры стиля пишем тут
│   │
│   ├── types- общие типы по проекту
│   │
│   ├── middleware.ts - упраялвем поведение app от зависимости авторизации
│
├── .env.example - пример переменной окружении для продакшн
├── .eslintignore - игнорирование проверок eslint
├── .eslintrc - конфиг для eslint
├── .gitignore - игнорирование git
├── .stylelintrc.js - конфиг для scss стили
├── .prettierrc - конфиг для prettier
├── next.config.mjs - настройки NextJS
├── package.json - список пакетов проекта (всегда удалять ^)!!!
└── tsconfig.json - конфиг для typescript
```

#### ☝️ - ВАЖНО:

1. Названия папок и файлов всегда в нотации (kebab-case) кроме компонентов которые и папки и файл в нотации (PascalCase)
2. Из компоненты всегда все imports из файла index.ts
3. стили всегда в styled.ts или .scss
4. интерфейсы в types.ts
5. константы в constants.tsx

## Code Review

    1) Если не готов код, то отмечаем свой PR как "Draft" кнопкой "Mark as draft"
    2) Критичной считает Архитектурные, Структурные и другие соглашение по оформлению PR и за это не пропускается дальше PR
    3) Остальные замечание являются чисто рекомендационный характер и не является блокиром для PR
    4) Любой спорный момент обсуждается командой и если нет нарущение по 1-2 пункту то не яаляется данный спор блокиром!

## ☝️ - ВАЖНО:

> - Типизировать всего и вся что только возможно никак не юзать ANY!
> - any враг! - исключение всегда обсуждать с командой!
> - по возможности избегать console.log в крайних случаях console.error console.warn
> - мутировать значения во вне mobx store (использовать исключительно actions из mobx store ради таких вещей. )
