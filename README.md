# Ecommerce
A comprehensive e-commerce platform that provides users with a seamless shopping experience, including features,
like product search, category filtering, price sorting, integrated payment gateway, user profile management, and more.

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file in ./server directory and in client also.

`CONNECTION_STRING` of MongoDB database
`TOKEN_KEY` for JWT 
`PAYMENT_GATEWAY_API_KEY` for integrating the payment gateway.

## Features

- User Authentication: Register, login, and logout functionalities.
- Product Search and Filtering: Search products by category and price range.
- User Profile Management: Update and view personal profile details.
- Shopping Cart: Add, update, and remove items from the cart.
- Order Management: View order history and order details.
- Integrated Payment Gateway: Secure payment processing for orders.
- Admin Dashboard: Manage products, categories, and users.
- Responsive Design: Optimized for only desktop.

## Run Locally

Clone the project

```bash
  git clone https://github.com/PrashantSharmaIt/Ecommerce.git
```

Go to the project directory

```bash
  cd ./server
```

Install dependencies

```bash
  npm i && cd client && npm i
```

Start the server and client (have added concurrently)

```bash
  npm run dev
```
```
View locally at http://localhost:3000

## Deployment

Check out deployed project on

```bash
  https://ecommerce-7k1r.onrender.com/
```


## Heads Up
