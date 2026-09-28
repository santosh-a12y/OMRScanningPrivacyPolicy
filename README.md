# Privacy Policy Website

A modern, fast, responsive, and accessible Privacy Policy website built strictly with **HTML5, CSS3, and Vanilla JavaScript**. Designed for seamless hosting on **GitHub Pages** using automated **GitHub Actions**.

---

## 🚀 Features

* **Zero External Frameworks:** No React, Bootstrap, or Tailwind. Pure standards-compliant HTML5 and CSS3.
* **100% Responsive:** Pixel-perfect presentation across mobile, tablet, desktop, and large displays.
* **Modern Typography & Design:** Elegant typography using Google Fonts (Inter) with fallback system fonts, subtle cards, glassmorphic sticky header, and balanced spacing.
* **Privacy By Design:** Pre-configured sections specifically covering camera permissions, storage access, and offline data processing guarantees.
* **Full Accessibility (a11y):** Semantic markup, skip-to-content link, WCAG AAA/AA compliant contrast, visible focus rings, and proper ARIA landmarks.
* **Print-Optimized:** Dedicated `@media print` stylesheet that strips UI navigation, maximizes paper readability, and appends reference URLs.
* **Automated CI/CD:** GitHub Actions workflow using official GitHub Pages actions (`actions/deploy-pages@v4`).

---

## 📁 Repository Structure

```text
OMRCheckPrivacyPolicy/
│
├── index.html                  # Semantic HTML5 document with 11 legal sections
├── styles.css                  # Custom CSS design system, responsive breakpoints, & print rules
├── script.js                   # Minimal vanilla JS (progress bar, print trigger, clipboard copy)
│
├── assets/
│   ├── logo.png                # High-resolution application brand mark
│   ├── logo.svg                # Scalable vector logo
│   └── favicon.ico             # Multi-resolution browser favicon
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
│
├── README.md                   # Setup, preview, and deployment instructions
└── LICENSE                     # MIT License
```

---

## ✏️ Customization (Find & Replace)

Before publishing, replace the bracketed placeholders with your actual application and legal details:

| Placeholder | Example Value | Description |
| :--- | :--- | :--- |
| `[App Name]` | `OMR Check` | Name of your mobile application |
| `[Company Name]` | `Acme Technologies LLC` | Legal entity or developer name |
| `[contact@example.com]` | `privacy@omrcheck.app` | Official privacy / support contact email |
| `[Month DD, YYYY]` | `October 01, 2026` | Effective date of this policy |
| `[Street Address...]` | `123 Tech Park, San Jose, CA, USA` | Physical or registered business address |

> **Tip:** In VS Code or your preferred editor, use global search and replace (`Ctrl+Shift+H` or `Cmd+Shift+H`) to update all occurrences across `index.html`, `LICENSE`, and `README.md`.

---

## 💻 Local Preview Instructions

You can preview the website locally using any static web server:

### Option 1: Python 3 (Recommended)
From the project root directory, run:
```bash
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your web browser.

### Option 2: VS Code Live Server
1. Install the **Live Server** extension in VS Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.

### Option 3: Node.js `npx serve`
```bash
npx serve .
```

---

## 🌐 GitHub Pages Deployment Steps

This repository is pre-configured with a GitHub Actions workflow in `.github/workflows/deploy.yml`.

To deploy automatically:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Privacy Policy website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Configure GitHub Pages Source in Repository Settings:**
   * Go to your repository on GitHub.
   * Navigate to **Settings** &rarr; **Pages** (under the "Code and automation" section in the left sidebar).
   * Under **Build and deployment** &rarr; **Source**, select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").

3. **Verify Deployment:**
   * Go to the **Actions** tab in your repository.
   * The `Deploy to GitHub Pages` workflow will run automatically on push.
   * Once completed, your live site URL will be displayed in the workflow summary (e.g., `https://<your-username>.github.io/<your-repo-name>/`).

---

## 📄 Privacy Policy Sections Included

1. **Introduction:** Scope and acceptance of terms.
2. **Information We Collect:** Data minimization statement and non-identifiable diagnostic metrics.
3. **How We Use Information:** Educational scoring, report compilation, and support communication.
4. **Camera Permission:** Real-time on-device frame detection without continuous recording or streaming.
5. **Storage Permission:** Scoped access for exporting CSV/PDF reports and importing user-selected keys.
6. **Offline Processing:** 100% local computation guarantee with zero cloud evaluation requirements.
7. **Data Security:** Device sandboxing, OS-level encryption, and data isolation.
8. **Third-Party Services:** Explicit prohibition of data brokers and ad tracking; disclosure of platform distribution.
9. **Children's Privacy:** Compliance guidelines under COPPA, FERPA, and GDPR.
10. **Changes to This Policy:** Revision and update procedures.
11. **Contact Us:** Interactive copy email button, direct mailto link, and mailing address.

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).
