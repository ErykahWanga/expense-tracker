# Expense Tracker

![Expense Tracker Banner](https://via.placeholder.com/1200x400.png?text=Expense+Tracker+App)

A modern, React-based web application for tracking and managing expenses. Users can add, view, search, sort, and delete expenses with a clean and intuitive interface. The app includes local storage for data persistence and a responsive design for seamless use across devices.

This project was developed as part of a Week 1 code challenge, meeting all rubric criteria with a focus on functionality, code structure, and user experience.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Rubric Compliance](#rubric-compliance)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

---

## Overview
The Expense Tracker is a single-page application (SPA) built with React and Vite, designed to help users manage their expenses efficiently. It allows users to add expenses with details such as name, description, amount, category, and a manually selected date. Expenses are displayed in a table, with options to search, sort, and delete them. The app persists data using `localStorage`, ensuring expenses remain after a page refresh, and includes default sample data for a better initial experience.

The project was developed to meet the requirements of a Week 1 code challenge, focusing on functionality (e.g., form submission, search, sorting, deletion), code organization, and a user-friendly UI/UX design.

---

## Features
- **Add Expenses**: Submit expenses via a form with fields for name, description, amount, category, and a manually selected date.
- **View Expenses**: Displays expenses in a table with columns for Description, Category, Amount, Date, and a Delete action.
- **Search Functionality**: Filter expenses by name or description using a search bar.
- **Sort Functionality**: Sort expenses by category or description, with a "Clear Sort" option.
- **Delete Expenses**: Remove expenses with a delete button, updating the table dynamically.
- **Local Storage**: Persists expenses across page refreshes using `localStorage`.
- **Default Data**: Includes two sample expenses on first load for demonstration purposes.
- **Form Validation**: Ensures all fields are filled before submission, using HTML5 `required` attributes.
- **Responsive Design**: Adapts to different screen sizes, stacking the form and table on mobile devices.

---

## Demo
The app is live and can be accessed at:

**[Live Demo](https://expense-tracker-five-green.vercel.app)**

### Screenshots
Below is a screenshot of the Expense Tracker in action:

![Expense Tracker Screenshot](screenshots/expense-tracker.png)

*(Note: Add a screenshot to the `screenshots/` folder and update the path above.)*

---

## Tech Stack
- **Frontend**: React (v18.2.0)
- **Build Tool**: Vite (v4.3.9) for fast development and production builds
- **Styling**: CSS with a minimalistic dark theme
- **State Management**: React `useState` and `useEffect` hooks
- **Data Persistence**: `localStorage` for client-side storage
- **Version Control**: Git and GitHub
- **Deployment**: Vercel

---

## Setup Instructions
Follow these steps to set up and run the project locally.

### Prerequisites
- **Node.js**: Version 16 or later. Download from [nodejs.org](https://nodejs.org/).
- **Git**: To clone the repository. Download from [git-scm.com](https://git-scm.com/).

### Installation Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ErykahWanga/expense-tracker.git
   cd expense-tracker