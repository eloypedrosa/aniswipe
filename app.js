// --- DICCIONARIO DE IDIOMAS ---
const TRANSLATIONS = {
  es: {
    anime: "Anime",
    manga: "Manga",
    filters: "Filtros",
    myList: "Mi lista",
    language: "Idioma",
    close: "Cerrar",
    filterTitle: "Filtrar",
    applyFilters: "Aplicar filtros",
    clear: "Limpiar",
    loading: "Cargando",
    noResults: "¡No se encontraron resultados!",
    error: "Error",
    retry: "Reintentar",
    rateLimited: "AniList está saturado. Reintentando en {s}s…",
    offline: "No se pudo conectar con AniList. Revisa tu conexión.",
    timeout: "AniList está tardando demasiado en responder.",
    // Controles
    undo: "Deshacer",
    undoHint: "Deshacer (Retroceso)",
    skipShort: "Saltar",
    skipHint: "Saltar (←)",
    planShort: "Pendiente",
    planHint: "Pendiente (↑)",
    dropShort: "Abandonado",
    dropHint: "Abandonado (↓)",
    seenShort: "Visto",
    seenShortRead: "Leído",
    seenHint: "Visto (→)",
    seenHintRead: "Leído (→)",
    info: "Más información (I)",
    // Cartas / Estados
    plan: "QUIERO VER",
    plan_read: "QUIERO LEER",
    seen: "VISTO",
    read: "LEÍDO",
    dropped: "ABANDONADO",
    skip: "SIGUIENTE",
    // Filtros UI
    sort: "Ordenar por",
    sortPopular: "Populares",
    sortScore: "Mejor valorados",
    sortTrending: "Tendencia",
    format: "Formato",
    status: "Estado",
    decade: "Época",
    older: "Anteriores",
    country: "Origen",
    genres: "Géneros",
    genresHint: "cualquiera de los elegidos",
    all: "Todos",
    any: "Cualquiera",
    tv: "Serie TV",
    movie: "Película",
    ova: "OVA",
    ona: "ONA",
    special: "Especial",
    novel: "Novela ligera",
    oneshot: "One shot",
    finished: "Finalizado",
    releasing: "En emisión",
    publishing: "Publicándose",
    countryJP: "Manga (Japón)",
    countryKR: "Manhwa (Corea)",
    countryCN: "Manhua (China)",
    // Carta
    episodes: "{n} eps",
    chapters: "{n} caps",
    copied: "Título copiado",
    // Estados finales
    doneTitle: "¡Lo has repasado todo!",
    doneText: "No quedan más títulos con estos filtros.",
    doneFilters: "Cambiar filtros",
    // Detalle
    copyTitle: "Copiar título",
    openAniList: "Ver en AniList",
    noDescription: "Sin sinopsis disponible.",
    studio: "Estudio",
    // Lista
    tabSeen: "Vistos",
    tabRead: "Leídos",
    tabPlan: "Pendientes",
    tabDropped: "Abandonados",
    tabSkip: "Saltados",
    optSeen: "Visto",
    optRead: "Leído",
    optPlan: "Pendiente",
    optDropped: "Abandonado",
    optSkip: "Saltado",
    search: "Buscar…",
    remove: "Quitar de la lista",
    listEmpty: "Aún no hay nada aquí. ¡Empieza a deslizar!",
    searchEmpty: "Sin coincidencias.",
    showMore: "Mostrar más ({n})",
    removed: "«{title}» quitado de tu lista",
    // Exportar
    exportImport: "Exportar / importar",
    exportMal: "MyAnimeList / AniList",
    exportMalSub: "XML para importar",
    exportCsvSub: "Hoja de cálculo",
    backup: "Copia de seguridad",
    backupSub: "Anime + manga (JSON)",
    restore: "Restaurar",
    restoreSub: "Desde una copia",
    toolsHint:
      "Importa el XML en myanimelist.net/import.php o en anilist.co/settings/import. Los títulos saltados no se exportan.",
    preparing: "Preparando exportación…",
    exportedMal: "{n} títulos exportados",
    exportedMalSkipped: "{n} títulos exportados · {m} sin ID de MAL",
    exportedFile: "Archivo descargado",
    nothingToExport: "No hay nada que exportar todavía",
    imported: "{n} entradas restauradas",
    importError: "El archivo no es una copia válida de aniswipe",
    resetList: "Borrar lista de {mode}",
    // Alertas
    confirmReset:
      "¿Borrar lista de {mode}?\nSolo se borrarán los datos del modo actual.",
  },
  en: {
    anime: "Anime",
    manga: "Manga",
    filters: "Filters",
    myList: "My list",
    language: "Language",
    close: "Close",
    filterTitle: "Filter",
    applyFilters: "Apply filters",
    clear: "Clear",
    loading: "Loading",
    noResults: "No results found!",
    error: "Error",
    retry: "Retry",
    rateLimited: "AniList is busy. Retrying in {s}s…",
    offline: "Couldn't reach AniList. Check your connection.",
    timeout: "AniList is taking too long to respond.",
    // Controls
    undo: "Undo",
    undoHint: "Undo (Backspace)",
    skipShort: "Skip",
    skipHint: "Skip (←)",
    planShort: "Plan",
    planHint: "Plan to watch (↑)",
    dropShort: "Drop",
    dropHint: "Dropped (↓)",
    seenShort: "Seen",
    seenShortRead: "Read",
    seenHint: "Watched (→)",
    seenHintRead: "Read (→)",
    info: "More info (I)",
    // Cards / Status
    plan: "PLAN TO WATCH",
    plan_read: "PLAN TO READ",
    seen: "WATCHED",
    read: "READ",
    dropped: "DROPPED",
    skip: "SKIP",
    // Filters UI
    sort: "Sort by",
    sortPopular: "Popular",
    sortScore: "Top rated",
    sortTrending: "Trending",
    format: "Format",
    status: "Status",
    decade: "Era",
    older: "Older",
    country: "Origin",
    genres: "Genres",
    genresHint: "any of the selected",
    all: "All",
    any: "Any",
    tv: "TV Series",
    movie: "Movie",
    ova: "OVA",
    ona: "ONA",
    special: "Special",
    novel: "Light novel",
    oneshot: "One shot",
    finished: "Finished",
    releasing: "Airing",
    publishing: "Publishing",
    countryJP: "Manga (Japan)",
    countryKR: "Manhwa (Korea)",
    countryCN: "Manhua (China)",
    // Card
    episodes: "{n} eps",
    chapters: "{n} ch",
    copied: "Title copied",
    // End states
    doneTitle: "You've seen it all!",
    doneText: "There are no more titles for these filters.",
    doneFilters: "Change filters",
    // Details
    copyTitle: "Copy title",
    openAniList: "Open on AniList",
    noDescription: "No synopsis available.",
    studio: "Studio",
    // List
    tabSeen: "Watched",
    tabRead: "Read",
    tabPlan: "Planned",
    tabDropped: "Dropped",
    tabSkip: "Skipped",
    optSeen: "Watched",
    optRead: "Read",
    optPlan: "Planned",
    optDropped: "Dropped",
    optSkip: "Skipped",
    search: "Search…",
    remove: "Remove from list",
    listEmpty: "Nothing here yet. Start swiping!",
    searchEmpty: "No matches.",
    showMore: "Show more ({n})",
    removed: "“{title}” removed from your list",
    // Export
    exportImport: "Export / import",
    exportMal: "MyAnimeList / AniList",
    exportMalSub: "XML to import",
    exportCsvSub: "Spreadsheet",
    backup: "Backup",
    backupSub: "Anime + manga (JSON)",
    restore: "Restore",
    restoreSub: "From a backup",
    toolsHint:
      "Import the XML at myanimelist.net/import.php or anilist.co/settings/import. Skipped titles are not exported.",
    preparing: "Preparing export…",
    exportedMal: "{n} titles exported",
    exportedMalSkipped: "{n} titles exported · {m} without a MAL ID",
    exportedFile: "File downloaded",
    nothingToExport: "Nothing to export yet",
    imported: "{n} entries restored",
    importError: "That file is not a valid aniswipe backup",
    resetList: "Clear {mode} list",
    // Alerts
    confirmReset: "Clear {mode} list?\nOnly current mode data will be deleted.",
  },
};

const GENRE_TRANSLATIONS = {
  Action: "Acción",
  Adventure: "Aventura",
  Comedy: "Comedia",
  Drama: "Drama",
  Ecchi: "Ecchi",
  Fantasy: "Fantasía",
  Horror: "Terror",
  "Mahou Shoujo": "Chica Mágica",
  Mecha: "Mecha",
  Music: "Música",
  Mystery: "Misterio",
  Psychological: "Psicológico",
  Romance: "Romance",
  "Sci-Fi": "Ciencia Ficción",
  "Slice of Life": "Recuentos",
  Sports: "Deportes",
  Supernatural: "Sobrenatural",
  Thriller: "Suspense",
};
const GENRES = Object.keys(GENRE_TRANSLATIONS);

// --- CONFIGURACIÓN ---
const API_URL = "https://graphql.anilist.co";
// AniList limita la complejidad de cada consulta: 20 títulos con pocos campos.
// Sinopsis, estudio, etc. se piden al abrir la ficha de cada título.
const PER_PAGE = 20;
const MAX_DEPTH = 5000; // AniList rechaza páginas más allá de la entrada 5000
const BACKFILL_CHUNK = 20;
const REQUEST_TIMEOUT = 20000; // ms: una petición colgada no deja la baraja cargando para siempre
const STORAGE = {
  lists: { anime: "animeList_v3", manga: "mangaList_v3" },
  lang: "app_lang",
  filters: "aniswipe_filters_v1",
  cursor: "aniswipe_cursor_v1",
};

// Dirección de swipe -> estado guardado + vector de salida
const SWIPES = {
  right: { status: "seen", x: 1, y: 0 },
  left: { status: "skip", x: -1, y: 0 },
  up: { status: "plan", x: 0, y: -1 },
  down: { status: "dropped", x: 0, y: 1 },
};
const LIST_STATUSES = ["seen", "plan", "dropped", "skip"];

const SORT_OPTIONS = [
  ["POPULARITY_DESC", "sortPopular"],
  ["SCORE_DESC", "sortScore"],
  ["TRENDING_DESC", "sortTrending"],
];
const FORMAT_OPTIONS = {
  anime: ["tv", "movie", "ova", "ona", "special"],
  manga: ["manga", "novel", "oneshot"],
};
const FORMAT_MAP = {
  tv: ["TV", "TV_SHORT"],
  movie: ["MOVIE"],
  ova: ["OVA"],
  ona: ["ONA"],
  special: ["SPECIAL"],
  manga: ["MANGA"],
  novel: ["NOVEL"],
  oneshot: ["ONE_SHOT"],
};
// Etiqueta corta de cada formato de AniList (clave de traducción o texto fijo)
const FORMAT_LABELS = {
  TV: "TV",
  TV_SHORT: "TV Short",
  MOVIE: "movie",
  OVA: "OVA",
  ONA: "ONA",
  SPECIAL: "special",
  MUSIC: "Music",
  MANGA: "Manga",
  NOVEL: "novel",
  ONE_SHOT: "oneshot",
};
const DECADES = ["2020", "2010", "2000", "1990", "old"];
const COUNTRIES = ["JP", "KR", "CN"];

const defaultFilters = () => ({
  sort: "POPULARITY_DESC",
  format: "",
  status: "",
  decade: "",
  country: "",
  genres: [],
});

const MEDIA_FIELDS = `
  id
  idMal
  title { romaji english }
  coverImage { extraLarge large }
  averageScore
  format
  status
  episodes
  chapters
  seasonYear
  startDate { year }
  genres
`;
// Plan B: los mismos campos que la consulta original, que siempre ha funcionado
const SAFE_MEDIA_FIELDS = `
  id
  title { romaji english native }
  coverImage { extraLarge large }
  averageScore
  format
  status
  seasonYear
  startDate { year }
  genres
`;

// --- UTILIDADES ---
const escapeHTML = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

const readJSON = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

const writeJSON = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const downloadFile = (content, filename, type) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const csvCell = (value) => {
  const s = String(value ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const cdata = (value) =>
  `<![CDATA[${String(value ?? "").replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;

class aniswipe {
  constructor() {
    this.mode = "anime";
    this.queue = [];
    this.history = [];
    this.page = 1;
    this.startPage = 1;
    this.isLoading = false;
    this.exhausted = false;
    this.wrapped = false;
    this.emptyStreak = 0;
    this.lastError = null;
    this.waitMessage = "";
    this.fetchToken = 0;
    this.mosaicMode = null;
    this.preloadedImages = new Set();
    this.listTab = "seen";
    this.listLimit = 200;

    // Idioma guardado, o el del navegador
    this.lang =
      localStorage.getItem(STORAGE.lang) ||
      (navigator.language?.toLowerCase().startsWith("es") ? "es" : "en");

    this.lists = {
      anime: this.loadList("anime"),
      manga: this.loadList("manga"),
    };
    this.savedFilters = readJSON(STORAGE.filters, {});
    this.cursors = readJSON(STORAGE.cursor, {});
    this.filters = defaultFilters();

    this.cardStack = document.getElementById("card-stack");
    this.statsText = document.getElementById("stats-text");
    this.filterCount = document.getElementById("filter-count");
    this.mosaicContainer = document.getElementById("background-mosaic");
    this.btnFilter = document.getElementById("btn-filters");
    this.btnLang = document.getElementById("btn-lang");
    this.modeBtns = document.querySelectorAll(".mode-btn");
    this.filterSheet = document.getElementById("filter-sheet");
    this.listSheet = document.getElementById("list-sheet");
    this.detailSheet = document.getElementById("detail-sheet");
    this.toastEl = document.getElementById("toast");

    this.init();
  }

  init() {
    this.setupControls();
    this.setupSheets();
    this.setupFilterUI();
    this.setupListUI();
    this.initLanguage();
    this.switchMode("anime", true);
    this.registerServiceWorker();
  }

  // --- PERSISTENCIA ---
  loadList(mode) {
    const raw = readJSON(STORAGE.lists[mode], []);
    if (!Array.isArray(raw)) return [];
    // Elimina duplicados (versiones antiguas podían guardar dos veces el mismo título)
    const byId = new Map();
    raw.forEach((entry) => {
      if (entry && entry.id != null) byId.set(entry.id, entry);
    });
    return [...byId.values()];
  }

  saveList(mode = this.mode) {
    writeJSON(STORAGE.lists[mode], this.lists[mode]);
  }

  get currentList() {
    return this.lists[this.mode];
  }

  // --- LÓGICA DE IDIOMA ---
  initLanguage() {
    this.updateStaticText();
    this.btnLang.onclick = () => {
      this.lang = this.lang === "es" ? "en" : "es";
      localStorage.setItem(STORAGE.lang, this.lang);
      this.updateStaticText();

      // Redibuja las cartas para traducir sellos y géneros
      this.cardStack
        .querySelectorAll(".card:not(.removed)")
        .forEach((c) => c.remove());
      this.renderCards();
      if (this.filterSheet.open) this.renderFilters();
      if (this.listSheet.open) this.renderList();
    };
  }

  // Función helper para traducir
  t(key, params = {}) {
    let text = TRANSLATIONS[this.lang][key] ?? TRANSLATIONS.en[key] ?? key;
    Object.keys(params).forEach((k) => {
      text = text.replace(`{${k}}`, params[k]);
    });
    return text;
  }

  // Traduce solo si existe la clave (para etiquetas fijas como "TV")
  label(key) {
    return TRANSLATIONS[this.lang][key] ? this.t(key) : key;
  }

  genreLabel(genre) {
    return this.lang === "es" ? GENRE_TRANSLATIONS[genre] || genre : genre;
  }

  updateStaticText() {
    document.documentElement.lang = this.lang;
    this.btnLang.textContent = this.lang.toUpperCase();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = this.t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.title = this.t(el.dataset.i18nTitle);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", this.t(el.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = this.t(el.dataset.i18nPlaceholder);
    });

    this.modeBtns.forEach((btn) => {
      btn.textContent = this.t(btn.dataset.mode);
    });
    this.updateModeText();
  }

  // Textos que dependen de anime/manga (visto vs leído)
  updateModeText() {
    const isManga = this.mode === "manga";
    const btnRight = document.getElementById("btn-right");
    btnRight.title = this.t(isManga ? "seenHintRead" : "seenHint");
    btnRight.querySelector(".btn-caption").textContent = this.t(
      isManga ? "seenShortRead" : "seenShort",
    );
    document.getElementById("btn-reset").textContent = this.t("resetList", {
      mode: this.t(this.mode),
    });
    document.getElementById("tools-hint").textContent = this.t("toolsHint");
  }

  // --- MODO ANIME / MANGA ---
  switchMode(newMode, force = false) {
    if (this.mode === newMode && !force) return;

    this.mode = newMode;
    this.modeBtns.forEach((btn) => {
      const active = btn.dataset.mode === newMode;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active);
    });
    document.body.classList.toggle("mode-manga", newMode === "manga");

    this.history = [];
    this.filters = { ...defaultFilters(), ...this.savedFilters[newMode] };
    this.updateModeText();
    this.updateStats();
    this.updateFilterButton();
    this.resetFeed();
  }

  updateStats() {
    const count = this.currentList.filter((e) => e.status !== "skip").length;
    this.statsText.textContent = count;
  }

  // Reinicia la baraja (cambio de modo o de filtros)
  resetFeed() {
    this.fetchToken++;
    this.isLoading = false;
    this.queue = [];
    this.exhausted = false;
    this.wrapped = false;
    this.emptyStreak = 0;
    this.fetchedCount = 0;
    this.lastError = null;
    this.waitMessage = "";
    this.cardStack.innerHTML = "";
    this.startPage = this.page = this.getStartPage();
    this.renderCards();
  }

  hasActiveFilters(filters = this.filters) {
    return this.activeFilterCount(filters) > 0;
  }

  activeFilterCount(filters = this.filters) {
    return (
      (filters.sort !== "POPULARITY_DESC" ? 1 : 0) +
      (filters.format ? 1 : 0) +
      (filters.status ? 1 : 0) +
      (filters.decade ? 1 : 0) +
      (filters.country ? 1 : 0) +
      filters.genres.length
    );
  }

  // Clave para recordar por qué página íbamos con cada combinación de filtros
  get cursorKey() {
    return `${this.mode}:${JSON.stringify(this.filters)}`;
  }

  getStartPage() {
    const lastPage = MAX_DEPTH / PER_PAGE;
    const saved = this.cursors[this.cursorKey];
    if (saved) return Math.min(saved, lastPage);
    // Estimación para listas antiguas sin cursor guardado
    if (!this.hasActiveFilters() && this.currentList.length > 0) {
      const estimate = Math.floor(this.currentList.length / PER_PAGE);
      return Math.min(Math.max(1, estimate), lastPage);
    }
    return 1;
  }

  // --- API ANILIST ---
  getAniListQuery() {
    const f = this.filters;
    const variables = {
      page: this.page,
      perPage: PER_PAGE,
      type: this.mode.toUpperCase(),
      // Un solo criterio: añadir otro (p. ej. ID) vuelve la consulta muy lenta en AniList
      sort: [f.sort],
    };
    if (f.format && FORMAT_MAP[f.format])
      variables.format = FORMAT_MAP[f.format];
    if (f.status) variables.status = f.status;
    if (f.genres.length) variables.genres = f.genres;
    if (f.country && this.mode === "manga") variables.country = f.country;
    if (f.decade === "old") {
      variables.to = 19900000;
    } else if (f.decade) {
      const from = parseInt(f.decade, 10);
      variables.from = from * 10000 - 1;
      variables.to = (from + 10) * 10000;
    }

    const query = `
    query ($page: Int, $perPage: Int, $type: MediaType, $sort: [MediaSort], $format: [MediaFormat], $status: MediaStatus, $genres: [String], $country: CountryCode, $from: FuzzyDateInt, $to: FuzzyDateInt) {
      Page(page: $page, perPage: $perPage) {
        pageInfo { hasNextPage }
        media(type: $type, sort: $sort, format_in: $format, status: $status, genre_in: $genres, countryOfOrigin: $country, startDate_greater: $from, startDate_lesser: $to, isAdult: false) {
          ${this.safeFields ? SAFE_MEDIA_FIELDS : MEDIA_FIELDS}
        }
      }
    }`;

    return { query, variables };
  }

  // Petición con reintentos cuando AniList limita la frecuencia (HTTP 429)
  async apiRequest(query, variables, { token, onWait } = {}) {
    for (let attempt = 0; ; attempt++) {
      let response;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
      try {
        response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ query, variables }),
          signal: controller.signal,
        });
      } catch {
        const timedOut = controller.signal.aborted;
        const error = new Error(this.t(timedOut ? "timeout" : "offline"));
        error.network = true;
        throw error;
      } finally {
        clearTimeout(timer);
      }

      if (response.status === 429 && attempt < 3) {
        const retryAfter = parseInt(response.headers.get("Retry-After"), 10);
        const wait = Math.min(retryAfter || 15 * (attempt + 1), 65);
        for (let s = wait; s > 0; s--) {
          if (token !== undefined && token !== this.fetchToken) return null;
          onWait?.(s);
          await sleep(1000);
        }
        onWait?.(0);
        continue;
      }

      const json = await response.json().catch(() => ({}));
      if (!response.ok || json.errors) {
        const errMsg = json.errors?.[0]?.message || response.statusText;
        const error = new Error(`AniList: ${errMsg || response.status}`);
        error.status = response.status;
        throw error;
      }
      return json.data;
    }
  }

  async fetchItems() {
    if (this.isLoading || this.exhausted) return;

    const token = this.fetchToken;
    this.isLoading = true;
    this.lastError = null;
    let retry = false;

    try {
      // Pausa corta si las últimas páginas no aportaron nada nuevo (evita ráfagas)
      if (this.emptyStreak > 0)
        await sleep(Math.min(this.emptyStreak * 350, 2000));
      if (token !== this.fetchToken) return;

      const { query, variables } = this.getAniListQuery();
      const data = await this.apiRequest(query, variables, {
        token,
        onWait: (s) => {
          this.waitMessage = s ? this.t("rateLimited", { s }) : "";
          if (!this.queue.length) this.renderState();
        },
      });
      if (token !== this.fetchToken || !data) return;

      const media = data.Page?.media || [];
      const hasNextPage = data.Page?.pageInfo?.hasNextPage;
      const fetchedPage = this.page;
      this.fetchedCount += media.length;
      const items = media.map((m) => this.normalizeMedia(m, fetchedPage));

      if (this.mosaicMode !== this.mode) {
        // El mosaico espera un poco: primero se descarga la portada de la carta
        this.mosaicMode = this.mode;
        const mode = this.mode;
        setTimeout(() => {
          if (this.mode === mode) this.generateBackgroundMosaic(items);
        }, 1500);
      }

      const savedIds = new Set(this.currentList.map((e) => e.id));
      const queuedIds = new Set(this.queue.map((i) => i.id));
      const fresh = items.filter(
        (i) => !savedIds.has(i.id) && !queuedIds.has(i.id),
      );

      this.queue.push(...fresh);
      this.emptyStreak = fresh.length ? 0 : this.emptyStreak + 1;
      this.page++;

      const tooDeep = this.page * PER_PAGE > MAX_DEPTH;
      if (!hasNextPage || media.length === 0 || tooDeep) {
        // Si empezamos a mitad de catálogo, damos una vuelta desde la página 1
        if (this.startPage > 1 && !this.wrapped) {
          this.wrapped = true;
          this.page = 1;
        } else {
          this.exhausted = true;
        }
      } else if (this.wrapped && this.page >= this.startPage) {
        this.exhausted = true;
      }
    } catch (error) {
      if (token !== this.fetchToken) return;
      console.error("Fetch Error:", error);
      // Si AniList rechaza la consulta (400), se reintenta con la consulta mínima
      if (error.status === 400 && !this.safeFields) {
        this.safeFields = true;
        retry = true;
      } else {
        this.lastError = error;
      }
    } finally {
      if (token === this.fetchToken) {
        this.isLoading = false;
        this.waitMessage = "";
      }
    }

    if (token !== this.fetchToken) return;
    if (retry) this.fetchItems();
    else this.renderCards();
  }

  normalizeMedia(m, page) {
    const title =
      m.title?.romaji || m.title?.english || m.title?.native || "Sin Título";
    return {
      id: m.id,
      // Sin la clave idMal, la entrada se completará más tarde (backfill)
      idMal: "idMal" in m ? m.idMal || null : undefined,
      title,
      titleEn:
        m.title?.english && m.title.english !== title ? m.title.english : "",
      cover: m.coverImage?.large || "",
      coverLarge: m.coverImage?.extraLarge || m.coverImage?.large || "",
      score: m.averageScore ? m.averageScore / 10 : null,
      format: m.format || "",
      airing: m.status || "",
      year: m.seasonYear || m.startDate?.year || null,
      episodes: m.episodes || null,
      chapters: m.chapters || null,
      genres: m.genres || [],
      siteUrl: `https://anilist.co/${this.mode}/${m.id}`,
      page,
    };
  }

  preloadImages() {
    this.queue.slice(2, 5).forEach((item) => {
      const url = item.coverLarge;
      if (url && !this.preloadedImages.has(url)) {
        const img = new Image();
        img.src = url;
        this.preloadedImages.add(url);
      }
    });
  }

  // --- CARTAS ---
  // Mantiene en pantalla la carta activa (queue[0]) y la siguiente detrás (queue[1])
  renderCards() {
    const [first, second] = this.queue;
    const cards = [...this.cardStack.querySelectorAll(".card:not(.removed)")];
    const find = (item) => item && cards.find((c) => c._item === item);
    let top = find(first);
    let next = find(second);

    cards.forEach((c) => {
      if (c !== top && c !== next) {
        c._ac?.abort();
        c.remove();
      }
    });

    if (first && !top) {
      top = this.createCard(first);
      this.cardStack.appendChild(top);
    }
    if (second && !next) {
      next = this.createCard(second);
      this.cardStack.appendChild(next);
    }
    if (next) this.setCardRole(next, "next");
    if (top) this.setCardRole(top, "top");

    this.renderState();
    this.preloadImages();

    // Precarga cuando quedan pocas cartas (tras un error, solo al reintentar)
    if (
      this.queue.length < 8 &&
      !this.isLoading &&
      !this.exhausted &&
      !this.lastError
    ) {
      this.fetchItems();
    }
  }

  // Mensaje central cuando no hay cartas: cargando, error o fin
  renderState() {
    let state = this.cardStack.querySelector(".state");
    if (this.queue.length) {
      state?.remove();
      return;
    }
    if (!state) {
      state = document.createElement("div");
      state.className = "state";
      this.cardStack.appendChild(state);
    }

    if (this.lastError) {
      state.innerHTML = `
        <div class="state-box">
          <p class="state-title">${this.t("error")}</p>
          <p class="state-text">${escapeHTML(this.lastError.message)}</p>
          <button class="btn-pill" data-action="retry">${this.t("retry")}</button>
        </div>`;
    } else if (this.exhausted) {
      const noResults = this.fetchedCount === 0;
      state.innerHTML = `
        <div class="state-box">
          <div class="state-icon">✦</div>
          <p class="state-title">${noResults ? this.t("noResults") : this.t("doneTitle")}</p>
          ${noResults ? "" : `<p class="state-text">${this.t("doneText")}</p>`}
          <div class="state-actions">
            <button class="btn-pill" data-action="filters">${this.t("doneFilters")}</button>
            <button class="btn-pill ghost" data-action="list">${this.t("myList")}</button>
          </div>
        </div>`;
    } else {
      state.innerHTML = `
        <div class="skeleton"><div class="skeleton-lines"><span></span><span></span></div></div>
        <p class="state-wait">${escapeHTML(this.waitMessage)}</p>`;
      state.setAttribute("aria-label", this.t("loading"));
    }
  }

  createCard(item) {
    const card = document.createElement("div");
    card.className = "card";
    card._item = item;

    // Textos traducidos para los sellos
    const upText = this.mode === "anime" ? this.t("plan") : this.t("plan_read");
    const seenText = this.mode === "anime" ? this.t("seen") : this.t("read");

    const badges = [];
    if (item.format)
      badges.push(this.label(FORMAT_LABELS[item.format] || item.format));
    if (item.year) badges.push(item.year);
    if (item.episodes) badges.push(this.t("episodes", { n: item.episodes }));
    else if (item.chapters)
      badges.push(this.t("chapters", { n: item.chapters }));

    const airing =
      item.airing === "RELEASING"
        ? `<span class="badge badge-live">${this.t(this.mode === "anime" ? "releasing" : "publishing")}</span>`
        : "";

    card.innerHTML = `
      <img class="card-image" draggable="false" alt="">
      <div class="card-gradient"></div>
      <button class="card-info-btn" type="button" title="${this.t("info")}" aria-label="${this.t("info")}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 11v6M12 7.5v.01"/></svg>
      </button>
      <div class="status-indicator ind-up">${upText}</div>
      <div class="status-indicator ind-down">${this.t("dropped")}</div>
      <div class="status-indicator ind-right">${seenText}</div>
      <div class="status-indicator ind-left">${this.t("skip")}</div>
      <div class="card-info">
        <h2 class="card-title" title="${this.t("copyTitle")}">${escapeHTML(item.title)}</h2>
        ${item.titleEn ? `<p class="card-subtitle">${escapeHTML(item.titleEn)}</p>` : ""}
        <div class="card-meta">
          ${badges.map((b) => `<span class="badge">${escapeHTML(b)}</span>`).join("")}
          ${item.score ? `<span class="score">★ ${item.score.toFixed(1)}</span>` : ""}
          ${airing}
        </div>
        ${
          item.genres.length
            ? `<p class="card-genres">${item.genres
                .slice(0, 3)
                .map((g) => escapeHTML(this.genreLabel(g)))
                .join(" · ")}</p>`
            : ""
        }
      </div>`;

    card._stamps = card.querySelectorAll(".status-indicator");
    const img = card.querySelector(".card-image");
    img.decoding = "async";
    img.onload = () => img.classList.add("loaded");
    img.onerror = () => img.remove();
    img.src = item.coverLarge || item.cover;
    if (img.complete && img.naturalWidth) img.classList.add("loaded");

    return card;
  }

  setCardRole(card, role) {
    if (card._role === role) return;
    card._role = role;
    card.classList.toggle("is-top", role === "top");
    card.classList.toggle("is-next", role === "next");
    card.style.transform = "";
    card.setAttribute("aria-hidden", role !== "top");
    card.querySelectorAll(".status-indicator").forEach((s) => {
      s.style.opacity = "";
    });
    card._ac?.abort();
    card._ac = null;
    if (role === "top") this.initGestures(card);
  }

  get topCard() {
    return this.cardStack.querySelector(".card.is-top:not(.removed)");
  }

  // --- GESTOS (pointer events: ratón, táctil y lápiz) ---
  initGestures(card) {
    const ac = new AbortController();
    card._ac = ac;
    const opts = { signal: ac.signal };
    let startX = 0,
      startY = 0,
      moveX = 0,
      moveY = 0,
      startTime = 0,
      pointerId = null,
      downTarget = null,
      tapTarget = null,
      samples = [];

    card.addEventListener(
      "pointerdown",
      (e) => {
        if (e.button !== 0 || pointerId !== null) return;
        if (e.target.closest(".card-info-btn")) return;
        pointerId = e.pointerId;
        downTarget = e.target;
        startX = e.clientX;
        startY = e.clientY;
        moveX = moveY = 0;
        startTime = performance.now();
        samples = [{ x: 0, y: 0, t: startTime }];
        card._next = this.cardStack.querySelector(".card.is-next");
        try {
          card.setPointerCapture(pointerId);
        } catch {}
        card.classList.add("dragging");
      },
      opts,
    );

    card.addEventListener(
      "pointermove",
      (e) => {
        if (e.pointerId !== pointerId) return;
        moveX = e.clientX - startX;
        moveY = e.clientY - startY;
        samples.push({ x: moveX, y: moveY, t: performance.now() });
        if (samples.length > 20) samples.shift();
        this.dragVisual(card, moveX, moveY);
      },
      opts,
    );

    const onEnd = (e) => {
      if (e.pointerId !== pointerId) return;
      pointerId = null;
      card.classList.remove("dragging");
      const now = performance.now();
      const distance = Math.hypot(moveX, moveY);

      // Toque sin arrastre: se resuelve en el "click" que llega justo después.
      // Abrir aquí la ficha haría que ese click cayera dentro del diálogo.
      if (e.type === "pointerup" && distance < 8 && now - startTime < 600) {
        this.resetCardPosition(card);
        tapTarget = downTarget;
        return;
      }

      // Velocidad de los últimos ~100 ms (para detectar un "latigazo")
      const ref = samples.find((p) => now - p.t <= 100) || samples[0];
      const velocity =
        Math.hypot(moveX - ref.x, moveY - ref.y) / Math.max(now - ref.t, 1);
      const dir = this.swipeDirection(moveX, moveY, velocity);
      if (dir && e.type === "pointerup")
        this.swipe(dir, { dx: moveX, dy: moveY });
      else this.resetCardPosition(card);
    };
    card.addEventListener("pointerup", onEnd, opts);
    card.addEventListener("pointercancel", onEnd, opts);

    card.addEventListener(
      "click",
      () => {
        if (!tapTarget) return;
        const target = tapTarget;
        tapTarget = null;
        if (target.closest(".card-title")) this.copyTitle(card._item.title);
        else this.openDetails(card._item);
      },
      opts,
    );

    card.querySelector(".card-info-btn").addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
        this.openDetails(card._item);
      },
      opts,
    );
  }

  directionOf(dx, dy) {
    if (Math.abs(dx) > Math.abs(dy)) return dx > 0 ? "right" : "left";
    return dy < 0 ? "up" : "down";
  }

  // Swipe por distancia o por "latigazo" rápido (velocidad en px/ms)
  swipeDirection(dx, dy, velocity) {
    const distance = Math.max(Math.abs(dx), Math.abs(dy));
    if (distance > 100 || (distance > 40 && velocity > 0.5)) {
      return this.directionOf(dx, dy);
    }
    return null;
  }

  // Como mucho un repintado por fotograma, aunque lleguen más eventos de puntero
  dragVisual(card, dx, dy) {
    card._drag = { dx, dy };
    if (card._frame) return;
    card._frame = requestAnimationFrame(() => {
      card._frame = null;
      if (!card._drag) return;
      const { dx, dy } = card._drag;
      card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx * 0.05}deg)`;
      const dir = this.directionOf(dx, dy);
      const strength = Math.min(Math.max(Math.abs(dx), Math.abs(dy)) / 100, 1);
      card._stamps.forEach((s) => {
        s.style.opacity = s.classList.contains(`ind-${dir}`) ? strength : 0;
      });

      const next = card._next;
      if (next) {
        const p = Math.min(Math.hypot(dx, dy) / 150, 1);
        next.style.transform = `translateY(${(1 - p) * 12}px) scale(${0.95 + 0.05 * p})`;
      }
    });
  }

  resetCardPosition(card) {
    cancelAnimationFrame(card._frame);
    card._frame = null;
    card._drag = null;
    card.style.transform = "";
    card.querySelectorAll(".status-indicator").forEach((s) => {
      s.style.opacity = "";
    });
    const next = this.cardStack.querySelector(".card.is-next");
    if (next) next.style.transform = "";
  }

  // Decide la carta superior en la dirección dada (gesto, botón o teclado)
  swipe(dir, { dx = 0, dy = 0 } = {}) {
    const card = this.topCard;
    if (!card) return;
    const item = card._item;
    const { status, x, y } = SWIPES[dir];

    card._ac?.abort();
    cancelAnimationFrame(card._frame);
    card._drag = null;
    card.classList.remove("is-top", "dragging");
    card.classList.add("removed");
    card.setAttribute("aria-hidden", "true");
    card.querySelectorAll(".status-indicator").forEach((s) => {
      s.style.opacity = s.classList.contains(`ind-${dir}`) ? 1 : 0;
    });
    const tx = x ? x * window.innerWidth * 1.2 : dx;
    const ty = y ? y * window.innerHeight * 1.2 : dy;
    card.style.transform = `translate(${tx}px, ${ty}px) rotate(${x * 30 + dx * 0.05}deg)`;
    setTimeout(() => card.remove(), 450);

    const index = this.queue.indexOf(item);
    if (index !== -1) this.queue.splice(index, 1);
    this.saveDecision(item, status, dir);
    navigator.vibrate?.(8);
    this.lastError = null; // cada swipe permite reintentar una precarga fallida
    this.renderCards();
  }

  saveDecision(item, status, dir) {
    const entry = {
      id: item.id,
      idMal: item.idMal,
      title: item.title,
      titleEn: item.titleEn || undefined,
      cover: item.cover,
      format: item.format,
      year: item.year,
      episodes: item.episodes || undefined,
      chapters: item.chapters || undefined,
      volumes: item.volumes || undefined,
      score: item.score,
      status: status,
      date: new Date().toISOString(),
    };

    const list = this.currentList;
    const index = list.findIndex((e) => e.id === entry.id);
    if (index !== -1) list.splice(index, 1);
    list.push(entry);
    this.saveList();

    // Recordar la página para continuar aquí la próxima vez
    this.cursors[this.cursorKey] = item.page;
    writeJSON(STORAGE.cursor, this.cursors);

    this.history.push({ mode: this.mode, item, dir });
    if (this.history.length > 100) this.history.shift();
    this.updateStats();
  }

  undoLastAction() {
    const last = this.history.pop();
    if (!last || last.mode !== this.mode) return;

    const list = this.currentList;
    const index = list.findIndex((e) => e.id === last.item.id);
    if (index !== -1) list.splice(index, 1);
    this.saveList();
    this.updateStats();

    this.queue = this.queue.filter((i) => i.id !== last.item.id);
    this.queue.unshift(last.item);
    this.lastError = null;
    this.renderCards();

    // La carta vuelve desde el lado por el que salió
    const card = this.topCard;
    const { x, y } = SWIPES[last.dir];
    card?.animate(
      [
        {
          transform: `translate(${x * 120}%, ${y * 120}%) rotate(${x * 20}deg)`,
          opacity: 0,
        },
        { transform: "none", opacity: 1 },
      ],
      { duration: 350, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
    );
  }

  copyTitle(title) {
    navigator.clipboard?.writeText(title).then(
      () => this.toast(this.t("copied")),
      () => {},
    );
  }

  generateBackgroundMosaic(list) {
    if (!list.length) return;
    this.mosaicContainer.innerHTML = "";
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    shuffled.slice(0, 20).forEach((item, index) => {
      if (!item.cover) return;
      const img = document.createElement("img");
      img.src = item.cover;
      img.alt = "";
      img.classList.add("mosaic-img");
      img.style.animationDelay = `${index * 0.1}s`;
      this.mosaicContainer.appendChild(img);
    });
  }

  // --- HOJAS (dialog) ---
  setupSheets() {
    document.querySelectorAll("dialog.sheet").forEach((sheet) => {
      sheet.addEventListener("click", (e) => {
        // Cerrar al pulsar fuera del panel o en el botón ✕
        if (e.target === sheet || e.target.closest("[data-close]"))
          sheet.close();
      });
    });
  }

  openDetails(item) {
    if (!item) return;
    const body = document.getElementById("detail-body");
    const isTop = this.topCard?._item === item;
    const isManga = this.mode === "manga";

    const meta = [];
    if (item.format)
      meta.push(this.label(FORMAT_LABELS[item.format] || item.format));
    if (item.year) meta.push(item.year);
    if (item.episodes) meta.push(this.t("episodes", { n: item.episodes }));
    if (item.chapters) meta.push(this.t("chapters", { n: item.chapters }));
    if (item.airing === "RELEASING")
      meta.push(this.t(isManga ? "publishing" : "releasing"));
    else if (item.airing === "FINISHED") meta.push(this.t("finished"));

    const actions = isTop
      ? `<div class="detail-actions">
          ${[
            ["left", "btn-skip", "skipShort"],
            ["down", "btn-drop", "dropShort"],
            ["up", "btn-plan", "planShort"],
            ["right", "btn-love", isManga ? "seenShortRead" : "seenShort"],
          ]
            .map(
              ([dir, cls, key]) =>
                `<button class="detail-action ${cls}" data-dir="${dir}">${this.t(key)}</button>`,
            )
            .join("")}
        </div>`
      : "";

    body.innerHTML = `
      <div class="detail-hero">
        ${item.cover ? `<img class="detail-cover" src="${escapeHTML(item.cover)}" alt="">` : ""}
        <div class="detail-heading">
          <h2 class="detail-title">${escapeHTML(item.title)}</h2>
          <p class="detail-alt"></p>
          <div class="card-meta">
            ${meta.map((m) => `<span class="badge">${escapeHTML(m)}</span>`).join("")}
            ${item.score ? `<span class="score">★ ${item.score.toFixed(1)}</span>` : ""}
          </div>
          <p class="detail-studio"></p>
        </div>
      </div>
      ${
        item.genres.length
          ? `<div class="chips-container detail-genres">${item.genres
              .map(
                (g) =>
                  `<span class="chip static">${escapeHTML(this.genreLabel(g))}</span>`,
              )
              .join("")}</div>`
          : ""
      }
      <p class="detail-desc"></p>
      <div class="detail-links">
        <button class="btn-pill ghost" data-copy>${this.t("copyTitle")}</button>
        <a class="btn-pill ghost" href="${escapeHTML(item.siteUrl)}" target="_blank" rel="noopener">${this.t("openAniList")} ↗</a>
      </div>
      ${actions}`;

    this.fillDetails(item, body);
    if (item.description === undefined) {
      this.loadDetails(item).then(() => {
        if (body.isConnected && this.detailSheet.open)
          this.fillDetails(item, body);
      });
    }
    body.querySelector("[data-copy]").onclick = () =>
      this.copyTitle(item.title);
    body.querySelectorAll("[data-dir]").forEach((btn) => {
      btn.onclick = () => {
        this.detailSheet.close();
        if (this.topCard?._item === item) this.swipe(btn.dataset.dir);
      };
    });

    body.scrollTop = 0;
    if (!this.detailSheet.open) this.detailSheet.showModal();
  }

  // Partes de la ficha que dependen de datos cargados bajo demanda
  fillDetails(item, body) {
    body.querySelector(".detail-alt").textContent = [
      item.titleEn,
      item.titleNative,
    ]
      .filter((t) => t && t !== item.title)
      .join(" · ");
    body.querySelector(".detail-studio").textContent = item.studio
      ? `${this.t("studio")}: ${item.studio}`
      : "";
    body.querySelector(".detail-desc").textContent =
      item.description === undefined
        ? `${this.t("loading")}…`
        : this.cleanDescription(item.description) || this.t("noDescription");
  }

  // Sinopsis, título nativo y estudio: una consulta ligera por título
  async loadDetails(item) {
    try {
      const data = await this.apiRequest(
        `query ($id: Int) {
          Media(id: $id) {
            description(asHtml: false)
            title { native }
            studios(isMain: true) { nodes { name } }
          }
        }`,
        { id: item.id },
      );
      const m = data?.Media;
      item.description = m?.description || "";
      item.titleNative = m?.title?.native || "";
      item.studio = m?.studios?.nodes?.[0]?.name || "";
    } catch {
      item.description = "";
    }
  }

  // AniList devuelve la sinopsis con <br>, <i>… -> texto plano seguro
  cleanDescription(html) {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(
      html.replace(/<br\s*\/?>/gi, "\n"),
      "text/html",
    );
    return doc.body.textContent.replace(/\n{3,}/g, "\n\n").trim();
  }

  // --- FILTROS ---
  setupFilterUI() {
    this.btnFilter.onclick = () => this.openFilters();

    document.getElementById("clear-filters").onclick = () => {
      this.draftFilters = defaultFilters();
      this.renderFilters();
    };

    document.getElementById("apply-filters").onclick = () => {
      this.filterSheet.close();
      const changed =
        JSON.stringify(this.draftFilters) !== JSON.stringify(this.filters);
      if (!changed) return;
      this.filters = this.draftFilters;
      this.savedFilters[this.mode] = this.filters;
      writeJSON(STORAGE.filters, this.savedFilters);
      this.updateFilterButton();
      this.resetFeed();
    };

    document
      .getElementById("dynamic-filters")
      .addEventListener("click", (e) => {
        const chip = e.target.closest(".chip[data-key]");
        if (!chip) return;
        const { key, val } = chip.dataset;
        if (key === "genres") {
          const genres = this.draftFilters.genres;
          if (val === "") genres.length = 0;
          else if (genres.includes(val)) genres.splice(genres.indexOf(val), 1);
          else genres.push(val);
        } else {
          this.draftFilters[key] = val;
        }
        this.renderFilters();
      });
  }

  openFilters() {
    this.draftFilters = structuredClone(this.filters);
    this.renderFilters();
    this.filterSheet.showModal();
  }

  updateFilterButton() {
    const count = this.activeFilterCount();
    this.btnFilter.classList.toggle("active", count > 0);
    this.filterCount.hidden = count === 0;
    this.filterCount.textContent = count;
  }

  renderFilters() {
    const f = this.draftFilters;
    const isManga = this.mode === "manga";

    const chip = (key, val, text, selected) =>
      `<button type="button" class="chip ${selected ? "selected" : ""}" data-key="${key}" data-val="${escapeHTML(val)}" aria-pressed="${selected}">${escapeHTML(text)}</button>`;

    const group = (labelKey, chips, hint = "") => `
      <div class="filter-group">
        <span class="filter-label">${this.t(labelKey)}${hint ? ` <small>· ${hint}</small>` : ""}</span>
        <div class="chips-container">${chips.join("")}</div>
      </div>`;

    const single = (key, options, anyKey = "any") => [
      chip(key, "", this.t(anyKey), !f[key]),
      ...options.map(([val, text]) => chip(key, val, text, f[key] === val)),
    ];

    let html = group(
      "sort",
      SORT_OPTIONS.map(([val, key]) =>
        chip("sort", val, this.t(key), f.sort === val),
      ),
    );
    html += group(
      "format",
      single(
        "format",
        FORMAT_OPTIONS[this.mode].map((v) => [v, this.label(v)]),
        "all",
      ),
    );
    html += group(
      "status",
      single("status", [
        ["FINISHED", this.t("finished")],
        ["RELEASING", this.t(isManga ? "publishing" : "releasing")],
      ]),
    );
    html += group(
      "decade",
      single(
        "decade",
        DECADES.map((d) => [d, d === "old" ? this.t("older") : `${d}s`]),
      ),
    );
    if (isManga) {
      html += group(
        "country",
        single(
          "country",
          COUNTRIES.map((c) => [c, this.t(`country${c}`)]),
        ),
      );
    }
    html += group(
      "genres",
      [
        chip("genres", "", this.t("any"), f.genres.length === 0),
        ...GENRES.map((g) =>
          chip("genres", g, this.genreLabel(g), f.genres.includes(g)),
        ),
      ],
      this.t("genresHint"),
    );

    document.getElementById("dynamic-filters").innerHTML = html;
  }

  // --- MI LISTA ---
  setupListUI() {
    document.getElementById("btn-list").onclick = () => this.openList();

    document.getElementById("list-tabs").addEventListener("click", (e) => {
      const tab = e.target.closest("[data-tab]");
      if (!tab) return;
      this.listTab = tab.dataset.tab;
      this.listLimit = 200;
      this.renderList();
    });

    const search = document.getElementById("list-search");
    search.addEventListener("input", () => {
      this.listLimit = 200;
      this.renderList();
    });

    const items = document.getElementById("list-items");
    items.addEventListener("change", (e) => {
      const select = e.target.closest("select[data-id]");
      if (!select) return;
      const entry = this.currentList.find(
        (i) => i.id === Number(select.dataset.id),
      );
      if (!entry) return;
      entry.status = select.value;
      this.saveList();
      this.updateStats();
      this.renderList();
    });
    items.addEventListener("click", (e) => {
      if (e.target.closest("[data-more]")) {
        this.listLimit += 200;
        this.renderList();
        return;
      }
      const btn = e.target.closest("button[data-remove]");
      if (!btn) return;
      const id = Number(btn.dataset.remove);
      const list = this.currentList;
      const index = list.findIndex((i) => i.id === id);
      if (index === -1) return;
      const [entry] = list.splice(index, 1);
      this.saveList();
      this.updateStats();
      this.renderList();
      this.toast(this.t("removed", { title: entry.title }));
    });

    document.getElementById("btn-export-mal").onclick = () => this.exportMAL();
    document.getElementById("btn-export-csv").onclick = () => this.exportCSV();
    document.getElementById("btn-export-json").onclick = () =>
      this.exportJSON();
    const fileInput = document.getElementById("import-file");
    document.getElementById("btn-import-json").onclick = () =>
      fileInput.click();
    fileInput.onchange = () => {
      const file = fileInput.files[0];
      fileInput.value = "";
      if (file) this.importJSON(file);
    };

    document.getElementById("btn-reset").onclick = () => {
      if (!confirm(this.t("confirmReset", { mode: this.mode.toUpperCase() })))
        return;
      this.lists[this.mode] = [];
      localStorage.removeItem(STORAGE.lists[this.mode]);
      Object.keys(this.cursors).forEach((key) => {
        if (key.startsWith(`${this.mode}:`)) delete this.cursors[key];
      });
      writeJSON(STORAGE.cursor, this.cursors);
      this.history = [];
      this.updateStats();
      this.listSheet.close();
      this.resetFeed();
    };
  }

  openList() {
    document.getElementById("list-search").value = "";
    this.listLimit = 200;
    this.renderList();
    this.listSheet.showModal();
    // Completa portadas e IDs de MAL de entradas antiguas en segundo plano
    this.backfillEntries(this.mode, 4).then((changed) => {
      if (changed && this.listSheet.open) this.renderList();
    });
  }

  statusLabel(status, prefix) {
    const isManga = this.mode === "manga";
    const keys = {
      seen: isManga ? "Read" : "Seen",
      plan: "Plan",
      dropped: "Dropped",
      skip: "Skip",
    };
    return this.t(`${prefix}${keys[status]}`);
  }

  renderList() {
    const list = this.currentList;
    document.getElementById("list-title").textContent =
      `${this.t("myList")} · ${this.t(this.mode)}`;

    const counts = Object.fromEntries(LIST_STATUSES.map((s) => [s, 0]));
    list.forEach((e) => {
      if (counts[e.status] !== undefined) counts[e.status]++;
    });

    document.getElementById("list-tabs").innerHTML = LIST_STATUSES.map(
      (s) => `
        <button class="list-tab ${this.listTab === s ? "active" : ""}" data-tab="${s}" role="tab" aria-selected="${this.listTab === s}">
          <span class="list-tab-count">${counts[s]}</span>
          <span class="list-tab-label">${this.statusLabel(s, "tab")}</span>
        </button>`,
    ).join("");

    const query = document
      .getElementById("list-search")
      .value.trim()
      .toLowerCase();
    const filtered = list
      .filter((e) => e.status === this.listTab)
      .filter(
        (e) =>
          !query ||
          e.title?.toLowerCase().includes(query) ||
          e.titleEn?.toLowerCase().includes(query),
      )
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

    const container = document.getElementById("list-items");
    if (!filtered.length) {
      container.innerHTML = `<li class="list-empty">${this.t(query ? "searchEmpty" : "listEmpty")}</li>`;
      return;
    }

    const options = (current) =>
      LIST_STATUSES.map(
        (s) =>
          `<option value="${s}" ${s === current ? "selected" : ""}>${this.statusLabel(s, "opt")}</option>`,
      ).join("");

    const rows = filtered.slice(0, this.listLimit).map((e) => {
      const sub = [
        e.format ? this.label(FORMAT_LABELS[e.format] || e.format) : "",
        e.year || "",
        e.score && !isNaN(e.score) ? `★ ${Number(e.score).toFixed(1)}` : "",
      ]
        .filter(Boolean)
        .join(" · ");
      const thumb = e.cover
        ? `<img class="list-thumb" src="${escapeHTML(e.cover)}" alt="" loading="lazy">`
        : `<div class="list-thumb placeholder">${escapeHTML((e.title || "?")[0])}</div>`;
      return `
        <li class="list-row">
          ${thumb}
          <div class="list-main">
            <a class="list-title" href="https://anilist.co/${this.mode}/${e.id}" target="_blank" rel="noopener">${escapeHTML(e.title)}</a>
            ${sub ? `<span class="list-sub">${escapeHTML(sub)}</span>` : ""}
          </div>
          <select class="list-status" data-id="${e.id}" aria-label="${this.t("status")}">${options(e.status)}</select>
          <button class="icon-btn list-remove" data-remove="${e.id}" title="${this.t("remove")}" aria-label="${this.t("remove")}">✕</button>
        </li>`;
    });

    const remaining = filtered.length - this.listLimit;
    if (remaining > 0) {
      rows.push(
        `<li class="list-more"><button class="btn-pill ghost" data-more>${this.t("showMore", { n: remaining })}</button></li>`,
      );
    }
    container.innerHTML = rows.join("");
  }

  // Rellena datos que las versiones antiguas no guardaban (portada, ID de MAL…)
  async backfillEntries(mode, maxBatches = Infinity) {
    if (this.backfilling) return this.backfilling;
    const run = async () => {
      const missing = this.lists[mode].filter((e) => e.idMal === undefined);
      let changed = false;
      for (
        let i = 0, batch = 0;
        i < missing.length && batch < maxBatches;
        i += BACKFILL_CHUNK, batch++
      ) {
        const chunk = missing.slice(i, i + BACKFILL_CHUNK);
        const data = await this.apiRequest(
          `query ($ids: [Int]) {
            Page(perPage: ${BACKFILL_CHUNK}) {
              media(id_in: $ids) {
                id idMal title { english } coverImage { large } format
                seasonYear startDate { year } episodes chapters volumes averageScore
              }
            }
          }`,
          { ids: chunk.map((e) => e.id) },
        );
        const byId = new Map((data?.Page?.media || []).map((m) => [m.id, m]));
        chunk.forEach((e) => {
          const m = byId.get(e.id);
          e.idMal = m?.idMal || null;
          if (!m) return;
          e.cover ||= m.coverImage?.large || "";
          e.format ||= m.format || "";
          e.year ||= m.seasonYear || m.startDate?.year || null;
          e.episodes ||= m.episodes || undefined;
          e.chapters ||= m.chapters || undefined;
          e.volumes ||= m.volumes || undefined;
          if (m.title?.english && m.title.english !== e.title)
            e.titleEn ||= m.title.english;
          if ((e.score == null || e.score === "N/A") && m.averageScore)
            e.score = m.averageScore / 10;
        });
        changed = true;
        this.saveList(mode);
      }
      return changed;
    };
    this.backfilling = run()
      .catch((error) => {
        console.warn("Backfill:", error);
        return false;
      })
      .finally(() => {
        this.backfilling = null;
      });
    return this.backfilling;
  }

  // --- EXPORTAR / IMPORTAR ---
  async exportMAL() {
    const mode = this.mode;
    if (!this.lists[mode].some((e) => e.status !== "skip")) {
      this.toast(this.t("nothingToExport"));
      return;
    }
    this.toast(this.t("preparing"));
    // Puede haber otro relleno en curso (limitado): repetir hasta completar
    while (this.lists[mode].some((e) => e.idMal === undefined)) {
      if (!(await this.backfillEntries(mode))) break;
    }

    const entries = this.lists[mode].filter((e) => e.status !== "skip");
    const exportable = entries.filter((e) => e.idMal);
    const isAnime = mode === "anime";
    const malStatus = {
      seen: "Completed",
      plan: isAnime ? "Plan to Watch" : "Plan to Read",
      dropped: "Dropped",
    };

    const items = exportable.map((e) => {
      const done = e.status === "seen";
      return isAnime
        ? `  <anime>
    <series_animedb_id>${e.idMal}</series_animedb_id>
    <series_title>${cdata(e.title)}</series_title>
    <series_episodes>${e.episodes || 0}</series_episodes>
    <my_watched_episodes>${done ? e.episodes || 0 : 0}</my_watched_episodes>
    <my_score>0</my_score>
    <my_status>${malStatus[e.status]}</my_status>
    <update_on_import>1</update_on_import>
  </anime>`
        : `  <manga>
    <manga_mangadb_id>${e.idMal}</manga_mangadb_id>
    <manga_title>${cdata(e.title)}</manga_title>
    <manga_chapters>${e.chapters || 0}</manga_chapters>
    <manga_volumes>${e.volumes || 0}</manga_volumes>
    <my_read_chapters>${done ? e.chapters || 0 : 0}</my_read_chapters>
    <my_read_volumes>${done ? e.volumes || 0 : 0}</my_read_volumes>
    <my_score>0</my_score>
    <my_status>${malStatus[e.status]}</my_status>
    <update_on_import>1</update_on_import>
  </manga>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<myanimelist>
  <myinfo>
    <user_export_type>${isAnime ? 1 : 2}</user_export_type>
  </myinfo>
${items.join("\n")}
</myanimelist>
`;
    downloadFile(xml, `aniswipe_${mode}_mal.xml`, "application/xml");

    const skipped = entries.length - exportable.length;
    this.toast(
      skipped
        ? this.t("exportedMalSkipped", { n: exportable.length, m: skipped })
        : this.t("exportedMal", { n: exportable.length }),
      4000,
    );
  }

  exportCSV() {
    const list = this.currentList;
    if (!list.length) {
      this.toast(this.t("nothingToExport"));
      return;
    }
    const header =
      "ID,MAL_ID,Title,English Title,Format,Year,Status,Score,Date";
    const rows = list.map((i) =>
      [
        i.id,
        i.idMal,
        i.title,
        i.titleEn,
        i.format,
        i.year,
        i.status,
        i.score,
        i.date,
      ]
        .map(csvCell)
        .join(","),
    );
    // BOM para que Excel respete tildes y títulos japoneses
    downloadFile(
      "﻿" + [header, ...rows].join("\n"),
      `${this.mode}_list.csv`,
      "text/csv;charset=utf-8",
    );
    this.toast(this.t("exportedFile"));
  }

  exportJSON() {
    const data = {
      app: "aniswipe",
      version: 1,
      exportedAt: new Date().toISOString(),
      anime: this.lists.anime,
      manga: this.lists.manga,
    };
    const day = new Date().toISOString().slice(0, 10);
    downloadFile(
      JSON.stringify(data, null, 2),
      `aniswipe_backup_${day}.json`,
      "application/json",
    );
    this.toast(this.t("exportedFile"));
  }

  async importJSON(file) {
    let data;
    try {
      data = JSON.parse(await file.text());
    } catch {
      data = null;
    }
    if (
      !data ||
      data.app !== "aniswipe" ||
      (!Array.isArray(data.anime) && !Array.isArray(data.manga))
    ) {
      this.toast(this.t("importError"), 4000);
      return;
    }

    let imported = 0;
    ["anime", "manga"].forEach((mode) => {
      if (!Array.isArray(data[mode])) return;
      const byId = new Map(this.lists[mode].map((e) => [e.id, e]));
      data[mode].forEach((entry) => {
        if (
          !entry ||
          typeof entry.id !== "number" ||
          !LIST_STATUSES.includes(entry.status)
        )
          return;
        const current = byId.get(entry.id);
        // Gana la entrada más reciente
        if (!current || (entry.date || "") > (current.date || "")) {
          byId.set(entry.id, entry);
          imported++;
        }
      });
      this.lists[mode] = [...byId.values()];
      this.saveList(mode);
    });

    // Quita de la baraja lo que ya está en la lista restaurada
    const savedIds = new Set(this.currentList.map((e) => e.id));
    this.queue = this.queue.filter((i) => !savedIds.has(i.id));
    this.renderCards();

    this.updateStats();
    this.renderList();
    this.toast(this.t("imported", { n: imported }), 4000);
  }

  // --- AVISOS ---
  toast(message, duration = 2200) {
    const el = this.toastEl;
    // Dentro del diálogo abierto para que quede por encima (top layer)
    const host = document.querySelector("dialog[open]") || document.body;
    if (el.parentElement !== host) host.appendChild(el);
    el.textContent = message;
    el.classList.remove("show");
    void el.offsetWidth;
    el.classList.add("show");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => el.classList.remove("show"), duration);
  }

  // --- CONTROLES ---
  setupControls() {
    this.modeBtns.forEach((btn) => {
      btn.onclick = () => this.switchMode(btn.dataset.mode);
    });

    document.getElementById("btn-up").onclick = () => this.swipe("up");
    document.getElementById("btn-down").onclick = () => this.swipe("down");
    document.getElementById("btn-left").onclick = () => this.swipe("left");
    document.getElementById("btn-right").onclick = () => this.swipe("right");
    document.getElementById("btn-undo").onclick = () => this.undoLastAction();

    // Botones de los estados vacío / error
    this.cardStack.addEventListener("click", (e) => {
      const action = e.target.closest("[data-action]")?.dataset.action;
      if (action === "retry") {
        this.lastError = null;
        this.renderCards();
      }
      if (action === "filters") this.openFilters();
      if (action === "list") this.openList();
    });

    document.addEventListener("keydown", (e) => {
      if (e.altKey || e.metaKey || document.querySelector("dialog[open]"))
        return;
      if (e.target.closest("input, select, textarea")) return;
      const key = e.key.toLowerCase();
      if (e.ctrlKey && key !== "z") return;

      const dirs = {
        arrowup: "up",
        arrowdown: "down",
        arrowleft: "left",
        arrowright: "right",
      };
      if (dirs[key]) {
        e.preventDefault();
        this.swipe(dirs[key]);
      } else if (key === "backspace" || key === "z") {
        e.preventDefault();
        this.undoLastAction();
      } else if (key === "i") {
        this.openDetails(this.topCard?._item);
      }
    });
  }

  registerServiceWorker() {
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }
}
document.addEventListener("DOMContentLoaded", () => new aniswipe());
