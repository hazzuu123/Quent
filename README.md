# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
📦src
 ┣ 📂api
 ┃ ┗ 📜queryClient.ts
 ┣ 📂assets
 ┃ ┗ 📂fonts
 ┃ ┃ ┣ 📜Pretendard-Bold.woff2
 ┃ ┃ ┣ 📜Pretendard-Medium.woff2
 ┃ ┃ ┗ 📜Pretendard-Regular.woff2
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜a.txt
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┗ 📂oauth
 ┃ ┃ ┣ 📜Google.tsx
 ┃ ┃ ┗ 📜Naver.tsx
 ┣ 📂constants
 ┃ ┗ 📜a.txt
 ┣ 📂hooks
 ┃ ┣ 📜a.txt
 ┃ ┗ 📜redux.ts
 ┣ 📂models
 ┃ ┗ 📜a.txt
 ┣ 📂pages
 ┃ ┣ 📜Home.tsx
 ┃ ┗ 📜Login.tsx
 ┣ 📂store
 ┃ ┣ 📂reducer
 ┃ ┃ ┗ 📜reducer.ts
 ┃ ┣ 📂slices
 ┃ ┃ ┗ 📜modalSlice.ts
 ┃ ┗ 📜index.ts
 ┣ 📂style
 ┃ ┣ 📜font.ts
 ┃ ┣ 📜global.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂utils
 ┃ ┗ 📜format.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts

```
