# VueShop — Клиентская часть интернет-магазина

Курсовая работа по дисциплине «Веб-разработка».

**Тема:** Клиентская часть интернет-магазина с функционалом интерактивного каталога товаров и корзины.

## Функциональность

- **Каталог товаров** — загрузка из [FakeStoreAPI](https://fakestoreapi.com), фильтрация по категории, поиск по названию
- **Детальная карточка товара** — полная информация, рейтинг, добавление в корзину
- **Корзина** — добавление/удаление товаров, управление количеством, подсчёт итоговой суммы, сохранение в `localStorage`
- **Адаптивная вёрстка** — mobile-first, breakpoints: 480px / 768px / 1024px / 1280px

## Стек технологий

| Технология | Версия | Назначение |
|---|---|---|
| Vue 3 | ^3.5 | UI-фреймворк (Composition API, `<script setup>`) |
| Vite | ^8.0 | Сборщик и dev-сервер |
| Vue Router 4 | ^4.6 | Клиентская маршрутизация (hash-режим) |
| Pinia | ^3.0 | Управление состоянием корзины |
| Axios | ^1.x | HTTP-запросы к FakeStoreAPI |
| CSS3 (BEM) | — | Методология именования классов |
| Bun | latest | Пакетный менеджер и рантайм |

## ООП-классы

- `Product` — модель товара, геттеры `formattedPrice`, `ratingStars`
- `CartItem` — элемент корзины, геттер `subtotal`
- `Cart` — корзина, методы `add`, `remove`, `increaseQty`, `decreaseQty`
- `ProductService` — получение данных из API с in-memory кэшем и fallback на локальные фикстуры

## Структура проекта

```
src/
├── assets/
│   ├── data/products.json    # локальные фикстуры (fallback)
│   └── styles/               # глобальные CSS (переменные, reset)
├── classes/                  # ES6-классы (Product, CartItem, Cart, ProductService)
├── components/               # Vue-компоненты (BEM-блоки)
│   ├── AppHeader/
│   ├── AppSpinner/
│   ├── AppError/
│   ├── ProductCard/
│   ├── ProductList/
│   ├── SearchBar/
│   ├── CategoryFilter/
│   ├── CartItem/
│   └── CartSummary/
├── composables/              # useProducts, useProduct
├── router/                   # Vue Router (hash-mode)
├── stores/                   # Pinia store (cartStore)
└── views/                    # HomeView, ProductView, CartView
```

## Запуск проекта

```bash
# Установить зависимости
bun install

# Dev-сервер (http://localhost:5173)
bun run dev

# Production-сборка
bun run build

# Предпросмотр сборки
bun run preview
```

## Деплой

Проект автоматически публикуется на GitHub Pages при push в ветку `main` через GitHub Actions.

**Live demo:** https://marimo213.github.io/vue-shop/

## Внешний API

Используется [FakeStoreAPI](https://fakestoreapi.com) — публичный REST API без регистрации.

| Endpoint | Описание |
|---|---|
| `GET /products` | Список всех товаров |
| `GET /products/:id` | Товар по ID |
| `GET /products/categories` | Список категорий |
