# Game of Life

![Alt text](src/assets/life.png)

## Overview

The **Game of Life** is an engaging educational project designed to enhance financial literacy among users. Through a series of interactive questions and quizzes, users can test their knowledge of personal finance, budgeting, saving, investing, and debt management. By answering questions correctly, users can earn points per every correct answer, encouraging them to learn while having fun!

<<<<<<< Updated upstream

## Features

- **Interactive Quizzes:** Users can answer a variety of questions related to financial literacy.
- **Points System:** Earn points for each correct answer, motivating users to improve their knowledge and understanding of financial concepts.
- **Resource Library:** Access to curated resources on basic financial literacy topics, including:
  - Budgeting
  - Saving
  - Investing
  - Debt Management
  - Understanding Credit
  - Filing Taxes

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: For navigation between different components and pages.

## Getting Started

To get started with the **Game of Life** project, follow the steps below:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/game-of-life.git
   cd game-of-life
   ```

=======

> > > > > > > Stashed changes

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
