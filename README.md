# Orkester

This repository contains a test for Orkester company. The main goal of this app is to consume newsAPI to display news

## Features

- Display of all news on the main page without filter (default language : eng)
- By clicking on the title of an article, additionnal informations are provided on a new page
- Filters on the top allow to select different languages and search for specific expressions in title, description and content.

## Environment

- React
- Redux + Redux saga
- NextJs
- MaterialUI
- TypeScript

## Deployment

The project is deployed on Vercel at this address: [https://orkester.vercel.app/](https://orkester.vercel.app/)

To deploy this app localy on your computer, clone the repository

```js
git clone https://github.com/Olivier-Nouvel-GitHub/orkester.git
```

- Navigate to the project's directory:

  ```bash
  cd orkester-test

  ```

- Change the name of the file `.env.example` to `.env.local` and then provide the value to the apiKey env variable:

  ```plaintext
  NEXT_PUBLIC_API_KEY=your_api_key_here

  ```

- Download dependencies

```js
npm install
```

Start the project

```js
npm run dev
```

It should be available at

```js
 http://localhost:3000/
```
