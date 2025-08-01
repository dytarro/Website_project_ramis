document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling ---
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            const targetElement = document.querySelector(id);
            if (targetElement) {
                // We trekken de hoogte van de vaste header eraf voor de juiste positionering
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

    // --- Pop-up Modal Functionaliteit ---
    const modal = document.getElementById('popup-modal');
    const openButtons = document.querySelectorAll('[data-action="show-popup"]');
    const closeButton = document.querySelector('.close-button');

    // Functie om de modal te tonen
    const showModal = () => {
        modal.classList.remove('modal-hidden');
        modal.classList.add('modal-visible');
    };

    // Functie om de modal te verbergen
    const hideModal = () => {
        modal.classList.add('modal-hidden');
        modal.classList.remove('modal-visible');
    };

    // Event listeners voor de knoppen
    openButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showModal();
        });
    });

    // Event listener voor de sluitknop
    if (closeButton) {
        closeButton.addEventListener('click', hideModal);
    }

    // Sluit de modal als er buiten de content geklikt wordt
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Sluit de modal met de Escape-toets
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal-visible')) {
            hideModal();
        }
    });

});
