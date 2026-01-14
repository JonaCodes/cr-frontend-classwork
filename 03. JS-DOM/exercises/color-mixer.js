// hover-grid.js
const colsInput = document.getElementById("cols");
const rowsInput = document.getElementById("rows");
const buildBtn = document.getElementById("buildBtn");
const clearBtn = document.getElementById("clearBtn");
const gridEl = document.getElementById("grid");

const COLORS = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

// erase mode state
let erasing = false;

// turn erasing on/off
gridEl.addEventListener("mousedown", (e) => {
  // only when clicking on a cell
  if (e.target.classList.contains("cell")) {
    erasing = true;
    // also erase the cell you started on
    e.target.style.background = "white";
  }
});

document.addEventListener("mouseup", () => {
  erasing = false;
});

function buildGrid() {
  const cols = Number(colsInput.value);
  const rows = Number(rowsInput.value);

  if (!Number.isFinite(cols) || !Number.isFinite(rows) || cols < 1 || rows < 1)
    return;

  gridEl.innerHTML = "";
  gridEl.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  const total = cols * rows;

  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    cell.addEventListener("mouseenter", () => {
      if (erasing) {
        cell.style.background = "white";
      } else {
        cell.style.background = randomColor();
      }
    });

    // optional: prevent drag-selecting text / weird browser behavior
    cell.addEventListener("dragstart", (e) => e.preventDefault());

    gridEl.appendChild(cell);
  }
}

function clearGrid() {
  gridEl.querySelectorAll(".cell").forEach((c) => {
    c.style.background = "white";
  });
}

buildBtn.onclick = buildGrid;
clearBtn.onclick = clearGrid;

buildGrid();
