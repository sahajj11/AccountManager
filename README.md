# 🚀 Account Manager: User Identity & Account Management System

## 🌟 Project Overview

**Account Manager** is a clean, modern, single-page application built to demonstrate best practices in **User Authentication and State Management** in a React environment.

It provides the full user lifecycle: secure registration, login, protected routing, and a polished account management portal where users can update their details with an intuitive editing experience.

---

## 🌐 Live Demo

- **Live:**(https://accountmanagerrr.onrender.com) 

---

## ✨ Key Features Demonstrated

This project showcases a strong understanding of modern React architecture and front-end development principles:

  * **Robust Authentication Flow:** Implements complete functionality for user registration, login, and secure logout.
  * **Centralized State Management:** Utilizes the **React Context API** and a custom **`useAuth` hook** to manage global user state, loading, and authentication actions centrally.
  * **Protected Routing:** Uses a custom `<ProtectedRoute />` component to enforce access control, ensuring authenticated pages are inaccessible to guests.
  * **Account Management Portal:** Features a clean interface for users to update their **Name, Email, and Password**.
  * **Separation of Concerns (SoC):** Strict layer division (Presentation, State Logic, and Service/API) for a highly maintainable codebase.

-----

## 🏗️ Architecture & Technology Stack

### 1\. Technology

| Stack | Description |
| :--- | :--- |
| **Frontend** | React (Hooks & Context) |
| **Styling** | **Tailwind CSS** (for rapid, utility-first styling) |
| **Routing** | `react-router-dom` |
| **"Backend"** | Mock API Layer (Simulated persistence using `localStorage`) |

### 2\. Code Structure (Separation of Concerns)

The project structure is organized into three distinct layers to ensure scalability and maintenance:

| Directory | Layer | Purpose |
| :--- | :--- | :--- |
| `src/api` | **Service/Business Logic** | Contains mock API functions (`authService.js`, `userService.js`) responsible for fetching, saving, and updating data (simulated with `localStorage`). |
| `src/hooks` | **State Logic Layer** | Contains the core `useAuth.js` custom hook, which encapsulates all authentication and state management logic. |
| `src/context`| **Global State** | Contains `AuthContext.js`, which exposes the authentication state and actions globally to the rest of the application. |
| `src/pages` | **Views/Containers** | Top-level page components (`LoginPage`,`RegistrationPage`, `AccountPage`). |
| `src/components`| **Presentation/UI** | Reusable UI components (`LoginForm`,`Footer`, `Navbar`, `AccountDetailsForm`). |

-----

## ⚙️ Setup and Installation

Follow these steps to get the project running locally:

1.  **Clone the Repository:**

    ```bash
    git clone [your-repository-url]
    cd accountmanager
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Application:**

    ```bash
    npm run dev
    # or
    yarn start
    ```

The application will be accessible at `http://localhost:5173`.

-----

## 🚶 How to Use

1.  **Register:** Navigate to the `/register` page and create a new account (all data is persisted in your browser's `localStorage`).
2.  **Login:** Use your new credentials to access the application.
3.  **Protected Route:** Upon successful login, you will be redirected to the **Account Page** (`/account`).
4.  **Update Details:** Use the **Pencil icon** next to the Name or Email fields to enable edit mode, make your changes, and click **"Save Account Details"** to persist the update.
5.  **Logout:** Use the **Logout** button in the top navigation bar to clear your session.
