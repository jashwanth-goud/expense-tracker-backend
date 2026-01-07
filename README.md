# Expense Tracker Mobile Application

## Overview
A full-stack Expense Tracker mobile application with secure backend integration.
Users can register, log in using JWT authentication, and manage expenses.

## Tech Stack
- Mobile App: Android (Java, XML)
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Authentication: JWT
- API Format: REST (JSON)

## Features
- User Registration
- User Login (JWT)
- Secure API access
- Expense CRUD operations
- Backend integration with Android app

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Expenses (JWT Protected)
- POST /api/expenses
- GET /api/expenses
- DELETE /api/expenses/:id

## How to Run Backend
1. Clone repo
2. Install dependencies: `npm install`
3. Add `.env` with MongoDB URI and JWT secret
4. Start server: `npx nodemon server.js`

## APK
APK is provided via Google Drive link.

## Author
Jashwanth Goud
