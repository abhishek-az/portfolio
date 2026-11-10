# Ayyagari Abhishek — Portfolio

Personal portfolio built with **React 18 + Vite**. It has a boot-screen loader, a particle-network background, a 3D tilt portrait, a typewriter headline, an animated CI/CD pipeline, an orbiting skill map, a scroll-driven timeline and count-up stats.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Deploy to GitHub Pages

1. Create a GitHub repo (for example `portfolio`, or `<username>.github.io` for a root URL) and push this folder to the `main` branch:
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
2. In the repo, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Every push to `main` builds and deploys automatically (`.github/workflows/deploy.yml`).
   The site appears at `https://<username>.github.io/<repo>/`.

Vite is configured with `base: './'`, so the same build works at any path or on a custom domain.

## Editing content

- **Text, jobs, skills, certifications, links:** `src/data.js`.
  Set your email, LinkedIn and GitHub URLs there (marked `TODO`).
- **Photo:** replace `src/assets/profile.png`. If the new image has a different shape, adjust `background-size` / `background-position` on `.photo` in `src/index.css`.
- **Colors and fonts:** CSS variables at the top of `src/index.css`.
