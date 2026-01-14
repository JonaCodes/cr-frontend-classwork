// calculator.js
const keysEl = document.getElementById("keys");
const resultEl = document.getElementById("result");
const expressionEl = document.getElementById("expression");

// ----- state -----
let current = "0";
let previous = null;
let operator = null;

// ----- helpers -----
function updateDisplay() {
  resultEl.textContent = current;
  expressionEl.textContent =
    previous !== null && operator ? `${previous} ${operator}` : "";
}

function compute(a, op, b) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return b === 0 ? "Error" : a / b;
}

function clearAll() {
  current = "0";
  previous = null;
  operator = null;
  updateDisplay();
}

function backspace() {
  if (current === "Error") return clearAll();
  if (current.length <= 1) current = "0";
  else current = current.slice(0, -1);
  updateDisplay();
}

function addDigit(d) {
  if (current === "Error") clearAll();
  if (current === "0") current = d;
  else current += d;
  updateDisplay();
}

function addDot() {
  if (current === "Error") clearAll();
  if (!current.includes(".")) current += ".";
  updateDisplay();
}

function setOperator(op) {
  if (current === "Error") return;

  // If they press operator twice, just change the operator
  if (previous !== null && operator !== null && current === "0") {
    operator = op;
    updateDisplay();
    return;
  }

  // If there's already a pending operation, compute first
  if (previous !== null && operator !== null) {
    const result = compute(previous, operator, Number(current));
    current = String(result);
    previous = result === "Error" ? null : Number(result);
    operator = result === "Error" ? null : op;
    current = result === "Error" ? "Error" : "0";
    updateDisplay();
    return;
  }

  previous = Number(current);
  operator = op;
  current = "0";
  updateDisplay();
}

function calculate() {
  if (previous === null || operator === null || current === "Error") return;

  const result = compute(previous, operator, Number(current));
  current = String(result);
  previous = null;
  operator = null;
  updateDisplay();
}

// ----- render keys (REAL ROWS) -----
const rows = [
  [
    { t: "C", a: "clear" },
    { t: "⌫", a: "back" },
    { t: ".", a: "dot" },
    { t: "÷", o: "/" },
  ],
  [
    { t: "7", d: "7" },
    { t: "8", d: "8" },
    { t: "9", d: "9" },
    { t: "×", o: "*" },
  ],
  [
    { t: "4", d: "4" },
    { t: "5", d: "5" },
    { t: "6", d: "6" },
    { t: "−", o: "-" },
  ],
  [
    { t: "1", d: "1" },
    { t: "2", d: "2" },
    { t: "3", d: "3" },
    { t: "+", o: "+" },
  ],
  [
    { t: "0", d: "0", cls: "wide2" },
    { t: "=", a: "equals", cls: "equals wide2" },
  ],
];

function makeKey({ t, d, o, a, cls }) {
  const key = document.createElement("div");
  key.className = "key";
  key.textContent = t;

  if (o) key.classList.add("operator");
  if (cls) cls.split(" ").forEach((c) => key.classList.add(c));

  key.onclick = () => {
    if (d !== undefined) addDigit(d);
    else if (o) setOperator(o);
    else if (a === "clear") clearAll();
    else if (a === "back") backspace();
    else if (a === "dot") addDot();
    else if (a === "equals") calculate();
  };

  return key;
}

keysEl.innerHTML = "";
rows.flat().forEach((k) => keysEl.appendChild(makeKey(k)));

updateDisplay();
