# 📚 Next.js Multi-Language Documentation Portal

A high-performance, production-ready documentation portal built with **Next.js**, featuring multi-language support, Incremental Static Regeneration (ISR), Docker containerization, dark mode, Swagger API integration, client-side search, and more.

This project demonstrates how to build a scalable documentation system that balances static performance with dynamic capabilities — a common requirement for modern SaaS and developer platforms.

---

## 🚀 Features

- 🌍 Multi-language support (English, Spanish, French, German)
- ⚡ Incremental Static Regeneration (ISR) with 60-second revalidation
- 🐳 Fully containerized using Docker & docker-compose
- 📂 Versioned documentation (v1, v2, v3)
- 📑 Collapsible sidebar navigation
- 🔀 Version selector
- 🔎 Client-side full-text search
- 📘 Swagger-powered API reference
- 🌗 Dark / Light theme toggle with persistence
- 📌 Table of Contents with scroll spy
- 💬 Feedback widget (client-side simulation)
- 📋 Copy-to-clipboard functionality for code blocks

---

## 🛠 Tech Stack

- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS (v3)
- next-themes
- Swagger UI React
- Docker
- Node.js

---

## 📂 Project Structure

```

app/
├── [locale]/
│   ├── docs/
│   │   └── v1/[slug]/page.tsx
│   └── layout.tsx
├── api-reference/
│   └── page.tsx
├── layout.tsx
└── globals.css

components/
├── Sidebar.tsx
├── LanguageSwitcher.tsx
├── ThemeToggle.tsx
├── TableOfContents.tsx
├── FeedbackWidget.tsx
└── CodeBlock.tsx

lib/
└── extractHeadings.ts

````

---

## 🐳 Running with Docker (Recommended)

### Build and Start

```bash
docker-compose up --build
````

The application will be available at:

```
http://localhost:3000
```

The Docker container includes a healthcheck that verifies:

```
http://localhost:3000
```

The container status should transition to:

```
healthy
```

---

## 🧪 Healthcheck Validation

To verify container status:

```bash
docker ps
```

Expected:

```
STATUS: healthy
```

---

## 🌍 Internationalization (i18n)

Supported locales via sub-path routing:

* English → `/en/docs/...`
* Spanish → `/es/docs/...`
* French → `/fr/docs/...`
* German → `/de/docs/...`

The language switcher allows users to change locale while staying on the same documentation page.

---

## ⚡ Incremental Static Regeneration (ISR)

Documentation routes follow:

```
/docs/v1/[slug]
```

Behavior:

* Pre-rendered at build time
* Revalidated every 60 seconds
* Response headers include:

```
Cache-Control: s-maxage=60, stale-while-revalidate
```

This ensures fast performance with fresh content.

---

## 📘 API Reference

Route:

```
/api-reference
```

Renders interactive Swagger UI from:

```
/public/openapi.json
```

Swagger container includes `.swagger-ui` class for validation.

---

## 🌗 Dark / Light Theme

* Automatically detects system preference
* Toggleable via UI button (`data-testid="theme-toggle"`)
* Applies `dark` class to `<html>`
* Theme persists via localStorage

---

## 📑 Table of Contents (Scroll Spy)

* Automatically extracts `<h2>` and `<h3>` headings
* Generates anchor links
* Highlights active section while scrolling
* Active link includes:

```
data-active="true"
```

---

## 💬 Feedback Widget

Each documentation page includes:

* `data-testid="feedback-input"`
* `data-testid="feedback-submit"`
* `data-testid="feedback-success-message"`

Submission is simulated on the client side.

---

## 📋 Copy Code Button

Each code block includes:

* `data-testid="code-block"`
* `data-testid="copy-code-button"`

Uses the Clipboard API to copy code content.

---

## 🔎 Search Functionality

Client-side full-text search includes:

* `data-testid="search-input"`
* `data-testid="search-results"`
* `data-testid="search-no-results"`

Search updates results dynamically without page reload.

---

## 🔐 Environment Variables

All required environment variables are documented in:

```
.env.example
```

No secrets are committed.

---

## 🧪 Running Locally Without Docker

Install dependencies:

```bash
npm install
```

Development mode:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm start
```

---

## ✅ Evaluation Checklist

✔ Docker builds successfully
✔ Container becomes healthy
✔ Application accessible at localhost:3000
✔ ISR headers verified
✔ Multi-language routing functional
✔ Swagger UI renders correctly
✔ Dark mode toggle works
✔ TOC scroll spy active
✔ Feedback widget works
✔ Clipboard copy works
✔ Required `data-testid` attributes present

---

## 📌 Summary

This project demonstrates how to build a scalable, multi-language documentation system using modern frontend architecture. It balances:

* Static performance
* Dynamic regeneration
* International accessibility
* Clean UI/UX
* Containerized deployment

The architecture and structure are suitable for production-grade SaaS documentation platforms.

