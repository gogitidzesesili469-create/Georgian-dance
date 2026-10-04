/* =====================================================
   ქართული ცეკვა — JavaScript
   ===================================================== */


/* -----------------------------------------------------
   1. Mobile Navigation
   ----------------------------------------------------- */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {

    // მობილური მენიუს გახსნა/დახურვა
    nav.classList.toggle("active");

});


/* -----------------------------------------------------
   2. მენიუს ავტომატურად დახურვა
   ----------------------------------------------------- */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        // ბმულზე დაჭერის შემდეგ მობილური მენიუ იხურება
        nav.classList.remove("active");

    });

});


/* -----------------------------------------------------
   3. Scroll Reveal Animation
   ----------------------------------------------------- */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            // ელემენტი გამოჩნდება მაშინ,
            // როდესაც ეკრანის ხედვის არეში შევა
            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                // ერთხელ გამოჩენის შემდეგ აღარ ვაკვირდებით
                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


/* ყველა .reveal ელემენტის დაკვირვება */

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* -----------------------------------------------------
   4. Header-ის მცირე ეფექტი Scroll-ზე
   ----------------------------------------------------- */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    // როდესაც მომხმარებელი ქვემოთ ჩამოსქროლავს,
    // Header-ს ემატება მსუბუქი ჩრდილი
    if (window.scrollY > 20) {

        header.style.boxShadow = "0 5px 25px rgba(50, 20, 20, 0.06)";

    } else {

        header.style.boxShadow = "none";

    }

})