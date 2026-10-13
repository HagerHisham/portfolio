# Hager Abdellah — Personal Portfolio Website

A professional, minimalist portfolio website engineered with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**. Crafted specifically for **Hager Abdellah**, Computer Science Student at Helwan University specializing in AI, Machine Learning, and Software Development.

---

## 🌟 Key Features

- **Personalized Design System**: Custom palette using warm off-white (`#FBFBFA`), deep forest green (`#1E3E2D` / `#2A543C`), olive accents, and dark charcoal text (`#19201C`).
- **Zero Fabricated Claims**: Truthful representation of academic standing (GPA 3.45 / 4.0), Helwan University education, competitive programs (The University of Tokyo / Matsuo-Iwasawa Lab, DEPI, NTI/ITIDA), and student leadership roles (IEEE, Enactus).
- **Domain-Specific SVG Architecture Visuals**: Custom technical illustrations for each project (Spring Boot microservices architecture, NLP retrieval vector flow, ML classification pipeline, and web portal wireframe).
- **Interactive Project Deep Dive**: Accessible modal dialog allowing recruiters to inspect architectural patterns, contributions, and academic parameters.
- **Single Source of Truth**: All data, projects, links, and contact parameters are decoupled in `src/data/portfolioData.ts`. You can update your portfolio in seconds without touching React UI code.
- **Contact Hub with Instant Fallbacks**: One-click copy email button, LinkedIn, GitHub, and an interactive contact form with direct `mailto:` fallback and guide for Formspree/Web3Forms.
- **Accessibility & SEO**: WCAG AA contrast compliance, semantic HTML5 landmarks, responsive mobile drawer menu, and OpenGraph metadata.

---

## 🚀 Quick Start (Running Locally)

### 1. Prerequisites
Make sure **Node.js** (v18 or newer) is installed on your computer.

### 2. Install Dependencies
Open your terminal inside the project directory:
```bash
cd hager-portfolio
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

---

## ✏️ How to Customize Your Content

All content is centralized in **`src/data/portfolioData.ts`**. You do **not** need to touch JSX code.

### 1. Updating Your Contact Details & Links
Open `src/data/portfolioData.ts` and modify `personalInfo`:
```typescript
export const personalInfo: PersonalInfo = {
  name: "Hager Abdellah",
  title: "Computer Science Student | AI & Software Developer",
  // Change your email here:
  email: "your.real.email@example.com",
  // Update your LinkedIn URL:
  linkedin: "https://www.linkedin.com/in/hagar-abdellah/",
  // Update your GitHub profile:
  github: "https://github.com/YourUsername",
  ...
}
```

### 2. Updating Project Links & Academic Benchmarks
In `src/data/portfolioData.ts`, each project under `projects` has clear fields:
- **GoTrack**: Already linked to `https://github.com/HelwanDevs/GoTrack-Logistic-System`.
- **NLP Search Engine**: Add your repository link (`githubUrl`) and experimental results inside `academicDetails.results`.
- **Machine Learning Classification**: Add your exact dataset name, classifier model, and evaluation metrics inside `academicDetails`.
- **Courses Website**: Add your repository or live deployment link in `githubUrl` or `demoUrl`.

### 3. Updating Experience & Activities
Modify `experienceTimeline` in `src/data/portfolioData.ts` whenever you complete a training track, earn an accomplishment, or take on a new role.

---

## 📬 Connecting the Contact Form to Receive Emails

By default, the contact form prepares a pre-filled `mailto:` email in the user's default email client.

If you prefer form submissions to arrive directly in your inbox silently without opening a mail client:
1. Register a free account at **[Formspree](https://formspree.io)** or **[Web3Forms](https://web3forms.com)**.
2. Obtain your free form submission endpoint (e.g., `https://formspree.io/f/xyzabcde`).
3. In `src/components/Contact.tsx`, send an asynchronous POST request to your endpoint inside `handleSubmit`:
   ```typescript
   await fetch("https://formspree.io/f/YOUR_ENDPOINT", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData)
   });
   ```

---

## 📦 Building for Production

To create an optimized, minified production build:
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

You can preview the production build locally using:
```bash
npm run preview
```

---

## 🌐 Deploying to Public Hosting (Free)

### Option 1: Deploy on Vercel (Recommended & Easiest)
1. Push this project folder to your GitHub repository.
2. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub.
3. Click **Add New Project** and select your repository.
4. Vercel automatically detects Vite. Click **Deploy**.
5. Your portfolio is live with a free SSL certificate!

### Option 2: Deploy on Netlify
1. Go to **[netlify.com](https://netlify.com)** and sign in with GitHub.
2. Click **Add new site** > **Import an existing project**.
3. Choose your repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy Site**.

### Option 3: Deploy on GitHub Pages
1. In `vite.config.ts`, add `base: '/repository-name/'`.
2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add a deploy script to `package.json`:
   ```json
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run build && npm run deploy`.

---

## 📁 Project Structure

```
hager-portfolio/
├── index.html                   # HTML entry point with meta tags & fonts
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Forest/Olive/Charcoal color theme definition
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Documentation & deployment guide
└── src/
    ├── main.tsx                 # React entry point
    ├── App.tsx                  # Root layout & modal management
    ├── index.css                # Tailwind directives & custom utilities
    ├── types/
    │   └── portfolio.ts         # TypeScript interfaces & types
    ├── data/
    │   └── portfolioData.ts     # Central data source for all portfolio content
    └── components/
        ├── Navbar.tsx           # Sticky nav with mobile drawer menu
        ├── Hero.tsx             # Hero section with credentials snapshot
        ├── About.tsx            # Academic background & core principles
        ├── Skills.tsx           # Categorized competencies with context
        ├── Projects.tsx         # Projects grid with category tabs
        ├── ProjectGraphic.tsx   # Domain-specific SVG technical visuals
        ├── ProjectModal.tsx     # Accessible in-depth project inspection dialog
        ├── Experience.tsx       # Timeline of programs, trainings & student leadership
        ├── Services.tsx         # Realistic student & junior collaboration scopes
        ├── Contact.tsx          # Contact hub, 1-click email copy & form
        ├── Footer.tsx           # Minimalist footer & back-to-top
        └── UI/
            ├── Badge.tsx        # Flexible tag & badge component
            └── SectionTitle.tsx # Accessible section heading component
```

---

## 📄 License
Created for **Hager Abdellah**. Open for personal portfolio usage and customization.
