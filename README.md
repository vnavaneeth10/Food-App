# 🍽️ Swadish - Food Ordering React App

Swadish is a high-performance, responsive food ordering web application built using React.js. It mimics Swiggy's live UI and features real-time restaurant and menu data, component testing, and modern UI practices.

---

## 🚀 Features

- 🍔 Dynamic restaurant listing with Swiggy's live API
- 🛒 Cart functionality using Redux Toolkit
- ⚡ Shimmer loading UI and lazy loading
- 🔍 Search restaurants and filter by rating
- 🧪 Unit testing with Jest & React Testing Library
- 📱 Mobile-responsive with Tailwind CSS

---

## 🧰 Tech Stack

- ⚛️ **React.js** – Component-based architecture
- 🛠️ **Redux Toolkit** – State management with slices and store
- 🎨 **Tailwind CSS** – Utility-first CSS for responsive UI
- 🧪 **Jest & React Testing Library** – Unit and component testing
- 🌐 **React Router DOM** – Client-side routing
- 📦 **Parcel** – Blazing fast bundler for development
- 🧠 **React Hooks & Context API** – Managing local and global state
- 💤 **Lazy Loading** – Improves performance and load time

---

## 🏗️ Folder Structure

```bash
src/
├── components/
│   ├── __tests__/
│   │   ├── Cart.test.js
│   │   ├── Contact.test.js
│   │   ├── Header.test.js
│   │   ├── RestaurantCard.test.js
│   │   └── Search.test.js
│   ├── mocks/
│   │   ├── mockResListData.json
│   │   ├── mockResMenu.json
│   │   └── resCardMock.json
│   ├── About.js
│   ├── Body.js
│   ├── Cart.js
│   ├── Contact.js
│   ├── Error.js
│   ├── Grocery.js
│   ├── Header.js
│   ├── ItemList.js
│   ├── RestaurantCard.js
│   ├── RestaurantCategory.js
│   ├── RestaurantMenu.js
│   ├── Shimmer.js
│   ├── User.js
│   └── UserClass.js
├── utils/
│   ├── appStore.js
│   ├── cartSlice.js
│   ├── constants.js
│   ├── useOnlineStatus.js
│   ├── UserContext.js
│   └── useRestaurantMenu.js
└── App.js
```

---


##  📦 Installation

To set up and run this project locally:

```bash
git clone https://github.com/vnavaneeth10/Food-App.git
cd Food-App
npm install
npm start
```

> ✅ Make sure [Node.js](https://nodejs.org/) and [Parcel](https://parceljs.org/) are installed.

---

### ⚙️ CORS Extension Required (For Swiggy Live API)

Since this project uses **Swiggy's live API**, you might encounter **CORS errors** while fetching data.

To avoid this:

1. Install this Chrome CORS plugin:  
   👉 [**Allow CORS: Access-Control-Allow-Origin**](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en)

2. After installation, **toggle the extension switch ON** (top right of Chrome)

⚠️ **Caution:**  
If the CORS extension is **enabled (ON)**, some apps like **YouTube** or streaming platforms may **pause or fail to load videos**.  
➡️ Remember to **turn it OFF** after using the app.


---

## 🧪 Run Tests

To run unit tests using **Jest** and **React Testing Library**:

```bash
npm test
```

> ✅ Test files are located inside `components/__tests__/`

---

## 🌐 Live Demo

👉 [**Live App**](https://swadishcom.vercel.app/)


---


## 📄 License

This project is licensed under the **MIT License**.

```text
MIT License

Copyright (c) 2025 Navaneeth

MIT License

Copyright (c) 2025 Navaneeth

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
