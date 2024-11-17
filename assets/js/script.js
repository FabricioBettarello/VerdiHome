document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const navbarTop = navbar.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.scrollY >= navbarTop) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".offcanvas-body .nav-link");
    const offcanvas = document.getElementById("offcanvasNavbar");

    navbarLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 980) {
                const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
                offcanvasInstance.hide();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});