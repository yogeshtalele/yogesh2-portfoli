/* ================= MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});


/* CLOSE MENU */

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

});


/* ================= BACK TO TOP ================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    topBtn.style.opacity = "1";
  } else {
    topBtn.style.opacity = ".55";
  }

});


topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* ================= PROJECT FILTER ================= */

const projectFilters =
  document.querySelectorAll(".filter");

projectFilters.forEach(button => {

  button.addEventListener("click", () => {

    projectFilters.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category =
      button.dataset.filter;

    document
      .querySelectorAll(".project-card")
      .forEach(card => {

        if (
          category === "all" ||
          card.dataset.category === category
        ) {

          card.style.display = "flex";

        } else {

          card.style.display = "none";

        }

      });

  });

});


/* ================= CERTIFICATE FILTER ================= */

const certFilters =
  document.querySelectorAll(".cert-filter");

certFilters.forEach(button => {

  button.addEventListener("click", () => {

    certFilters.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category =
      button.dataset.cert;

    document
      .querySelectorAll(".cert-card")
      .forEach(card => {

        if (
          category === "all" ||
          card.dataset.cert === category
        ) {

          card.style.display = "block";

        } else {

          card.style.display = "none";

        }

      });

  });

});


/* ================= WHATSAPP CONTACT FORM ================= */

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
      document
        .getElementById("fullName")
        .value
        .trim();


    const email =
      document
        .getElementById("email")
        .value
        .trim();


    const phone =
      document
        .getElementById("phone")
        .value
        .trim();


    const subject =
      document
        .getElementById("subject")
        .value
        .trim();


    const message =
      document
        .getElementById("message")
        .value
        .trim();


    const whatsappMessage =

`Hello Yogesh 👋

Name: ${name}

Email: ${email}

Phone: ${phone}

Subject: ${subject}

Message:
${message}`;


    /*
      Your WhatsApp number:
      +91 8767792360

      Country code = 91
      Number = 8767792360
    */

    const whatsappNumber =
      "918767792360";


    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${
        encodeURIComponent(whatsappMessage)
      }`;


    window.open(
      whatsappURL,
      "_blank"
    );

  });


/* ================= SCROLL ANIMATION ================= */

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.08
    }

  );


document
  .querySelectorAll(
    ".section, .journey-card, .skill, .project-card, .cert-card"
  )
  .forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(20px)";

    element.style.transition =
      "opacity .7s ease, transform .7s ease";

    observer.observe(element);

  });


/* Animation class */

const animationStyle =
  document.createElement("style");

animationStyle.textContent = `

.show {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

`;

document.head.appendChild(
  animationStyle
);


/* ================= CURSOR GLOW ================= */

const glow =
  document.querySelector(
    ".cursor-glow"
  );


window.addEventListener(
  "mousemove",
  event => {

    glow.style.left =
      event.clientX + "px";

    glow.style.top =
      event.clientY + "px";

  }
);