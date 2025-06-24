# 🔐 Better Auth — Full Authentication Starter Kit with Next.js

A complete and modern authentication starter built with **Next.js**, **Better Auth**, **ShadCN UI**, **TailwindCSS**, and **Drizzle ORM**. This project helps you quickly scaffold a secure and scalable authentication system with a beautiful UI.

## ✨ Features

- 🔐 Full authentication using [Better Auth](https://www.better-auth.com/)
- 🎨 Accessible, stylish UI with [ShadCN UI](https://ui.shadcn.com/)
- 🧠 Form validation using `react-hook-form` and `zod`
- 🌿 Type-safe database layer using [Drizzle ORM](https://orm.drizzle.team/)
- ☁️ PostgreSQL via [Neon](https://neon.tech/) serverless
- 💅 Utility-first styling with TailwindCSS
- ⚙️ Dev tooling with ESLint, Prettier, and TypeScript

## 🛠️ Tech Stack

| Technology      | Purpose                  |
| --------------- | ------------------------ |
| Next.js         | Main React framework     |
| React 19        | UI library               |
| TailwindCSS     | Styling                  |
| Better Auth     | Authentication engine    |
| Drizzle ORM     | Database ORM             |
| Neon            | Serverless PostgreSQL    |
| ShadCN UI       | Accessible UI components |
| React Hook Form | Form handling            |
| Zod             | Schema validation        |
| Lucide Icons    | Icon set                 |
| React Icons     | Icon set                 |

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shuntps/nextjs-better-auth-kit.git
cd nextjs-better-auth-kit
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file at the root:

```env
DATABASE_URL=your_postgres_url
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Push database schema

```bash
npm run db:push
```

Optionally, launch Drizzle Studio:

```bash
npm run db:studio
```

### 5. Start the development server

```bash
npm run dev
```

---

## 📂 Project Structure

```
.
├── app/              # App routes (Next.js 15 App Router)
├── components/       # Reusable UI components
├── lib/              # Helpers, validation logic
├── db/               # Drizzle schema and queries
├── modules/          # Feature modules
└── .env              # Environment variables
```

## 🧪 Available Scripts

| Script      | Description                    |
| ----------- | ------------------------------ |
| `dev`       | Start dev server               |
| `build`     | Build the app                  |
| `start`     | Start the app in production    |
| `lint`      | Run ESLint to analyze the code |
| `db:push`   | Push schema with Drizzle ORM   |
| `db:studio` | Launch Drizzle Studio          |

## 🧰 Recommended VSCode Extensions

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Neon](https://neon.tech/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Better Auth](https://www.better-auth.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

> A clean and modern authentication starter kit. Ideal for bootstrapping secure full-stack apps with Next.js. 🚀
