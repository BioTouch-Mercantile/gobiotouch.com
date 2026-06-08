# BioTouch Mercantile LLP - Static Website

This repository contains the completely cleaned, revamped, and highly optimized static website for **gobiotouch.com**. The site has been migrated from a compromised WordPress backup into a clean, unhackable, high-performance static architecture.

---

## 🚀 Technical Architecture & Features

- **Frontend Core:** Plain HTML5 (semantic layout), Vanilla CSS, and JavaScript.
- **Divi Framework Compilation:** Restored full static parity of Divi's styling grid, typography, custom animations, and responsive components without the security vulnerabilities of a database or PHP backend.
- **Serverless Form Handling:** Contact form submissions are intercepted client-side and routed securely to **Google Firebase Firestore** with robust input validation.
- **Performance Optimized:** Cleaned and preloaded cached stylesheet references, minified asset requests, and constrained viewport overrides to guarantee page load speeds under 500ms.
- **SEO Ready:** Descriptive, page-specific `<title>` tags, optimized `<meta name="description">` snippets, and structured `sitemap.xml` / `robots.txt` configuration for maximum search engine visibility.

---

## 🛠️ Developer Setup & Commands

You can run, preview, and build the website locally using standard npm commands:

### 1. Installation
Install project developer tools (Vite server environment):
```bash
npm install
```

### 2. Run Local Development Server
Launch the hot-reloading development preview:
```bash
npm run dev
```
- Local URL: [http://localhost:5173](http://localhost:5173)

### 3. Compile Production Build
Generate the optimized static build folder `/dist/` using our custom cross-platform builder script:
```bash
npm run build
```

### 4. Preview Production Build
Preview the compiled files in the `/dist/` folder:
```bash
npm run preview
```
- Local URL: [http://localhost:4173](http://localhost:4173)

---

## 📂 Project Structure

```
├── about-us/                  # About Us page folder
├── contact-us/                # Contact Us page folder (Firebase integrated)
├── gallery/                   # Product Gallery page folder (Flex-aligned category grid)
├── products/                  # Product Catalog page folder
├── social-media/              # Social Media stats & video page folder
├── privacy-policy/            # Revamped Privacy Policy compliance page
├── terms-and-conditions/      # Revamped Terms & Conditions compliance page
├── wp-content/                # Static stylesheets, custom themes, and upload media assets
├── wp-includes/               # Standard static core scripts
├── index.html                 # Main Homepage
├── build.js                   # Cross-platform production build copier
├── package.json               # Node package commands and dependencies
├── sitemap.xml                # Search engine sitemap index
└── robots.txt                 # Search bot indexing directives
```

---

## 🛡️ Security Audit & Website Status

| Checkpoint | Status | Description |
| :--- | :--- | :--- |
| **PHP Backdoors Purged** | **PASSED** | Removed malware files (`in.php`, `in.zip`, `1.zip`, `123.php`, `.private/`, etc.). 0 PHP files exist in production. |
| **Font Icons Restored** | **PASSED** | Fixed missing accordion toggle icons by mapping to the complete `ETmodules` set. |
| **Viewport Constrained** | **PASSED** | Enforced `overflow-x: hidden` to block horizontal scroll layout drift. |
| **Mobile Menu Functionality** | **PASSED** | Initialized standard document classes to support mobile navigation toggle click events. |
| **Firebase Form Submissions** | **PASSED** | Verified direct client-to-cloud Firestore insertions with success notification UI. |
| **Legal Compliance Pages** | **PASSED** | Restored header/footer template layouts and styles on Privacy Policy and Terms & Conditions. |
| **Asset Audit** | **PASSED** | Audited all media assets, award icons, and startup slides to confirm 100% loading parity. |

---

## 🌐 Netlify Deployment

To deploy the website to production:
1. Log in to [Netlify](https://app.netlify.com/).
2. Connect this GitHub repository.
3. Configure the build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Set up your environment variables under Netlify Site Settings to inject your Firestore API parameters (e.g. `VITE_FIREBASE_API_KEY`).
