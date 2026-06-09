# BioTouch Mercantile LLP - Static Website

This repository contains the completely cleaned, revamped, and highly optimized static website for **gobiotouch.com**. The site has been migrated from a compromised WordPress backup into a clean, unhackable, high-performance static architecture, configured for direct deployment on **Netlify**.

---

## 🛡️ Website Status & Security Checkpoints

| Checkpoint | Status | Description |
| :--- | :--- | :--- |
| **PHP Backdoors Purged** | **PASSED** | Removed all malware files (`in.php`, `in.zip`, `1.zip`, `123.php`, `.private/`, etc.). 0 PHP files exist in production. |
| **Font Icons Restored** | **PASSED** | Fixed missing accordion toggle icons by mapping to the complete `ETmodules` set. |
| **Viewport Constrained** | **PASSED** | Enforced `overflow-x: hidden` to block horizontal scroll layout drift. |
| **Mobile Menu Functionality** | **PASSED** | Initialized standard document classes to support mobile navigation toggle click events. |
| **Firebase Form Submissions** | **PASSED** | Verified direct client-to-cloud Firestore insertions with success notification UI. |
| **Legal Compliance Pages** | **PASSED** | Restored header/footer template layouts and styles on Privacy Policy and Terms & Conditions. |
| **Asset Audit** | **PASSED** | Audited all media assets, award icons, and startup slides to confirm 100% loading parity. |

---

## 🌐 Netlify Deployment Configuration

To host the site on Netlify, connect this repository to your Netlify account and configure the following settings:

1. **Build Settings:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

2. **Environment Variables:**
   Under **Site configuration** -> **Environment variables**, define the following Google Firebase parameters to enable the contact form:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

Once connected, Netlify will automatically build and deploy the website whenever you push updates to this repository.
