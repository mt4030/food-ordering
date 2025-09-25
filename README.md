

# 🍔 D&D Food Delivery App

A modern food ordering app built with **React**, **TypeScript**, and **Tailwind CSS**, featuring a **cart system** with `useReducer`, `useContext`, and reusable components.

---

## 🔹 Features

* Browse available meals with **name, description, and price**.
* **Add / Remove items** to a shopping cart.
* **Dynamic cart total** calculation.
* **Modal overlay** for cart display using React portals.
* **Form validation** for meal quantity (1–5).
* Fully typed components with **TypeScript** support.
* Responsive UI using **Tailwind CSS**.

---

## 🗂 Folder Structure

```
src/
 ┣ components/
 ┃ ┣ layout/
 ┃ ┃ ┣ Navbar.tsx
 ┃ ┃ ┣ Footer.tsx
 ┃ ┃ ┗ Hero.tsx
 ┃ ┣ cart/
 ┃ ┃ ┣ Cart.tsx
 ┃ ┃ ┣ CartItem.tsx
 ┃ ┃ ┣ HeaderCartButton.tsx
 ┃ ┃ ┗ Modal.tsx
 ┃ ┣ meals/
 ┃ ┃ ┣ FoodApp.tsx
 ┃ ┃ ┣ AvailableMeals.tsx
 ┃ ┃ ┣ MealItem.tsx
 ┃ ┃ ┣ MealItemForm.tsx
 ┃ ┃ ┣ MealsSummaryHero.tsx
 ┃ ┃ ┗ Input.tsx
 ┃ ┗ ui/
 ┃    ┗ Card.tsx
 ┣ store/
 ┃ ┣ cart-context.tsx
 ┃ ┗ CartProvider.tsx
 ┣ App.tsx
 ┗ main.tsx
```

---

## ⚡ How It Works

1. **Global State:**
   Cart state is managed using `useReducer` inside `CartProvider`.
2. **Context:**
   `CardContext` provides cart items, total amount, and handlers (`addToCart` / `removeItem`) across the app.
3. **Portals:**
   Cart modal uses React portals for overlay and scrollable modal.
4. **Forms & Refs:**
   Meal quantity forms use `useRef` and forward refs for controlled access and validation.
5. **Type Safety:**
   All props, context values, and reducer actions are typed with TypeScript for safer coding.

---

## 💻 Getting Started

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/dd-food-app.git
cd dd-food-app
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the app:**

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Tech Stack

* **React 18**
* **TypeScript**
* **Tailwind CSS**
* **React Context + useReducer**
* **React Portals**

---

## 📌 Future Improvements

* Add **checkout functionality** with payment integration.
* Persist cart using **localStorage**.
* Enhance **responsive design** for mobile.
* Unit tests with **Jest / React Testing Library**.

---

## ✨ Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is **MIT licensed**.

---



Do you want me to do that next?
