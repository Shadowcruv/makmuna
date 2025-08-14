


// const container = document.getElementById('auto-shad-scroll-container');
// const scrollSpeed = 2; // pixels per tick
// let scrollInterval;

// // Clone all children and append them to create the seamless loop
// const items = [...container.children];
// items.forEach(item => {
//     const clone = item.cloneNode(true);
//     container.appendChild(clone);
// });

// function startScrolling() {
//     scrollInterval = setInterval(() => {
//         container.scrollLeft += scrollSpeed;

//         // When we've scrolled past the first set of items, reset
//         if (container.scrollLeft >= container.scrollWidth / 2) {
//             container.scrollLeft = 0;
//         }
//     }, 16); // ~60fps
// }

// function stopScrolling() {
//     clearInterval(scrollInterval);
// }

// startScrolling();

// // Pause scrolling on hover
// container.addEventListener('mouseenter', stopScrolling);
// container.addEventListener('mouseleave', startScrolling);



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
    }, 1500); // Keep splash visible for a moment
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
                                        <a href="https://web.facebook.com/makmunacosmetics">
                                            <i class="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li> 
                                        <a href="https://www.tiktok.com/@makkmunacosmetics"> 
                                            <i class="fab fa-tiktok"></i> 
                                        </a> 
                                    </li> 
                                    <li> 
                                        <a href="https://wa.me/2348169227830"> 
                                            <i class="fab fa-whatsapp"></i> 
                                        </a> 
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/makkmunacosmetics">
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
                                <li><a href="https://web.facebook.com/makmunacosmetics">FaceBook</a></li>
                                <li><a href="https://www.tiktok.com/@makkmunacosmetics">Tiktok</a></li>
                                <li><a href="https://wa.me/2348169227830">Whatsapp</a></li>
                                <li><a href="https://www.instagram.com/makkmunacosmetics">Instagram</a></li>
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


//when button is clicked  it scrolls to the page in view
document.getElementById('scrollToAppointmentBtn1').addEventListener('click', 
  function() {
    document.getElementById('appointmentSection').scrollIntoView({ behavior: 'smooth' });
  }
);

document.getElementById('scrollToAppointmentBtn2').addEventListener('click', 
  function() {
    document.getElementById('appointmentSection').scrollIntoView({ behavior: 'smooth' });
  }
);

document.getElementById('scrollToAppointmentBtn3').addEventListener('click', 
  function() {
    document.getElementById('appointmentSection').scrollIntoView({ behavior: 'smooth' });
  }
);


