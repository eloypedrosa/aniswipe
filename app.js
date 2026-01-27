// --- DICCIONARIO DE IDIOMAS ---
const TRANSLATIONS = {
  es: {
    anime: "Anime",
    manga: "Manga",
    filters: "Filtros",
    reset: "Reiniciar",
    filterTitle: "Filtrar",
    applyFilters: "Aplicar Filtros",
    loading: "Cargando",
    page: "Página",
    noResults: "¡No se encontraron resultados!",
    error: "Error",
    retry: "Reintentar",
    // Cartas / Estados
    plan: "QUIERO VER",
    plan_read: "QUIERO LEER",
    seen: "VISTO",
    read: "LEÍDO",
    dropped: "ABANDONADO",
    skip: "SIGUIENTE",
    // Filtros UI
    format: "Formato",
    status: "Estado",
    genres: "Géneros",
    all: "Todos",
    any: "Cualquiera",
    tv: "Serie TV",
    movie: "Película",
    ona: "ONA",
    finished: "Finalizado",
    releasing: "En Emisión",
    publishing: "Publicándose",
    // Alertas
    confirmReset:
      "¿Borrar lista de {mode}?\nSolo se borrarán los datos del modo actual.",
  },
  en: {
    anime: "Anime",
    manga: "Manga",
    filters: "Filters",
    reset: "Reset",
    filterTitle: "Filter",
    applyFilters: "Apply Filters",
    loading: "Loading",
    page: "Page",
    noResults: "No results found!",
    error: "Error",
    retry: "Retry",
    // Cards / Status
    plan: "PLAN TO WATCH",
    plan_read: "PLAN TO READ",
    seen: "WATCHED",
    read: "READ",
    dropped: "DROPPED",
    skip: "SKIP",
    // Filters UI
    format: "Format",
    status: "Status",
    genres: "Genres",
    all: "All",
    any: "Any",
    tv: "TV Series",
    movie: "Movie",
    ona: "ONA",
    finished: "Finished",
    releasing: "Airing",
    publishing: "Publishing",
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

class aniswipe {
  constructor() {
    this.mode = "anime";
    this.baseApiUrl = "https://graphql.anilist.co";
    this.itemsPerPage = 20;
    this.page = 1;
    this.isLoading = false;
    this.animeQueue = [];
    this.actionHistory = [];
    this.mosaicGenerated = false;
    this.filters = { type: "", status: "", genres: [] };
    this.preloadedImages = new Set();

    // Idioma por defecto o guardado
    this.lang = localStorage.getItem("app_lang") || "es";

    this.savedAnimeList =
      JSON.parse(localStorage.getItem("animeList_v3")) || [];
    this.savedMangaList =
      JSON.parse(localStorage.getItem("mangaList_v3")) || [];

    this.cardStack = document.getElementById("card-stack");
    this.statsText = document.getElementById("stats-text");
    this.mosaicContainer = document.getElementById("background-mosaic");
    this.modal = document.getElementById("filter-modal");
    this.btnFilter = document.getElementById("btn-filters");
    this.btnClose = document.getElementById("close-modal");
    this.btnApply = document.getElementById("apply-filters");

    this.modeBtns = document.querySelectorAll(".mode-btn");

    // Referencia al botón de idioma
    this.btnLang = document.getElementById("btn-lang");

    this.init();
  }

  async init() {
    this.setupControls();
    this.setupFilterUI();
    this.initLanguage(); // Inicializar idioma
    this.switchMode("anime", true);
  }

  // --- LÓGICA DE IDIOMA ---
  initLanguage() {
    this.updateStaticText();

    if (this.btnLang) {
      this.btnLang.textContent = this.lang.toUpperCase();
      this.btnLang.onclick = () => {
        // Alternar idioma
        this.lang = this.lang === "es" ? "en" : "es";
        localStorage.setItem("app_lang", this.lang);
        this.btnLang.textContent = this.lang.toUpperCase();

        // Actualizar UI
        this.updateStaticText();
        this.renderDynamicFilters();

        const currentCard = this.cardStack.querySelector(".card:not(.removed)");
        if (currentCard) {
          currentCard.remove();
          this.renderNextCard();
        } else if (this.isLoading || this.animeQueue.length === 0) {
          this.cardStack.innerHTML = "";
          this.fetchItems();
        }
      };
    }
  }

  // Función helper para traducir
  t(key, params = {}) {
    let text = TRANSLATIONS[this.lang][key] || key;
    Object.keys(params).forEach((k) => {
      text = text.replace(`{${k}}`, params[k]);
    });
    return text;
  }

  updateStaticText() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (TRANSLATIONS[this.lang][key]) {
        el.textContent = TRANSLATIONS[this.lang][key];
      }
    });

    this.modeBtns.forEach((btn) => {
      if (btn.dataset.mode === "anime") btn.textContent = this.t("anime");
      if (btn.dataset.mode === "manga") btn.textContent = this.t("manga");
    });
  }

  switchMode(newMode, force = false) {
    if (this.mode === newMode && !force) return;

    this.mode = newMode;

    this.modeBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mode === newMode);
    });

    if (newMode === "manga") document.body.classList.add("mode-manga");
    else document.body.classList.remove("mode-manga");

    this.animeQueue = [];
    this.actionHistory = [];
    this.cardStack.innerHTML = "";
    this.isLoading = false;

    this.filters = { type: "", status: "", genres: [] };

    this.renderDynamicFilters();

    this.updateStats();
    this.calculateStartPage();
    this.fetchItems();
  }
  get currentSavedList() {
    return this.mode === "anime" ? this.savedAnimeList : this.savedMangaList;
  }

  updateStats() {
    if (this.statsText)
      this.statsText.textContent = `${this.currentSavedList.length}`;
  }

  calculateStartPage() {
    const hasFilter =
      this.filters.type ||
      this.filters.status ||
      (this.filters.genres && this.filters.genres.length > 0);
    if (!hasFilter && this.currentSavedList.length > 0) {
      const estimatedPage = Math.floor(
        this.currentSavedList.length / this.itemsPerPage,
      );
      this.page = Math.max(1, estimatedPage);
      console.log(
        `[${this.mode.toUpperCase()}] Iniciando en página: ${this.page}`,
      );
    } else {
      this.page = 1;
    }
  }

  getAniListQuery() {
    let format = undefined;
    if (this.filters.type) {
      const typeMap = {
        tv: "TV",
        tv_short: "TV_SHORT",
        movie: "MOVIE",
        ova: "OVA",
        ona: "ONA",
        special: "SPECIAL",
        music: "MUSIC",
        manga: "MANGA",
        novel: "NOVEL",
        oneshot: "ONE_SHOT",
      };
      format = typeMap[this.filters.type];
    }

    let status = undefined;
    if (this.filters.status) {
      const statusMap = {
        complete: "FINISHED",
        airing: "RELEASING",
        publishing: "RELEASING",
        cancelled: "CANCELLED",
        hiatus: "HIATUS",
      };
      status = statusMap[this.filters.status];
    }

    let genre =
      this.filters.genres && this.filters.genres.length > 0
        ? this.filters.genres
        : undefined;

    const query = `
    query ($page: Int, $perPage: Int, $type: MediaType, $format: MediaFormat, $status: MediaStatus, $genre: [String]) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          hasNextPage
        }
        media(type: $type, format: $format, status: $status, genre_in: $genre, sort: POPULARITY_DESC, isAdult: false) {
          id
          title { romaji english native }
          coverImage { extraLarge large }
          averageScore
          type
          format
          status
          seasonYear
          startDate { year }
          genres
        }
      }
    }
    `;

    const variables = {
      page: this.page,
      perPage: this.itemsPerPage,
      type: this.mode.toUpperCase(),
      ...(format && { format }),
      ...(status && { status }),
      ...(genre && { genre }),
    };

    return { query, variables };
  }
  async fetchItems() {
    if (this.isLoading) return;

    const requestedMode = this.mode;
    this.isLoading = true;

    if (this.cardStack.children.length === 0) {
      this.cardStack.innerHTML = `<div class="loading">${this.t("loading")} ${this.mode}...<br>${this.t("page")} ${this.page}</div>`;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (this.mode !== requestedMode) return;

      const { query, variables } = this.getAniListQuery();

      const response = await fetch(this.baseApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query, variables }),
      });

      if (this.mode !== requestedMode) {
        this.isLoading = false;
        return;
      }

      const json = await response.json();

      if (!response.ok || json.errors) {
        const errMsg = json.errors
          ? json.errors[0].message
          : response.statusText;
        throw new Error(`AniList: ${errMsg}`);
      }

      const items = json.data?.Page?.media || [];

      if (items.length === 0) {
        if (this.page > 1) {
          this.page = 1;
          this.isLoading = false;
          return this.fetchItems();
        }
        this.cardStack.innerHTML = `<div class="loading">${this.t("noResults")}</div>`;
        this.isLoading = false;
        return;
      }

      const mappedItems = items.map((item) => {
        const year =
          item.seasonYear || (item.startDate ? item.startDate.year : "N/A");

        return {
          mal_id: item.id,
          title:
            item.title.romaji ||
            item.title.english ||
            item.title.native ||
            "Sin Título",
          images: {
            jpg: {
              large_image_url:
                item.coverImage.extraLarge || item.coverImage.large,
              image_url: item.coverImage.large,
            },
          },
          score: item.averageScore
            ? (item.averageScore / 10).toFixed(1)
            : "N/A",
          type: item.format || "TV",
          year: year,
          genres: item.genres ? item.genres.map((g) => ({ name: g })) : [],
        };
      });

      if (!this.mosaicGenerated) this.generateBackgroundMosaic(mappedItems);

      const newItems = mappedItems.filter(
        (item) =>
          !this.currentSavedList.some((saved) => saved.id === item.mal_id),
      );

      this.animeQueue = [...this.animeQueue, ...newItems];
      this.page++;
      this.isLoading = false;

      this.preloadImages();

      if (this.animeQueue.length === 0 && json.data.Page.pageInfo.hasNextPage) {
        return this.fetchItems();
      }

      if (this.cardStack.querySelectorAll(".card").length === 0)
        this.renderNextCard();
    } catch (error) {
      console.error("Fetch Error:", error);
      this.cardStack.innerHTML = `
        <div class="loading" style="color:#e94057; padding:20px;">
            ${this.t("error")}: ${error.message}<br>
            <button onclick="location.reload()" style="margin-top:10px; padding:8px 16px; background:#333; color:white; border:none; border-radius:8px;">${this.t("retry")}</button>
        </div>`;
      this.isLoading = false;
    }
  }

  preloadImages() {
    const toPreload = this.animeQueue.slice(0, 4);
    toPreload.forEach((item) => {
      const url =
        item.images?.jpg?.large_image_url || item.images?.jpg?.image_url;
      if (url && !this.preloadedImages.has(url)) {
        const img = new Image();
        img.src = url;
        this.preloadedImages.add(url);
      }
    });
  }

  renderNextCard() {
    const msg = this.cardStack.querySelector(".loading");
    if (msg) msg.remove();

    if (this.animeQueue.length === 0) {
      if (!this.isLoading) this.fetchItems();
      return;
    }

    if (this.cardStack.querySelectorAll(".card").length > 0) return;

    const item = this.animeQueue[0];
    const card = document.createElement("div");
    card.classList.add("card");

    const imgUrl =
      item.images?.jpg?.large_image_url ||
      item.images?.jpg?.image_url ||
      "https://placehold.co/400x600/1e1e24/FFF?text=Sin+Imagen";

    // Textos traducidos para los sellos
    const upText = this.mode === "anime" ? this.t("plan") : this.t("plan_read");
    const seenText = this.mode === "anime" ? this.t("seen") : this.t("read");
    const dropText = this.t("dropped");
    const skipText = this.t("skip");

    // Traducir primer género de la carta si existe
    let genreBadge = "";
    if (item.genres && item.genres[0]) {
      const gName = item.genres[0].name;
      // Si estamos en ES, buscar traducción, si no, dejar inglés
      const displayGenre =
        this.lang === "es" ? GENRE_TRANSLATIONS[gName] || gName : gName;
      genreBadge = `<span class="badge">${displayGenre}</span>`;
    }

    card.innerHTML = `
            <div class="status-indicator ind-up">${upText}</div>
            <div class="status-indicator ind-down">${dropText}</div>
            <div class="status-indicator ind-right-stamp">${seenText}</div>
            <div class="status-indicator ind-left-stamp">${skipText}</div>
            <img src="${imgUrl}" class="card-image" draggable="false" alt="Cover" onload="this.classList.add('loaded')">
            <div class="card-gradient"></div>
            <div class="card-info">
                <h2 class="card-title">${item.title}</h2>
                <div class="card-meta">
                    <span class="badge">${item.type}</span>
                    <span class="badge">${item.year}</span>
                    <span class="score">★ ${item.score}</span>
                    ${genreBadge}
                </div>
            </div>
          `;

    const titleEl = card.querySelector(".card-title");

    const stopPropagation = (e) => e.stopPropagation();
    titleEl.addEventListener("mousedown", stopPropagation);
    titleEl.addEventListener("touchstart", stopPropagation);

    titleEl.addEventListener("click", (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(item.title).then(() => {});
    });

    this.cardStack.appendChild(card);
    this.initGestures(card, item);

    // Precarga automática si quedan pocas cartas
    if (this.animeQueue.length < 5 && !this.isLoading) this.fetchItems();
  }

  renderDynamicFilters() {
    const container = document.getElementById("dynamic-filters");
    container.innerHTML = "";

    // Helper para crear chips
    const mkChip = (val, labelKey) =>
      `<div class="chip ${this.filters.type === val ? "selected" : ""}" data-val="${val}">${this.t(labelKey)}</div>`;

    // 1. FORMATO
    const typeGroup = document.createElement("div");
    typeGroup.className = "filter-group";
    let typeOptions = "";
    if (this.mode === "anime") {
      typeOptions = `
          ${mkChip("", "all")}
          ${mkChip("tv", "tv")}
          ${mkChip("movie", "movie")}
          ${mkChip("ona", "ona")}
      `;
    } else {
      typeOptions = `
          ${mkChip("", "all")}
          ${mkChip("manga", "manga")}
       `;
    }
    typeGroup.innerHTML = `<label class="filter-label">${this.t("format")}</label><div class="chips-container" id="type-chips">${typeOptions}</div>`;
    container.appendChild(typeGroup);

    // 2. ESTADO
    const statusGroup = document.createElement("div");
    statusGroup.className = "filter-group";
    const stVal = this.filters.status;
    const releasingKey = this.mode === "anime" ? "releasing" : "publishing";

    statusGroup.innerHTML = `<label class="filter-label">${this.t("status")}</label><div class="chips-container" id="status-chips">
        <div class="chip ${stVal === "" ? "selected" : ""}" data-val="">${this.t("any")}</div>
        <div class="chip ${stVal === "complete" ? "selected" : ""}" data-val="complete">${this.t("finished")}</div>
        <div class="chip ${stVal === (this.mode === "anime" ? "airing" : "publishing") ? "selected" : ""}" data-val="${this.mode === "anime" ? "airing" : "publishing"}">${this.t(releasingKey)}</div>
    </div>`;
    container.appendChild(statusGroup);

    // 3. GÉNEROS
    const genreGroup = document.createElement("div");
    genreGroup.className = "filter-group";
    const genres = [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Ecchi",
      "Fantasy",
      "Horror",
      "Mahou Shoujo",
      "Mecha",
      "Music",
      "Mystery",
      "Psychological",
      "Romance",
      "Sci-Fi",
      "Slice of Life",
      "Sports",
      "Supernatural",
      "Thriller",
    ];

    const isAnyGenre = this.filters.genres.length === 0;

    const genreChips = genres
      .map((g) => {
        const isSelected = this.filters.genres.includes(g);
        const label = this.lang === "es" ? GENRE_TRANSLATIONS[g] || g : g;
        return `<div class="chip ${isSelected ? "selected" : ""}" data-val="${g}">${label}</div>`;
      })
      .join("");

    genreGroup.innerHTML = `
        <label class="filter-label">${this.t("genres")}</label>
        <div class="chips-container" id="genre-chips">
            <div class="chip ${isAnyGenre ? "selected" : ""}" data-val="">${this.t("any")}</div>
            ${genreChips}
        </div>
    `;
    container.appendChild(genreGroup);

    this.bindChipEvents();
  }
  bindChipEvents() {
    const setupSingle = (id, key) => {
      const el = document.getElementById(id);
      if (!el) return;
      const chips = el.querySelectorAll(".chip");
      chips.forEach((chip) => {
        chip.onclick = () => {
          chips.forEach((c) => c.classList.remove("selected"));
          chip.classList.add("selected");
          this.filters[key] = chip.dataset.val;
        };
      });
    };

    const setupMulti = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const chips = el.querySelectorAll(".chip");

      chips.forEach((chip) => {
        chip.onclick = () => {
          const val = chip.dataset.val;

          if (val === "") {
            this.filters.genres = [];
            chips.forEach((c) => c.classList.remove("selected"));
            chip.classList.add("selected");
            return;
          }

          const anyChip = el.querySelector('[data-val=""]');
          if (anyChip) anyChip.classList.remove("selected");

          if (this.filters.genres.includes(val)) {
            this.filters.genres = this.filters.genres.filter((g) => g !== val);
            chip.classList.remove("selected");
          } else {
            this.filters.genres.push(val);
            chip.classList.add("selected");
          }

          if (this.filters.genres.length === 0 && anyChip) {
            anyChip.classList.add("selected");
          }
        };
      });
    };

    setupSingle("type-chips", "type");
    setupSingle("status-chips", "status");
    setupMulti("genre-chips");
  }
  setupFilterUI() {
    this.btnFilter.onclick = () => this.modal.classList.add("active");
    this.btnClose.onclick = () => this.modal.classList.remove("active");
    this.modal.onclick = (e) => {
      if (e.target === this.modal) this.modal.classList.remove("active");
    };

    this.btnApply.onclick = () => {
      this.modal.classList.remove("active");

      this.animeQueue = [];
      this.page = 1;
      this.isLoading = false;
      this.cardStack.innerHTML = "";
      this.fetchItems();

      const hasFilter =
        this.filters.type ||
        this.filters.status ||
        (this.filters.genres && this.filters.genres.length > 0);
      const accentColor =
        this.mode === "manga" ? "var(--c-manga)" : "var(--c-accent)";
      const bgActive =
        this.mode === "manga"
          ? "rgba(52, 211, 153, 0.15)"
          : "rgba(255,107,107,0.1)";

      this.btnFilter.style.color = hasFilter ? accentColor : "white";
      this.btnFilter.style.background = hasFilter
        ? bgActive
        : "rgba(255,255,255,0.1)";
    };
  }

  initGestures(card, item) {
    let startX = 0,
      startY = 0,
      moveX = 0,
      moveY = 0,
      isDragging = false;
    const indUp = card.querySelector(".ind-up");
    const indDown = card.querySelector(".ind-down");
    const indRight = card.querySelector(".ind-right-stamp");
    const indLeft = card.querySelector(".ind-left-stamp");

    const onStart = (e) => {
      isDragging = true;
      startX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
      startY = e.type.includes("mouse") ? e.clientY : e.touches[0].clientY;
      card.style.transition = "none";
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onEnd);
    };

    const onMove = (e) => {
      if (!isDragging) return;
      if (e.cancelable && e.type === "touchmove") e.preventDefault();
      const currentX = e.type.includes("mouse")
        ? e.clientX
        : e.touches[0].clientX;
      const currentY = e.type.includes("mouse")
        ? e.clientY
        : e.touches[0].clientY;
      moveX = currentX - startX;
      moveY = currentY - startY;
      card.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.05}deg)`;

      indUp.style.opacity = 0;
      indDown.style.opacity = 0;
      indRight.style.opacity = 0;
      indLeft.style.opacity = 0;
      const absX = Math.abs(moveX),
        absY = Math.abs(moveY);
      if (absX > absY) {
        if (moveX > 0) indRight.style.opacity = Math.min(absX / 100, 1);
        else indLeft.style.opacity = Math.min(absX / 100, 1);
      } else {
        if (moveY < 0) indUp.style.opacity = Math.min(absY / 100, 1);
        else indDown.style.opacity = Math.min(absY / 100, 1);
      }
    };

    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      const threshold = 100;
      const absX = Math.abs(moveX),
        absY = Math.abs(moveY);

      if (absX > absY && absX > threshold) {
        moveX > 0
          ? this.finalizeSwipe(card, item, "seen", window.innerWidth, 0, 30)
          : this.finalizeSwipe(card, item, "skip", -window.innerWidth, 0, -30);
      } else if (absY > absX && absY > threshold) {
        moveY < 0
          ? this.finalizeSwipe(card, item, "plan", 0, -window.innerHeight, 0)
          : this.finalizeSwipe(card, item, "dropped", 0, window.innerHeight, 0);
      } else {
        card.style.transition = "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)";
        card.style.transform = "translate(0px, 0px) rotate(0deg)";
        indUp.style.opacity = 0;
        indDown.style.opacity = 0;
        indRight.style.opacity = 0;
        indLeft.style.opacity = 0;
      }
      moveX = 0;
      moveY = 0;
    };

    card.addEventListener("mousedown", onStart);
    card.addEventListener("touchstart", onStart, { passive: false });
    card.addEventListener("touchmove", onMove, { passive: false });
    card.addEventListener("touchend", onEnd);
  }

  finalizeSwipe(card, item, status, x, y, rot) {
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
    newCard.classList.add("removed");
    newCard.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
    this.saveDecision(item, status);
    setTimeout(() => {
      newCard.remove();
      this.animeQueue.shift();
      this.renderNextCard();
    }, 300);
  }

  saveDecision(item, status) {
    const entry = {
      id: item.mal_id,
      title: item.title,
      score: item.score,
      status: status,
      date: new Date().toISOString(),
    };

    if (this.mode === "anime") {
      this.savedAnimeList.push(entry);
      localStorage.setItem("animeList_v3", JSON.stringify(this.savedAnimeList));
    } else {
      this.savedMangaList.push(entry);
      localStorage.setItem("mangaList_v3", JSON.stringify(this.savedMangaList));
    }

    this.actionHistory.push(item);
    this.updateStats();
  }

  undoLastAction() {
    if (this.actionHistory.length === 0) return;
    const lastItem = this.actionHistory.pop();

    if (this.mode === "anime") {
      if (this.savedAnimeList.length === 0) return;
      this.savedAnimeList.pop();
      localStorage.setItem("animeList_v3", JSON.stringify(this.savedAnimeList));
    } else {
      if (this.savedMangaList.length === 0) return;
      this.savedMangaList.pop();
      localStorage.setItem("mangaList_v3", JSON.stringify(this.savedMangaList));
    }

    this.updateStats();
    this.animeQueue.unshift(lastItem);
    this.cardStack.innerHTML = "";
    this.renderNextCard();
  }

  generateBackgroundMosaic(list) {
    if (this.mosaicGenerated || !list || !this.mosaicContainer) return;
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    shuffled.slice(0, 20).forEach((item, index) => {
      const imgUrl = item.images?.jpg?.image_url;
      if (imgUrl) {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.classList.add("mosaic-img");
        img.style.animationDelay = `${index * 0.1}s`;
        this.mosaicContainer.appendChild(img);
      }
    });
    this.mosaicGenerated = true;
  }

  setupControls() {
    // Toggle Buttons
    this.modeBtns.forEach((btn) => {
      btn.onclick = () => this.switchMode(btn.dataset.mode);
    });

    const trigger = (dir) => {
      const card = this.cardStack.querySelector(".card");
      if (!card) return;
      const item = this.animeQueue[0];
      if (dir === "up") this.finalizeSwipe(card, item, "plan", 0, -1000, 0);
      if (dir === "down") this.finalizeSwipe(card, item, "dropped", 0, 1000, 0);
      if (dir === "left") this.finalizeSwipe(card, item, "skip", -1000, 0, -30);
      if (dir === "right") this.finalizeSwipe(card, item, "seen", 1000, 0, 30);
    };

    document.getElementById("btn-up").onclick = () => trigger("up");
    document.getElementById("btn-down").onclick = () => trigger("down");
    document.getElementById("btn-left").onclick = () => trigger("left");
    document.getElementById("btn-right").onclick = () => trigger("right");
    document.getElementById("btn-undo").onclick = () => this.undoLastAction();

    const btnReset = document.getElementById("btn-reset");
    if (btnReset) {
      btnReset.onclick = () => {
        // [TRADUCIDO]
        if (
          confirm(this.t("confirmReset", { mode: this.mode.toUpperCase() }))
        ) {
          if (this.mode === "anime") {
            localStorage.removeItem("animeList_v3");
            this.savedAnimeList = [];
          } else {
            localStorage.removeItem("mangaList_v3");
            this.savedMangaList = [];
          }
          location.reload();
        }
      };
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") trigger("up");
      if (e.key === "ArrowDown") trigger("down");
      if (e.key === "ArrowLeft") trigger("left");
      if (e.key === "ArrowRight") trigger("right");
      if (e.key === "Backspace") this.undoLastAction();
    });

    const btnExport = document.getElementById("btn-export");
    if (btnExport) {
      btnExport.onclick = () => {
        const list = this.currentSavedList;
        const header = ["ID,Title,Status,Score,Date"];
        const rows = list.map(
          (i) =>
            `${i.id},"${i.title.replace(/"/g, '""')}",${i.status},${i.score},${i.date}`,
        );
        const csv = header.concat(rows).join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${this.mode}_list.csv`;
        a.click();
      };
    }
  }
}
document.addEventListener("DOMContentLoaded", () => new aniswipe());
