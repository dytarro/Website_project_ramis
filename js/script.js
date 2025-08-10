document.addEventListener('DOMContentLoaded', function() {

    // --- Translations Object ---
    const translations = {
        nl: {
            site_title: "Supermarkt Ramis - De Poolse Smaak in Nederland",
            lang_popup_text: "Kies een taal",
            hero_title: "Supermarkt Ramis: Voor uw dagelijkse boodschappen en de lekkerste specialiteiten.",
            hero_button: "Bekijk ons aanbod",
            offers_title: "Onze Aanbiedingen",
            "c&c_title": "Bestel Online & Haal Af in de Winkel",
            product1_name: "Verse Witte Worst",
            product2_name: "Productnaam 2",
            product3_name: "Productnaam 3",
            product4_name: "Productnaam 4",
            product_button: "Bestel & Haal af",
            tradition_title: "Een Stukje Polen in Pijnacker",
            tradition_subtitle: "Ontdek onze authentieke Poolse specialiteiten, van verse worsten tot traditionele zoetigheden.",
            tradition_button: "Ontdek onze Specialiteiten",
            contact_title: "Openingstijden & Locatie",
            address_label: "Adres:",
            hours_label: "Openingstijden:",
            hours_mon_fri: "Ma - Vr: 09:00 - 18:00",
            hours_sat: "Za: 09:00 - 17:00",
            hours_sun: "Zo: Gesloten",
            contact_label: "Contact:",
            footer_copyright: "© 2025 Supermarkt Ramis. Alle rechten voorbehouden.",
            footer_credits: "Dit is een vrijblijvend website-voorstel, met zorg gemaakt door Rick.",
            modal_popup_text: "Deze functie is direct beschikbaar na de lancering van de website en stelt u in staat om uw boodschappen eenvoudig online te reserveren."
        },
        pl: {
            site_title: "Supermarket Ramis - Polski Smak w Holandii",
            lang_popup_text: "Wybierz język",
            hero_title: "Supermarket Ramis: Codzienne zakupy i najlepsze specjały.",
            hero_button: "Zobacz naszą ofertę",
            offers_title: "Nasze Promocje",
            "c&c_title": "Zamów Online, Odbierz w Sklepie",
            product1_name: "Biała Kiełbasa",
            product2_name: "Nazwa Produktu 2",
            product3_name: "Nazwa Produktu 3",
            product4_name: "Nazwa Produktu 4",
            product_button: "Zamów i odbierz",
            tradition_title: "Kawałek Polski w Pijnacker",
            tradition_subtitle: "Odkryj nasze autentyczne polskie specjały, od świeżych kiełbas po tradycyjne słodycze.",
            tradition_button: "Odkryj nasze Specjały",
            contact_title: "Godziny otwarcia i Lokalizacja",
            address_label: "Adres:",
            hours_label: "Godziny otwarcia:",
            hours_mon_fri: "Pon - Pt: 09:00 - 18:00",
            hours_sat: "Sob: 09:00 - 17:00",
            hours_sun: "Niedz: Zamknięte",
            contact_label: "Kontakt:",
            footer_copyright: "© 2025 Supermarket Ramis. Wszelkie prawa zastrzeżone.",
            footer_credits: "To jest niewiążąca propozycja strony internetowej, stworzona z troską przez Ricka.",
            modal_popup_text: "Ta funkcja będzie dostępna zaraz po uruchomieniu strony i umożliwi łatwą rezerwację zakupów online."
        }
    };

    // --- Language Functionality ---
    const languageSelector = document.getElementById('language-selector');
    const translatableElements = document.querySelectorAll('[data-key]');

    const setLanguage = (lang) => {
        // Update text content
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                // For the title tag, we need to set textContent
                if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang;

        // Save language to local storage
        localStorage.setItem('language', lang);
    };

    languageSelector.addEventListener('click', (e) => {
        if (e.target.classList.contains('flag-icon')) {
            const selectedLang = e.target.getAttribute('data-lang');
            setLanguage(selectedLang);
        }
    });

    // Set initial language
    const savedLang = localStorage.getItem('language') || 'nl';
    setLanguage(savedLang);


    // --- Smooth Scrolling ---
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            const targetElement = document.querySelector(id);
            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // --- Pop-up Modal Functionality ---
    const modal = document.getElementById('popup-modal');
    const openButtons = document.querySelectorAll('[data-action="show-popup"]');
    const closeButton = document.querySelector('.close-button');

    const showModal = () => {
        modal.classList.remove('modal-hidden');
        modal.classList.add('modal-visible');
    };

    const hideModal = () => {
        modal.classList.add('modal-hidden');
        modal.classList.remove('modal-visible');
    };

    openButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showModal();
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', hideModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal-visible')) {
            hideModal();
        }
    });

    // --- Language Pop-up Functionality ---
    const languagePopup = document.getElementById('language-popup');
    const closeLanguagePopup = document.getElementById('close-language-popup');

    const showLanguagePopup = () => {
        if (!localStorage.getItem('languagePopupShown')) {
            languagePopup.classList.add('language-popup-visible');
            languagePopup.classList.remove('language-popup-hidden');
            localStorage.setItem('languagePopupShown', 'true');
        }
    };

    const hideLanguagePopup = () => {
        languagePopup.classList.remove('language-popup-visible');
    };

    setTimeout(showLanguagePopup, 1500);
    setTimeout(hideLanguagePopup, 8000); 

    closeLanguagePopup.addEventListener('click', hideLanguagePopup);

});
