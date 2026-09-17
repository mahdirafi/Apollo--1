 
# JavaScript Fundamentals — Assignment 01

A clean and well-structured implementation of core JavaScript concepts covering type checking, conditional logic, string manipulations, function calculations, and arrow functions.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Functions Overview](#functions-overview)
- [Project Structure](#project-structure)
- [Getting Started & Testing](#getting-started--testing)
- [Constraints & Rules Followed](#constraints--rules-followed)

---

## 📌 Overview

This repository contains solutions for Assignment 01, focusing on fundamental JavaScript programming concepts. All solutions strictly adhere to functional returns, proper naming conventions, and sequential conditional evaluation.

---

## ⚡ Functions Overview

### 1️⃣ `describeValue(value)`
* **Description:** Determines the primitive data type of a value and evaluates its truthiness.
* **Returns:** `"type | truthy/falsy"`
* **Key Handling:** Correctly evaluates special edge cases like `"0"` (`string | truthy`), `NaN` (`number | falsy`), and `null` (`object | falsy`).

### 2️⃣ `getDayType(day)`
* **Description:** Classifies a given day of the week as a working day or weekend using a `switch` statement with case-insensitivity.
* **Returns:** `"Weekend"`, `"Working Day"`, or `"Invalid Day"`.
* **Logic:** Utilizes fall-through cases for Friday and Saturday.

### 3️⃣ `validateUsername(username)`
* **Description:** Validates a username string based on three strict rules evaluated in order:
  1. Length must be at least 4 characters (`"Too Short"`).
  2. Must not contain space characters (`"No Space Allowed"`).
  3. Must not contain the reserved word "admin" (case-insensitive) (`"Reserved Word"`).
* **Returns:** `"Available"` if all checks pass.

### 4️⃣ `getCngFare(distance, isNight = false, waitingMinutes = 0)`
* **Description:** Calculates total CNG fare based on distance, waiting time, and night surcharge options.
* **Calculation:**
  * Base fare: `50` (covers up to 2 km).
  * Additional distance (> 2 km): `15` per extra km.
  * Waiting time: `2` per minute.
  * Night surcharge: `20%` extra on total fare if `isNight === true`.

### 5️⃣ `getChaseVerdict(target, scored, ballsLeft)`
* **Description:** Arrow function that computes required run-rate in a cricket run-chase and provides a match verdict.
* **Verdict Rules:**
  * Runs needed \\(\le 0\\) \\(\rightarrow\\) `"Won"`
  * Balls left \\(\le 0\\) \\(\rightarrow\\) `"Lost"`
  * Required Run Rate (RRR) \\(\le 6\\) \\(\rightarrow\\) `"Comfortable"`
  * RRR \\(\le 12\\) \\(\rightarrow\\) `"Tough"`
  * RRR \\(> 12\\) \\(\rightarrow\\) `"Almost Impossible"`

---

## 📁 Project Structure

```text
.
├── app.js       # Main solution file containing all 5 assignment functions
└── README.md       # Project documentation
```

---

## 🧪 Getting Started & Testing

### Prerequisites
* [Node.js](https://nodejs.org/) installed locally, OR any modern web browser console.

### Running Tests
To test the functions locally using Node.js:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/assignment-1.html
   cd assignment-1
   ```

2. Add test calls at the bottom of `answer.js` or run via Node REPL:
   ```bash
   node answer.js
   ```

3. Sample test snippet:
   ```javascript
   console.log(describeValue("0"));                // "string | truthy"
   console.log(getDayType("Saturday"));            // "Weekend"
   console.log(validateUsername("dev_user"));       // "Available"
   console.log(getCngFare(10, true, 5));           // 216
   console.log(getChaseVerdict(180, 150, 12));     // "Tough"
   ```

---

## ✅ Constraints & Rules Followed

- [x] All functions use explicit `return` statements (no inline `console.log` inside functions).
- [x] Followed exact function signature names and casing requirements.
- [x] Every question is marked with `//Question No. X` comment headers.
- [x] Solved strictly using basic JavaScript control structures (no Array methods, Loops, or Object data structures).
```
