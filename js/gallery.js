/* ===== Galería de juegos: ampliar una captura al hacer clic ===== */
(function () {
    const grid = document.querySelector(".games-grid");
    if (!grid) return;

    // Textos traducidos por js/i18n.js (con el español como respaldo si no está cargado)
    const FALLBACK = {
        "gallery.zoom": "Ampliar captura de {name}",
        "gallery.dialog": "Captura ampliada"
    };
    function t(key, name) {
        if (window.i18n) return window.i18n.t(key, { name: name });
        return FALLBACK[key].replace("{name}", name);
    }

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.tabIndex = -1;
    lightbox.hidden = true;
    lightbox.innerHTML = '<figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(lightbox);

    const bigImg = lightbox.querySelector("img");
    const caption = lightbox.querySelector("figcaption");
    let lastCard = null;

    function open(card) {
        const img = card.querySelector("img");
        bigImg.src = img.src;
        bigImg.alt = img.alt;
        // Proporción real de la captura para escalarla hasta casi toda la pantalla
        bigImg.style.setProperty("--ratio", img.naturalWidth / img.naturalHeight || img.width / img.height);
        caption.textContent = card.querySelector("figcaption").textContent;
        lastCard = card;
        lightbox.hidden = false;
        document.body.classList.add("no-scroll");
        // Se espera un frame para que la transición de entrada se ejecute
        requestAnimationFrame(function () {
            lightbox.classList.add("is-open");
        });
        lightbox.focus();
    }

    function close() {
        if (lightbox.hidden) return;
        lightbox.classList.remove("is-open");
        document.body.classList.remove("no-scroll");
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setTimeout(function () {
            lightbox.hidden = true;
        }, reduced ? 0 : 250);
        if (lastCard) lastCard.focus();
    }

    const cards = grid.querySelectorAll("figure");

    function updateLabels() {
        lightbox.setAttribute("aria-label", t("gallery.dialog"));
        cards.forEach(function (card) {
            card.setAttribute("aria-label", t("gallery.zoom", card.querySelector("figcaption").textContent));
        });
    }

    cards.forEach(function (card) {
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.addEventListener("click", function () {
            open(card);
        });
        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                // Evita que el mismo evento llegue al document y cierre la vista ampliada
                e.stopPropagation();
                open(card);
            }
        });
    });

    updateLabels();
    document.addEventListener("i18n:change", updateLabels);

    lightbox.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
        if (lightbox.hidden) return;
        if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            close();
        }
    });
})();
