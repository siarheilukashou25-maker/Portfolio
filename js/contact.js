/* ===== Envío del formulario de contacto con Web3Forms ===== */
(function () {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const ENDPOINT = "https://api.web3forms.com/submit";
    const TIMEOUT_MS = 15000;
    const PLACEHOLDER_KEY = "YOUR_ACCESS_KEY_HERE";
    const EMAIL = "siarhei.lukashou.prof@gmail.com";

    // Textos en español por si js/i18n.js no está cargado
    const FALLBACK = {
        "contact.status.sending": "Enviando…",
        "contact.status.sent": "¡Mensaje enviado! Te responderé lo antes posible.",
        "contact.status.error": "No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.",
        "contact.status.timeout": "El servidor no responde. Inténtalo de nuevo más tarde.",
        "contact.status.noKey": "El formulario todavía no está configurado.",
        "contact.status.fallback": "También puedes escribirme a {email}."
    };

    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector(".form-status");
    let lastStatus = null;

    function t(key, vars) {
        if (window.i18n) return window.i18n.t(key, vars);
        return FALLBACK[key].replace("{email}", vars && vars.email ? vars.email : "");
    }

    // type: "sending" | "success" | "error"; withFallback añade el enlace de email
    function showStatus(key, type, withFallback) {
        lastStatus = { key: key, type: type, withFallback: withFallback };
        status.hidden = false;
        status.className = "form-status is-" + type;
        status.textContent = t(key);
        if (withFallback) {
            const link = '<a href="mailto:' + EMAIL + '">' + EMAIL + "</a>";
            const span = document.createElement("span");
            span.className = "form-status-fallback";
            span.innerHTML = " " + t("contact.status.fallback", { email: link });
            status.appendChild(span);
        }
    }

    function setSending(sending) {
        button.disabled = sending;
        button.classList.toggle("is-sending", sending);
        form.setAttribute("aria-busy", String(sending));
    }

    // Al cambiar de idioma se vuelve a escribir el mensaje de estado
    document.addEventListener("i18n:change", function () {
        if (lastStatus) showStatus(lastStatus.key, lastStatus.type, lastStatus.withFallback);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(form));
        if (data.botcheck) return;

        if (!data.access_key || data.access_key === PLACEHOLDER_KEY) {
            showStatus("contact.status.noKey", "error", true);
            return;
        }

        data.subject = "Portfolio: " + data.subject;

        const controller = new AbortController();
        const timer = setTimeout(function () {
            controller.abort();
        }, TIMEOUT_MS);

        setSending(true);
        showStatus("contact.status.sending", "sending", false);

        fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(data),
            signal: controller.signal
        })
            .then(function (response) {
                return response.json().then(function (json) {
                    if (!response.ok || !json.success) throw new Error(json.message || "Error " + response.status);
                });
            })
            .then(function () {
                form.reset();
                showStatus("contact.status.sent", "success", false);
            })
            .catch(function (err) {
                const timedOut = err.name === "AbortError";
                showStatus(timedOut ? "contact.status.timeout" : "contact.status.error", "error", true);
            })
            .finally(function () {
                clearTimeout(timer);
                setSending(false);
            });
    });
})();
