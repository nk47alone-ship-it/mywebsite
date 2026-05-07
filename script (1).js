// Loader

window.addEventListener("load", () => {

    document.getElementById("loader").style.display = "none";

});

// Navbar Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});

// Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

// Scroll To Top

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// Active Nav Link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});