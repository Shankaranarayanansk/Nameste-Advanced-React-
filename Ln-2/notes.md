
# 🚀 Parcel Bundler Guide

## 📦 What is npm?
- **npm**: Used to manage packages (dependencies).  
- **package.json**: Configuration file for npm.  
- **Packages**: Also called **dependencies**.  

---

## 📚 What is a Bundler?
- Bundles files for production.  
- Examples: **Vite**, **Webpack**, **Parcel**.  

---

## 🦸 Parcel: The Beast Bundler
- **Ignites your app** with power.  
- Install Parcel:  
  ```bash
  npm i -d parcel
  ```
  - `-d`: Dev dependency for development.  
  - Regular dependencies are for production.

### 🔢 Versioning:
- **Caret (`^`)**: Auto-updates minor versions.  
- **Tilde (`~`)**: Updates minor versions but safer than caret.

---

## 📜 package-lock.json
- Tracks the **exact versions** of installed dependencies.

---

## 📂 node_modules
- Collection of dependencies.  
- Includes **transitive dependencies** (dependency tree).

---

## 🔥 Ignite Your App
Run your app:  
```bash
npx parcel index.html
```

### 💻 Commands:
- **npm**: Installs packages.  
- **npx**: Executes a package.  

---

## 🛠️ Setting Up React with Parcel
1. Install React:  
   ```bash
   npm i react
   npm i react-dom
   ```
2. Use `type="module"` in the `<script>` tag.  
3. Parcel enables:  
   - **HMR (Hot Module Replacement)**: Auto-refresh on file changes.

---

## ⚡ Parcel Features
- **Dev Build** & **Local Server** 🛠️  
- **HMR (Hot Module Replacement)** 🔄  
- **File Bundling** 📦  
- **Image Optimization** 🖼️  
- **Minification** 📉  
- **Consistent Hashing** 🔢  
- **Code Splitting** ✂️  
- **Differential Bundling** 🌐  
- **Error Handling & Diagnostics** 🩺  
- **Tree Shaking** (removes unused code) 🌲  
- **HTTPS Hosting Support** 🔒  

---

## 📂 Output
- Run to optimize for production:  
  ```bash
  npx parcel build index.html
  ```
- Outputs files to the **dist** folder.

---

## 🌍 Browser Compatibility
Add a `browserslist` in **package.json**:  
```json
"browserslist": [
  "last 2 Chrome versions"
]
```
Ensures optimization for all browsers.

---

🔗 For more details, refer to the [Parcel Documentation](https://parceljs.org/).
