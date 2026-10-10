# Prateek Narain - Personal Portfolio

A modern, high-converting personal portfolio built with React 18, TypeScript, Vite, Tailwind CSS (v4), and Framer Motion.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Install & Run
1. Open a terminal in the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the provided localhost link in your browser.

## 🛠️ How to Customize Data

### Adding a New Project
1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array following the `Project` interface.
3. Make sure to provide the `id` and `image` path (e.g., `/projects/new-project.png`).

### Adding a New Skill
1. Open `src/data/skills.ts`
2. Add a new object to the `skills` array.
3. You can find skill icons at [devicon](https://devicon.dev/).

### Replacing the Avatar & Project Screenshots
1. **Avatar**: Replace the `/public/avatar.png` file with your own photo. Make sure it has a square aspect ratio for the best result.
2. **Screenshots**: Place your project screenshots in the `/public/projects/` directory. Name them according to the slug/id used in `projects.ts` (e.g., `oratio.png`).

### Setting up the Contact Form
1. The contact form is currently wired to Formspree, but requires your form ID.
2. Sign up at [Formspree](https://formspree.io/) and create a new form.
3. Open `src/components/Sections.tsx` and find the `<form>` tag in the `Contact` component.
4. Replace `YOUR_FORM_ID` in `action="https://formspree.io/f/YOUR_FORM_ID"` with your actual Formspree ID.

## 🚀 Deployment to Vercel
1. Create a free account at [Vercel](https://vercel.com/).
2. Connect your GitHub account and import this repository.
3. Vercel will automatically detect the Vite preset. 
4. Click **Deploy**. Vercel will build and host your site with no extra configuration needed!

## 📝 Pending Placeholders (To-Do)
- [ ] Add `avatar.png` to the `/public` directory.
- [ ] Add real project screenshots (e.g., `oratio.png`, `suraj-construction.png`) to `/public/projects/`. (The site gracefully falls back to GitHub social previews in the meantime).
- [ ] Add your Resume PDF as `Resume.pdf` to the `/public` directory.
- [ ] Update the `githubUrl` and `liveUrl` links for your projects in `src/data/projects.ts`.
- [ ] Replace `YOUR_FORM_ID` in `src/components/Sections.tsx` for the contact form.
