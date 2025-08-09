
//splash-screen js
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  const main = document.getElementById("main-content");

  // Wait for full page load
  window.addEventListener("load", () => {
    setTimeout(() => {
      splash.classList.add("fade-out");
      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
      }, 600); // Match fade-out duration
    }, 12500); // Keep splash visible for a moment
  });
});



export function renderFooter(identity){
identity.innerHTML = `<div class="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-md-6 col-lg-5 ">
                        <div class="footer_widget">
                            <div class="footer_logo">
                                <a href="#">
                                    <img src="images/mklogo1.png" class="logo-shad" alt="">
                                </a>
                            </div>
                            <p class="address_text">Nourish your skin with gentle, effective care. Discover our range of natural creams, toners, and treatments designed to help you glow every day.
                            </p>
                            <div class="socail_links">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="ti-twitter-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-lg-3">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Information
                            </h3>
                            <ul class="links">
                                <li><a href="service.html">Services</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2  col-md-6 col-lg-2">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Services
                            </h3>
                            <ul class="links">
                                <li><a href="">WholeSale Distribution </a></li>
                                <li><a href="">Retail Sale</a></li>
                                <li><a href=""> Skin Consultation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2  col-md-6 col-lg-2">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Follow Us
                            </h3>
                            <ul class="links">
                                <li><a href="">FaceBook</a></li>
                                <li><a href="">Instagram</a></li>
                                <li><a href=""> Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right_text">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <p class="copy_right text-center">
                            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="#" target="_blank">ShadowCruv</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                        </p>
                    </div>
                </div>
            </div>
        </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const jsFooter = document.getElementById("shad-js-footer");
    if (jsFooter) {
        renderFooter(jsFooter);
    }
});


const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting && !entry.target.classList.contains("animated")){
      console.log(entry);
      entry.target.classList.add("animated");
    }
  })
}

const observer = new IntersectionObserver(callback, options);

const animatedElements = document.querySelectorAll(".animate");

animatedElements.forEach(element => observer.observe(element));

const container = document.getElementById("auto-scroll-container");

  // Clone the images
  const cloneItems = container.innerHTML;
  console.log(`cloneItems : ${cloneItems}`)
  container.innerHTML += cloneItems;
  console.log(`container-innerHTML : ${container.innerHTML}`)

  const originalContentWidth = container.scrollWidth / 2;
  console.log(`originalContentWidth : ${originalContentWidth}`)

  let scrollSpeed = 1.5;

  function autoScroll() {
    container.scrollLeft += scrollSpeed;

    console.log(`container.scrollLeft : ${container.scrollLeft}`)

    // Reset scroll to the original starting point
    if (container.scrollLeft >= originalContentWidth) {
      container.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
  }

  autoScroll();

// Add pause on hover
container.addEventListener('mouseenter', () => scrollSpeed = 0);
container.addEventListener('mouseleave', () => scrollSpeed = 2);

// // Initialize Lenis
// const lenis = new Lenis({
//   autoRaf: true,
// });

// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });


