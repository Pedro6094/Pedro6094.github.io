
// ==========================================
// PORTAFOLIO PERSONAL - PEDRO ARIZA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // 1. MENÚ DE NAVEGACIÓN PARA MÓVILES
    // ======================================

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

        });

        // Cerrar el menú al seleccionar una sección

        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");

            });

        });

    }


    // ======================================
    // 2. ANIMACIONES DE LAS SECCIONES
    // ======================================

    document.body.classList.add("js-ready");

    const sections = document.querySelectorAll(".section");

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.08
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

    } else {

        sections.forEach((section) => {
            section.classList.add("visible");
        });

    }


    // ======================================
    // 3. RESALTAR LA SECCIÓN ACTUAL
    // ======================================

    const navigationLinks = document.querySelectorAll(".nav-link");

    const pageSections = document.querySelectorAll(
        "main section[id]"
    );

    if ("IntersectionObserver" in window) {

        const navigationObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const currentId = entry.target.id;

                        navigationLinks.forEach((link) => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${currentId}`
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                rootMargin: "-25% 0px -65% 0px"
            }
        );

        pageSections.forEach((section) => {
            navigationObserver.observe(section);
        });

    }


    // ======================================
    // 4. ACTUALIZAR EL AÑO AUTOMÁTICAMENTE
    // ======================================

    const currentYear = document.getElementById("current-year");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    // ======================================
    // 5. CERRAR MENÚ AL CAMBIAR A ESCRITORIO
    // ======================================

    window.addEventListener("resize", () => {

        if (window.innerWidth > 700 && navLinks && menuToggle) {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");

        }

    });

});

