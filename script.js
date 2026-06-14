const typingElement = document.getElementById("typing");

if (typingElement) {

    const texts = [
        "Software Developer",
        "Web Developer",
        "AI Enthusiast",
        "ECE Student"
    ];

    let count = 0;
    let index = 0;

    (function type() {

        if (count === texts.length) {
            count = 0;
        }

        let currentText = texts[count];
        let letter = currentText.slice(0, ++index);

        typingElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 1500);
        } else {
            setTimeout(type, 120);
        }

    })();
}

/* Reveal Animation */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const top = reveal.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            reveal.classList.add("active");
        }

    });

});

/* Back To Top Button */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
const themeToggle =
document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        localStorage.setItem("theme","light");

        themeToggle.textContent = "☀️";

    }else{

        localStorage.setItem("theme","dark");

        themeToggle.textContent = "🌙";

    }

});
const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});