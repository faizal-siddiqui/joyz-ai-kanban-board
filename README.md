# 📝 Dynamic Kanban Board

A **dynamic Kanban Board** built with **HTML**, **CSS**, and **Vanilla JavaScript** that lets you create, organize, and manage tasks with **drag & drop** functionality.

This project follows a **modular JavaScript architecture**, emphasizes **accessibility**, and applies clean **UI/UX** practices.

---

## 🚀 Features

- ✅ **Task Creation** – Add tasks with a title and description via a form.
- ✅ **Drag & Drop** – Move tasks seamlessly across _To Do_, _In Progress_, and _Done_ columns.
- ✅ **Dynamic Rendering** – Tasks are dynamically generated and updated in the DOM.
- ✅ **In-Memory Storage** – Tasks are saved during runtime (_can easily be extended to use localStorage or APIs_).
- ✅ **Task Metadata** – Each task includes an auto-generated ID and a creation timestamp.
- ✅ **Responsive Design** – Works across desktop, tablet, and mobile devices.
- ✅ **Accessibility Ready** – ARIA roles, labels, and semantic HTML improve screen reader support.
- ✅ **Sample Tasks** – Preloaded tasks for demonstration when no data is present.
- ✅ **Error Handling** – Global error listeners to capture unexpected issues.

---

---

## ⚡ Modules & Responsibilities

The code is modular and separated into individual responsibilities:

### 🔹 StorageManager

Handles saving, loading, and clearing tasks _(currently in-memory, pluggable for localStorage)_.

### 🔹 Utils

Helper functions for:

- Generating unique IDs
- Creating DOM elements
- Formatting timestamps
- Debouncing function calls

### 🔹 TaskManager

Manages CRUD operations for tasks:

- Create
- Update status
- Filter by status
- Retrieve all tasks

### 🔹 RenderManager

Updates the DOM:

- Renders tasks into correct columns
- Displays empty state messages

### 🔹 DragDropManager

Implements drag-and-drop functionality:

- `dragstart`, `dragover`, `drop`, etc.

### 🔹 EventManager

Handles all user interactions:

- Form submission
- Event delegation

### 🔹 KanbanApp

Main entry point:

- Bootstraps the app
- Initializes modules
- Loads and renders sample tasks

---

## 🎨 UI/UX Highlights

- 🌈 Modern gradient backgrounds
- 🧾 Rounded task cards with shadows
- ✨ Hover & drag animations
- ❌ Empty state visuals
- 📐 Responsive grid layout (`grid-template-columns: repeat(auto-fit, minmax()))`)

---

## ♿ Accessibility Best Practices

- Semantic HTML: `<main>`, `<section>`, `<header>`, `<form>`
- Properly associated labels: `<label for="taskTitle">`
- ARIA roles: `role="list"`, `role="listitem"`, `aria-live="polite"`
- Keyboard focus management (focus resets to title input)

---

## 🛠 Code Best Practices

- ✅ **Modular JavaScript** – Clean separation of concerns
- ✅ **Event Delegation** – Efficient drag/drop and form event handling
- ✅ **Error Handling** – Global listeners for debugging
- ✅ **DOM Updates** – Only relevant columns are re-rendered
- ✅ **Utility Functions** – DRY principles
- ✅ **Debounce Pattern** – Extensible for future features like search or filter

---

## 🔮 Future Improvements

- [ ] Persist tasks with **localStorage** or **IndexedDB**
- [ ] Add **task editing & deletion**
- [ ] Implement **user authentication** + backend API
- [ ] Support **drag-and-drop task ordering**
- [ ] Add **dark mode** toggle

---

## 📖 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/faizal-siddiqui/joyz-ai-kanban-board.git
cd dynamic-kanban-board

```

2. **Open the project:**

- Just open index.html in your browser.
- No server required – works as a static project.

## Tech Stack

- HTML5 – Semantic structure
- CSS3 – Responsive UI & animations
- JavaScript (ES6+) – Modular architecture, drag & drop API
