# Q-A-Webpage

# Interactive FAQ Webpage

## Overview

This project implements an **interactive FAQ webpage** using **HTML, CSS, and JavaScript with Object-Oriented Programming (OOP)**.
Users can click on questions to **toggle the visibility of answers**, creating a dynamic question–answer interface.

---

# Project Structure

```
Interactive_FAQ
│
├── index.html      # Main webpage structure
├── style.css       # Styling for FAQ layout
├── QA.js           # JavaScript logic using OOP
└── README.md
```

---

# Objective

Create an interactive webpage where:

* Questions are displayed on the screen
* Answers are hidden initially
* Clicking a question toggles the visibility of the answer
* JavaScript **OOP concepts** are used to generate and manage Q&A items

---

# Implementation

## HTML

Provides the basic structure and a container where FAQ items are dynamically inserted.

```
<div id="faq-container"></div>
```

---

## CSS

Used to style the interface and control the visibility of answers.

Example:

```
.answer {
  display: none;
}

.answer.show {
  display: block;
}
```

---

## JavaScript (OOP)

A class named **QAItem** represents each question-answer pair.

Responsibilities of the class:

* Store the **question and answer text**
* Toggle the **visibility of the answer**
* Dynamically **render the HTML structure**

An array stores multiple **QAItem objects**, and JavaScript loops through them to display the FAQ items on the webpage.

---

# Features

* Interactive FAQ interface
* Expand / collapse answers on click
* Visual indicator (+ / -)
* Object-Oriented JavaScript implementation
* Dynamic DOM manipulation

---

# Technologies Used

* **HTML**
* **CSS**
* **JavaScript (ES6)**
