/* =========================================
   YOGESH TALELE PORTFOLIO V2
========================================= */


/* =========================================
   CUSTOM GLOWING CURSOR
========================================= */

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (event) => {

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

    cursorDot.style.left = event.clientX + "px";
    cursorDot.style.top = event.clientY + "px";

});


document.querySelectorAll("a, button").forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.style.width = "55px";
        cursor.style.height = "55px";

    });

    element.addEventListener("mouseleave", () => {

        cursor.style.width = "35px";
        cursor.style.height = "35px";

    });

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =========================================
   TYPING EFFECT
========================================= */

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Python Enthusiast",
    "AI Explorer",
    "Data Science Enthusiast",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   3D TILT EFFECT
========================================= */

const tiltCards =
    document.querySelectorAll(".tilt-card");


tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 900) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -6;

        const rotateY =
            ((x - centerX) / centerX) * 6;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* =========================================
   PROJECT FILTER
========================================= */

const filters =
    document.querySelectorAll(".filter");

const projects =
    document.querySelectorAll(".project-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        const category =
            filter.dataset.filter;


        projects.forEach(project => {

            const projectCategory =
                project.dataset.category;


            if (
                category === "all" ||
                projectCategory === category
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll("[data-count]");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;


    counters.forEach(counter => {

        const target =
            Number(counter.dataset.count);

        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 40));


        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.textContent = target + "+";

                return;

            }

            counter.textContent = current;

            requestAnimationFrame(updateCounter);

        };


        updateCounter();

    });

}


const statsSection =
    document.querySelector(".stats-section");


const statsObserver =
    new IntersectionObserver(

        entries => {

            if (entries[0].isIntersecting) {

                startCounters();

            }

        },

        {
            threshold: .4
        }

    );


statsObserver.observe(statsSection);


/* =========================================
   RESUME BUTTON
========================================= */

function downloadResume(event) {

    event.preventDefault();

    /*
       Put your actual resume file in this folder:

       Yogesh-Portfolio/
       ├── index.html
       ├── style.css
       ├── script.js
       ├── profile.jpg
       └── Yogesh-Talele-Resume.pdf

       Then this button will download it.
    */

    const resumePath =
        "Yogesh-Talele-Resume.pdf";

    const link =
        document.createElement("a");

    link.href = resumePath;

    link.download =
        "Yogesh-Talele-Resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}


/* =========================================
   WHATSAPP CONTACT FORM
========================================= */

const whatsappForm =
    document.getElementById("whatsappForm");


/*
 IMPORTANT:

 Replace this with your real WhatsApp number.

 Example:
 919876543210

 Do NOT include:
 +
 spaces
 -
 brackets
*/

const YOUR_WHATSAPP_NUMBER =
    "YOUR_WHATSAPP_NUMBER";


whatsappForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert(    ");

        return;

    }


    if (
        YOUR_WHATSAPP_NUMBER ===8767792360
        "YOUR_WHATSAPP_NUMBER"
    ) {

        /*
          Temporary fallback:
          Opens your WhatsApp QR invitation.
        */

        const fallback =
            "https://wa.me/qr/ZRLUPU7MQCW5K1";

        window.open(
            fallback,
            "_blank"
        );

        return;

    }


    const whatsappMessage =
`Hello Yogesh! 👋

My name is ${YOGESH}.

Email:
${yogeshtalele03@email.com}

Message:
${I want to discuss a project}

I found your portfolio website and would like to connect with you.`;


    const whatsappURL =
        `https://wa.me/${YOUR_WHATSAPP_8767792360}?text=${c:\Users\Administrator\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\A09868982698C584B1828523453618FDB7E0B525\transfers\2026-34\WhatsApp Image 2026-08-22 at 8.18.29 PM.jpeg
        (whatsappMessage)}`;


    window.open(
        whatsappURL,
        "_blank"
    );


    whatsappForm.reset();

});


/* =========================================
   MAGNETIC BUTTON EFFECT
========================================= */

const magneticButtons =
    document.querySelectorAll(
        ".btn-primary, .whatsapp-btn"
    );


magneticButtons.forEach(button => {

    button.addEventListener("mousemove", event => {

        if (window.innerWidth < 900) return;

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;


        button.style.transform =
            `translate(${x * .08}px, ${y * .08}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0,0)";

    });

});