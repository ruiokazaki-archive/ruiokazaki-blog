<h1 align="center">RuiOkazaki.blog</h1>

<div align="center">
  <img src="https://i.gyazo.com/1cdb8e9e3046fd34a9ad1da9277dea9c.jpg" alt="RuiOkazaki.blog" width="500">
</div>

## 🚀 Project Structure

```
.
├── README.md
├── astro.config.mjs
├── firebase.json
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── contents/
│   ├── favicon/
│   └── images/
├── src
│   ├── env.d.ts
│   ├── components/
│   ├── layouts/
│   ├── mdxComponents/
│   ├── pages/
│   ├── types/
│   └── utils/
└── tsconfig.json

```

Blog looks for `.mdx` files in the `public/contents/` directory. Each page is exposed as a route based on its slug.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                                                             |
| :------------- | :--------------------------------------------------------------------------------- |
| `pnpm install` | Installs dependencies                                                              |
| `pnpm dev`     | Starts local dev server at `localhost:3000`                                        |
| `pnpm build`   | Build your production site to `./dist/`                                            |
| `pnpm preview` | Preview your build locally, before deploying                                       |
| `pnpm deploy`  | Deploy to firebase. Actually, it is deployed by GitHub Actions, so it is not used. |
