# 🚀 Developer Stamina Dashboard


# 🧠 Virtual DOM Explanation

React uses the Virtual DOM to improve performance during UI updates.

When the stamina value changes, React first updates the Virtual DOM instead of directly updating the real DOM. React then compares the previous and updated Virtual DOM states and updates only the changed elements efficiently.

---

# 💻 Modulus Logic Used

```javascript
if(newClickCount % 5 === 0){
   reduction = 15
}
```

This logic applies a critical stamina reduction every 5th click using the modulus operator.

---

# ⚔️ Vite vs Create React App (CRA)

| Vite                                 | CRA                         |
| ------------------------------------ | --------------------------- |
| Faster development server            | Slower startup time         |
| Uses native ES modules               | Uses Webpack bundling       |
| Instant Hot Module Replacement (HMR) | Slower HMR                  |
| Lightweight and modern               | Larger project setup        |
| Better performance                   | More configuration overhead |

---

# 👨‍💻 Author

Zaid Pathan

MERN Stack Internship - Day 1
