
# 📖 React Notes

## 🚀 Getting Started with Parcel Scripts
### Development
Edit `package.json` to add the following script:  
```json
{
    "start": "parcel index.html"
}
```
Run the script:  
```bash
npm start
```

### Production
Add this script in `package.json`:  
```json
{
    "build": "parcel build index.html"
}
```
Run the script:  
```bash
npm run build
```

---

## 🛠️ Laying the Foundations
### React Element vs. HTML Element
- React elements are **objects**, not HTML elements.  
- They become HTML elements only when rendered.  

Example:  
```javascript
const head = React.createElement("h1", { id: "head" }, "Content");
console.log(head);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);
```
When rendered, the content in `index.html` is replaced.

---

## ✨ JSX: The Syntactic Sugar
- **JSX** is separate from React and makes React code easier to write.  
- Example JSX:  
  ```javascript
  const s1 = <h1 id="head">Vanakam la</h1>;
  ```
- JSX looks like HTML but is closer to XML.  

### Why JSX?  
- Code is written for **humans first**, then for **machines**.  
- JSX is not pure JavaScript—it is converted to React elements using **Babel**.

### Babel
- Converts JSX to React elements.  
- Helps older browsers understand modern JavaScript (ES6+).

### Attributes in JSX
- Must use **camelCase** (e.g., `className` instead of `class`).

---

## 📦 React Components
In React, **everything is a component**.  
### Types of Components:
1. **Class-based components** (older, rarely used).  
2. **Function components** (newer, easier).

---

### React Functional Component
- Always starts with a **capital letter**.  
- Returns JSX or React elements.

Example:  
```javascript
const Heading = () => {
    return <h1>1st Component</h1>;
};
```
If only one statement is present, no need for `return`:  
```javascript
const Heading = () => (
    <h1 className="header">1st Component</h1>
);
```

### Nested Components
- Functional components can render other functional components.

Example:  
```javascript
const Footer = () => {
    return <h1 className="header">Hello la</h1>;
};
```

- **`root.render`**: Converts JSX to HTML.  

---

## 🔗 Component Composition
Render functional components inside other functional components:  
```javascript
const App = () => (
    <div>
        <Heading />
        <Footer />
    </div>
);
```

### JavaScript in JSX
- Use `{}` to include JavaScript expressions inside JSX.  
- Example:  
  ```javascript
  const App = () => (
      <div>
          {console.log("JS in JSX works!")}
          <Heading />
      </div>
  );
  ```

---

## 🛡️ React Security
- React protects against **malicious attacks**.  
- At the end of the day, JSX improves **code readability**.
