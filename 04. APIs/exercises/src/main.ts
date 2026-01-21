import axios from "axios";

/** -----------------------------
 * Types
 * ----------------------------- */
type Pokemon = {
  id: number;
  name: string;
  spriteUrl: string;
  types: string[];
  height: number; // decimeters
  weight: number; // hectograms
};

type SavedPokemon = Pick<Pokemon, "id" | "name" | "spriteUrl" | "types">;

type AppState = {
  current: Pokemon | null;
  saved: SavedPokemon[]; // single source of truth for bottom section
  loading: boolean;
  error: string | null;
};

const state: AppState = {
  current: null,
  saved: [],
  loading: false,
  error: null,
};

/** -----------------------------
 * DOM
 * ----------------------------- */
const searchInput = document.querySelector<HTMLInputElement>("#searchInput")!;
const searchBtn = document.querySelector<HTMLButtonElement>("#searchBtn")!;
const prevBtn = document.querySelector<HTMLButtonElement>("#prevBtn")!;
const nextBtn = document.querySelector<HTMLButtonElement>("#nextBtn")!;
const saveBtn = document.querySelector<HTMLButtonElement>("#saveBtn")!;
const statusEl = document.querySelector<HTMLDivElement>("#status")!;
const currentEl = document.querySelector<HTMLDivElement>("#current")!;
const savedEl = document.querySelector<HTMLDivElement>("#saved")!;

/** -----------------------------
 * API
 * ----------------------------- */
const API_BASE = "https://pokeapi.co/api/v2/pokemon";

function normalizeQuery(q: string): string {
  return q.trim().toLowerCase();
}

function mapApiPokemon(data: any): Pokemon {
  return {
    id: data.id,
    name: data.name,
    spriteUrl: data.sprites?.front_default ?? "",
    types: (data.types ?? []).map((t: any) => t.type?.name).filter(Boolean),
    height: data.height,
    weight: data.weight,
  };
}

async function fetchPokemon(query: string | number): Promise<Pokemon> {
  const url = `${API_BASE}/${query}`;
  const res = await axios.get(url);
  return mapApiPokemon(res.data);
}

/** -----------------------------
 * State updates
 * ----------------------------- */
function setLoading(isLoading: boolean) {
  state.loading = isLoading;
  render();
}

function setError(message: string | null) {
  state.error = message;
  render();
}

function setCurrent(p: Pokemon | null) {
  state.current = p;
  render();
}

function addSavedFromCurrent() {
  if (!state.current) return;

  const exists = state.saved.some((p) => p.id === state.current!.id);
  if (exists) return;

  const toSave: SavedPokemon = {
    id: state.current.id,
    name: state.current.name,
    spriteUrl: state.current.spriteUrl,
    types: state.current.types,
  };

  state.saved = [toSave, ...state.saved]; // update array (single source of truth)
  render();
}

function removeSaved(id: number) {
  state.saved = state.saved.filter((p) => p.id !== id);
  render();
}

/** -----------------------------
 * Rendering (clear & rebuild)
 * ----------------------------- */
function renderStatus() {
  if (state.loading) {
    statusEl.textContent = "Loading...";
    statusEl.className = "status";
    return;
  }

  if (state.error) {
    statusEl.textContent = state.error;
    statusEl.className = "status";
    return;
  }

  statusEl.textContent = "";
  statusEl.className = "status";
}

function renderCurrent() {
  currentEl.innerHTML = ""; // clear

  if (!state.current) {
    const empty = document.createElement("div");
    empty.textContent = "No Pokémon loaded yet.";
    currentEl.appendChild(empty);
    return;
  }

  const p = state.current;

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "sprite";
  img.alt = p.name;
  img.src = p.spriteUrl || "";
  card.appendChild(img);

  const headerRow = document.createElement("div");
  headerRow.className = "row";

  const nameEl = document.createElement("strong");
  nameEl.textContent = cap(p.name);

  const idEl = document.createElement("span");
  idEl.textContent = `#${p.id}`;

  headerRow.appendChild(nameEl);
  headerRow.appendChild(idEl);
  card.appendChild(headerRow);

  const meta = document.createElement("div");
  meta.textContent = `Height: ${p.height}  •  Weight: ${p.weight}`;
  card.appendChild(meta);

  const badges = document.createElement("div");
  badges.className = "badges";
  p.types.forEach((t) => {
    const b = document.createElement("span");
    b.className = "badge";
    b.textContent = t;
    badges.appendChild(b);
  });
  card.appendChild(badges);

  currentEl.appendChild(card);
}

function renderSaved() {
  savedEl.innerHTML = ""; // clear

  if (state.saved.length === 0) {
    const empty = document.createElement("div");
    empty.textContent = "No saved Pokémon yet.";
    savedEl.appendChild(empty);
    return;
  }

  // rebuild entire list from state.saved (single source of truth)
  state.saved.forEach((p) => {
    const row = document.createElement("div");
    row.className = "savedItem";

    const left = document.createElement("div");
    left.style.display = "flex";
    left.style.alignItems = "center";
    left.style.gap = "10px";

    const img = document.createElement("img");
    img.src = p.spriteUrl || "";
    img.alt = p.name;
    img.width = 48;
    img.height = 48;
    img.style.imageRendering = "pixelated";

    const info = document.createElement("div");
    const title = document.createElement("div");
    title.innerHTML = `<strong>${cap(p.name)}</strong> <span style="opacity:.7">#${p.id}</span>`;
    const types = document.createElement("div");
    types.style.opacity = "0.8";
    types.style.fontSize = "13px";
    types.textContent = p.types.join(", ");

    info.appendChild(title);
    info.appendChild(types);

    left.appendChild(img);
    left.appendChild(info);

    const right = document.createElement("div");
    right.style.display = "flex";
    right.style.gap = "8px";

    const loadBtn = document.createElement("button");
    loadBtn.textContent = "Load";
    loadBtn.onclick = () => void loadById(p.id);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeSaved(p.id);

    right.appendChild(loadBtn);
    right.appendChild(removeBtn);

    row.appendChild(left);
    row.appendChild(right);

    savedEl.appendChild(row);
  });
}

function renderControls() {
  const hasCurrent = !!state.current;
  prevBtn.disabled =
    state.loading || !hasCurrent || (state.current?.id ?? 1) <= 1;
  nextBtn.disabled = state.loading || !hasCurrent;
  saveBtn.disabled = state.loading || !hasCurrent;

  searchBtn.disabled = state.loading;
  searchInput.disabled = state.loading;
}

function render() {
  renderStatus();
  renderControls();
  renderCurrent();
  renderSaved();
}

/** -----------------------------
 * Actions
 * ----------------------------- */
async function loadByQuery(raw: string) {
  const q = normalizeQuery(raw);
  if (!q) return;

  setError(null);
  setLoading(true);

  try {
    const pokemon = await fetchPokemon(q);
    setCurrent(pokemon);
  } catch (err: any) {
    // axios puts HTTP errors in err.response
    const code = err?.response?.status;
    if (code === 404) setError("Not found (check spelling / id).");
    else setError("Request failed.");
    setCurrent(null);
  } finally {
    setLoading(false);
  }
}

async function loadById(id: number) {
  await loadByQuery(String(id));
}

async function loadPrev() {
  if (!state.current) return;
  const id = state.current.id;
  if (id <= 1) return;
  await loadById(id - 1);
}

async function loadNext() {
  if (!state.current) return;
  await loadById(state.current.id + 1);
}

/** -----------------------------
 * Events
 * ----------------------------- */
searchBtn.addEventListener("click", () => void loadByQuery(searchInput.value));

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") void loadByQuery(searchInput.value);
});

prevBtn.addEventListener("click", () => void loadPrev());
nextBtn.addEventListener("click", () => void loadNext());

saveBtn.addEventListener("click", () => addSavedFromCurrent());

/** -----------------------------
 * Utils
 * ----------------------------- */
function cap(s: string) {
  if (!s) return s;
  return s[0].toUpperCase() + s.slice(1);
}

/** Initial render */
render();
