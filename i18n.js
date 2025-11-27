let currentLang = localStorage.getItem("lang") || "en";

document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.setAttribute("lang", currentLang);
    loadLanguage(currentLang);
    updateLangVisualState(currentLang);
});

function loadLanguage(lang) {
    console.log("Loading:", lang);

    fetch(`${lang}.json`)
        .then(res => res.json())
        .then(data => {
            console.log("Loaded JSON:", data);
            translatePage(data);
        })
        .catch(err => console.error("Failed to load JSON:", err));

    localStorage.setItem("lang", lang);
}

function translatePage(data) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        let key = el.getAttribute("data-i18n");
        let translation = getNestedValue(data, key);

        if (translation) {
            // Handle array (lists)
            if (Array.isArray(translation)) {
                el.innerHTML = translation.map(item => `<li>${item}</li>`).join("");
            } else {
                el.innerHTML = translation.replace(/\n/g, "<br>");
            }
        } else {
            console.warn("Missing translation for:", key);
        }
    });
}

function getNestedValue(obj, key) {
    return key.split(".").reduce((o, i) => {
        return o ? o[i] : null;
    }, obj);
}

function changeLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    currentLang = lang; 
    loadLanguage(lang);
    updateLangVisualState(lang);
}

function toggleLanguage() {
    let newLang = currentLang === "en" ? "ta" : "en";
    changeLang(newLang);
}

function updateLangVisualState(lang) {
    const en = document.querySelector(".lang-en");
    const ta = document.querySelector(".lang-ta");

    if (!en || !ta) return;

    if (lang === "en") {
        en.classList.add("active-lang");
        en.classList.remove("inactive-lang");

        ta.classList.add("inactive-lang");
        ta.classList.remove("active-lang");
    } else {
        ta.classList.add("active-lang");
        ta.classList.remove("inactive-lang");

        en.classList.add("inactive-lang");
        en.classList.remove("active-lang");
    }
}
