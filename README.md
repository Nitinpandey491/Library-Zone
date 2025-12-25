# 📚 LIBRARYZONE - Library Management System

> **LIBRARYZONE** is a web-based Library Management System designed to streamline the operations of a library. It provides distinct portals for **Administrators**, **Teachers**, and **Students** to manage books, issue records, and user profiles efficiently.

---

## 🚀 Key Features

### 🔐 authentication & Roles
* **Admin Login:** Secure access for librarians to manage the entire system.
* **User Registration:** Separate registration forms for **Students** (with Course selection) and **Teachers** (with Department selection).
* **User Login:** Dedicated login panels for students and teachers.

### 👨‍💼 Admin Modules
* **Dashboard:** Quick access to manage and issue books.
* **Manage Books:** Add new books with details (Title, Author, ISBN) and view the inventory.
* **Issue Books:** Track issued books, view due dates, and manage returns.

### 👨‍🎓 Student & Teacher Modules
* **View Books:** Browse the list of available books in the library.
* **Issue Book Request:** Form to request a book issue with category and ISBN.
* **Change Password:** Feature to update account security.
* **Profile Management:** User-specific dashboard.

---

📂 LIBRARYZONE – UI Screens (Section-wise Grouping)

1️⃣ 🏠 Home & Landing Module

---> Main landing page with navigation to Login and Registration.

📄 Screenshots:

---> [Home Page](Application_UI/Home_Page.jpg)


2️⃣ 🔐 Authentication Module

---> Dedicated login interfaces for Students, Teachers, and Admins, plus Registration forms.

📄 Screenshots:

---> [User Login Page (Student & Teacher)](Application_UI/Login_Page.jpg)

---> [Admin Login Page](Application_UI/Admin_Login_Page.jpg)

---> [Registration Page](Application_UI/Register_Page.jpg)


3️⃣ 👨‍💼 Admin Panel Module

---> Dashboard for Librarians to add books, manage inventory, and handle book issues.

📄 Screenshots:

---> [Admin Dashboard Panel](Application_UI/Admin_Page_1.jpg)

---> [Manage Books (Add & Delete)](Application_UI/Admin_Page_2.jpg)

---> [Issue Books Management](Application_UI/Admin_Page_3.jpg)


4️⃣ 🎓 Student Panel Module

---> Student interface to view available books, request book issues, and manage account security.

📄 Screenshots:

---> [Student Dashboard](Application_UI/Student_Page_1.jpg)

---> [View All Books List](Application_UI/Student_Page_2.jpg)

---> [Issue Book Request Form](Application_UI/Student_Page_3.jpg)

---> [Change Password Page](Application_UI/Student_Page_4.jpg)
---

## 🛠️ Tech Stack Used

* **Frontend Structure:** HTML5
* **Styling:** CSS3 (Custom responsive design with Flexbox)
* **Icons:** FontAwesome 4.7.0
* **Scripting:** Vanilla JavaScript (DOM Manipulation)

---

## 📂 Project Structure

```text
LIBRARYZONE/
├── index.html          # Main Login Landing Page
├── home.html           # Home Page
├── admin.html          # Admin Login
├── register.html       # Registration Page
├── admin_panel.html    # Admin Dashboard
├── manage_book.html    # Book Inventory Management
├── issue_book.html     # Admin Issue Management
├── student_panel.html  # Student Dashboard
├── stu_book.html       # Student Book View
├── tea_panel.html      # Teacher Dashboard
├── tea_book.html       # Teacher Book View
├── css/                # Contains all .css files (s1.css to s15.css)
├── js/                 # Contains script.js and script2.js
└── images/             # Backgrounds and Assets

```

---

## ⚡ How to Run

1. **Clone the repository** (or download the zip file):
```bash
git clone [https://github.com/yourusername/libraryzone.git](https://github.com/yourusername/libraryzone.git)

```


2. **Navigate to the project folder**.
3. **Open the file:**
Double-click on `home.html` or `index.html` to open the application in your web browser.

---

## 👤 Author

**Nitin Vinay Pandey**

* Developer & Designer

---

*Note: This project is a frontend prototype demonstrating the UI/UX and logic flow of a Library Management System.*
