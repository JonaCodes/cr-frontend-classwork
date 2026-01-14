const input = document.getElementById("numberInput");
const addBtn = document.getElementById("addBtn");
const listEl = document.getElementById("list");

const sumEl = document.getElementById("sum");
const avgEl = document.getElementById("avg");
const minEl = document.getElementById("min");
const maxEl = document.getElementById("max");

// state
let values = [];

function render() {
  listEl.innerHTML = "";

  values.forEach((value, index) => {
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = value;

    item.onclick = () => {
      values = values.filter((_, i) => i !== index);
      render();
    };

    listEl.appendChild(item);
  });

  if (values.length === 0) {
    sumEl.textContent = 0;
    avgEl.textContent = 0;
    minEl.textContent = "-";
    maxEl.textContent = "-";
    return;
  }

  const sum = values.reduce((a, b) => a + b, 0);
  const avg = sum / values.length;

  sumEl.textContent = sum;
  avgEl.textContent = avg.toFixed(2);
  minEl.textContent = Math.min(...values);
  maxEl.textContent = Math.max(...values);
}

addBtn.onclick = () => {
  const value = Number(input.value);
  if (Number.isNaN(value)) return;

  values.push(value);
  input.value = "";
  render();
};

render();
