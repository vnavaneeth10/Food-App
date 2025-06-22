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


