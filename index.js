document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }
    if (window.scrollY > 1600) {
      document.querySelector(".scroll-up-btn").classList.add("show");
    } else {
      document.querySelector(".scroll-up-btn").classList.remove("show");
    }
  });

  // document
  //   .querySelector(".scroll-up-btn")
  //   .addEventListener("click", function () {
  //     document.querySelector("html").animate({ scrollTop: 0 });
  //     document.querySelector("html").style.scrollBehavior = "auto";
  //   });

  document.querySelectorAll(".navbar .menu li a").forEach(function (element) {
    element.addEventListener("click", function () {
      document.querySelector("html").style.scrollBehavior = "smooth";
    });
  });

  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
  });

  const typingElement = document.querySelector(".typing");
  const strings = [
    "Electronics Engineer.",
    "FrontEnd Developer.",
    "Lifelong Learner.",
  ];

  let stringIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < strings[stringIndex].length) {
      typingElement.innerHTML += strings[stringIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.innerHTML = strings[stringIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, 60);
    } else {
      stringIndex = (stringIndex + 1) % strings.length;
      setTimeout(type, 100);
    }
  }

  type();

  var owl = document.querySelector(".carousel");
  if (owl) {
    new OwlCarousel(owl, {
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  }
});

function frontendlink() {
  window.open("https://tubular-madeleine-ad6cab.netlify.app/");
}

function movielink() {
  window.open("https://vinayakagangavati.github.io/react-moviesapp");
}

function projects() {
  window.open("https://github.com/Vinayakagangavati?tab=repositories");
}
