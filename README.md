# 🌍 Zero Hunger - Sustainable Development Goal 2

An end-to-end web platform designed to raise awareness, provide educational resources, and simulate a community-driven marketplace, all dedicated to achieving **Sustainable Development Goal 2: Zero Hunger**.

---

## 🚀 Deployment / Live Demo
- 🌐 **Vercel Demo** → [https://zero-hunger-website.vercel.app/](https://zero-hunger-website.vercel.app/)
- 🌐 **GitHub Pages** → [https://yashith03.github.io/Zero-Hunger-Website/html/splash.html](https://yashith03.github.io/Zero-Hunger-Website/html/splash.html)

*(Note: Navigation starts from the Splash Screen)*

---

## 📂 Project Structure
```text
ZERO-HUNGER-WEBSITE/
│
├── root/
│   └── product.json          # Product data for the merch shop
│
├── html/                     # Core Page Structure
│   ├── Home.html             # Landing page with mission & parallax hero
│   ├── shop.html             # Merch shop with dynamic cart logic
│   ├── gallery.html          # Dynamic image gallery (CSS Grid)
│   ├── Feedback.html         # User feedback form with validation
│   ├── Login.html            # User profile & authentication simulation
│   ├── checkout.html         # Multi-step checkout process
│   ├── sitemap.html          # Interactive SVG-based site map
│   ├── splash.html           # Animated entry screen
│   ├── aboutus.html          # Team & Project credits
│   ├── ContentPage_S2.html   # Educational: Urban Hunger
│   ├── ContentpageS4.html    # Educational: Causes of Hunger
│   ├── YashithContent.html   # Educational: Food Security & Nutrition
│   └── ... (Student Portfolios & Editor Pages)
│
├── css/                      # Stylesheets (Modular Design System)
│   ├── Navbar.css            # Global modern navigation
│   ├── Footer.css            # Standardized premium footer
│   ├── Style.css             # Home & Global variables
│   ├── Gallery.css           # Grid layouts & hover effects
│   └── (Page-specific styles)
│
├── js/                       # Client-Side Logic (Vanilla JavaScript)
│   ├── shop.js               # JSON fetching & Cart state management
│   ├── checkout.js           # Form validation & Order processing
│   ├── Feedback.js           # Interactive form handling
│   └── sitemap.js            # SVG navigation logic
│
└── images/                   # Optimized Asset Portfolio
    ├── Logo.png              # Brand identity
    ├── hero.jpg              # High-definition parallax background
    └── ... (Product & Content Media)
```

---

## 🌟 Features

### 🏷️ Dynamic Merch Shop (`shop.html`)
- **JSON-Driven Data**: Products are dynamically loaded from `product.json`.
- **State Management**: Uses Browser Cookies to persist cart data across sessions.
- **Interactive UI**: Sliding side-cart with real-time quantity adjustments.

### 🖼️ Modern Gallery & Content (`gallery.html`)
- **Responsive Layout**: Advanced CSS Grid system for diverse media display.
- **Educational Deep-dives**: Specialized content sections on Urban Insecurity, Food Deserts, and Global Initiatives.

### 🗺️ Interactive Sitemap (`sitemap.html`)
- **SVG Visualization**: A visual tree map of the entire website.
- **Dynamic Views**: Toggle between Primary Pages and Internal Sub-pages using JavaScript event listeners.

### 📝 Integrated Feedback & Profile (`Feedback.html` / `Login.html`)
- **Input Validation**: Robust client-side validation for emails, phone numbers, and required fields.
- **User Progression**: Animated profile completion tracking for user registration.

### 💳 Order Processing (`checkout.html`)
- **Summary Preview**: Real-time order calculation including totals and itemized lists.
- **Validation**: Ensures shipping and contact details are accurate before processing.

---

## 🚀 Installation Guide

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari).
- (Optional) A local server environment like VS Code "Live Server" extension for the best experience with JSON fetching.

### Running Locally
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yashith03/Zero-Hunger-Website.git
   ```
2. **Navigate to the Project**
   ```bash
   cd Zero-Hunger-Website
   ```
3. **Launch**
   - Open `html/splash.html` in your browser.
   - *Note: If using local files directly (file://), some browsers may block the JSON fetch in the shop due to CORS. Using a local server (e.g., `python -m http.server`) is recommended.*

---

## 🖥️ Usage Instructions
1. **Explore the Mission**: Start at the **Home** page to understand the importance of SDG 2.
2. **Shop for a Cause**: Visit the **Shop**, add items to your cart, and proceed to **Checkout** to see the order summary logic.
3. **Learn**: Browse the **Content Pages** to educate yourself on global food security challenges.
4. **Interact**: Use the **Sitemap** to quickly navigate between student-contributed pages and core modules.
5. **Connect**: Leave suggestions on the **Feedback** page to help us improve the platform.

---

## 📊 Performance & Security
- **Optimized Assets**: Parallax backgrounds and images are optimized for fast loading.
- **Modular CSS**: Separated styles for Navigation, Footer, and Content ensure minimal style leakage and faster rendering.
- **Secure Handling**: No sensitive data is transmitted; cart state is handled locally via secure cookie tokens.

---

## 🎓 Academic Context
This project was developed as a collaborative initiative for the **University of Westminster / IIT** coursework. It demonstrates proficiency in:
- **Semantic HTML5 & Modern CSS3** (Flexbox, Grid, Parallax).
- **Vanilla JavaScript** (ES6+, Fetch API, Cookie Storage).
- **UI/UX Design** with a focus on accessibility and premium aesthetics.

---
*Created with ❤️ by the Zero Hunger Development Team.*
