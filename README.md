<img width="100" src="./public/damirdev.svg" />

## Stack technologies

- [React](https://react.dev/learn) + [Typescript](https://www.typescriptlang.org/docs/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - a small, fast, and scalable bearbones state management solution
- [Material UI](https://mui.com/x/react-data-grid/demo/) - for ready-to-use UI components
- [React Hook Form](https://react-hook-form.com/) - performant, flexible, and extensible forms with easy-to-use validation
- [NextJS](https://nextjs.org/) - a framework for SSR

## Project Requirements

> [!NOTE]
> Node version v20\*

## For Developers

```shell
npm i && npm run dev
```

Run the project at [localhost:3000](http://localhost:3000)

> [!CAUTION]
> Make sure to run the command

```shell
npm run prepare
```

## For DevOps

The project is based on [NextJS](https://nextjs.org/) and therefore requires the application to be started for production. Read more about deploying to production here [Deploying NextJS](https://nextjs.org/docs/app/building-your-application/deploying).


### To launch the project in a production environment, run the command:

```shell
npm i
npm run build
npm start
```

Run the project at [localhost:3000](http://localhost:3000)

> [!NOTE]
> Create a .env.production file based on .env.example to ensure all parameters are set.


**Example:**
Refactoring in the module ./App.tsx

## Project Structure (detailed descriptions inside the folder

```
Root
├── .husky - pre-hooks for commits
│
├── types - extend TypeScript types
│
├── public - all public files that will go into the production build
│
├── src - development folder
│   │
│   ├── api - describe all backend requests with Endpoint specification
│   │
│   ├── app - entire project structure by [AppRoute](https://nextjs.org/docs/app/building-your-application/routing)
│   │
│   ├── components - general components for the project not included in the UI
│   │
│   ├── constants - common constants for the project used throughout
│   │
│   ├── stores - Zustand state is written in this folder
│   │
│   ├── shared - components used throughout the project
│   │
│   ├── providers - all project providers described and formed here
│   │
│   ├── styles - MUI theme and common color constants and other style parameters written here
│   │
│   ├── types - general types for the project
│   │
│   ├── middleware.ts - manage app behavior depending on authorization
│
├── .env.example - example environment variable file for production
├── .eslintignore - ignore eslint checks
├── .eslintrc - eslint config
├── .gitignore - git ignore
├── .stylelintrc.js - config for SCSS styles
├── .prettierrc - config for prettier
├── next.config.mjs - NextJS settings
├── package.json - list of project packages (always remove ^)!!!
└── tsconfig.json - TypeScript config

```
