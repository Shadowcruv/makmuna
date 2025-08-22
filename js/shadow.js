


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

const bodyContent = document.getElementById('holder');
let localStor = localStorage.getItem('loadOnce');
if(localStor && localStor != '5'){
    localStorage.setItem('loadOnce', String(Number(localStor) + 1));
    console.log(localStor)
    bodyContent.innerHTML = `
        <div id="main-content">

            <!--[if lte IE 9]>
                    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
                <![endif]-->

            <!-- header-start -->
            <header>
                <div class="header-area ">
                    <div id="sticky-header" class="main-header-area">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xl-3 col-lg-3">
                                    <div class="logo-img">
                                        <a href="index.html">
                                            <img src="images/mklogo1.png" class="logo-shad" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-9">
                                    <div class="menu_wrap d-none d-lg-block">
                                        <div class="menu_wrap_inner d-flex align-items-center justify-content-end">
                                            <div class="main-menu">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li><a class="active" href="index.html">home</a></li>
                                                        <li><a href="service.html">service</a></li>
                                                        <!-- <li><a href="products.html">products</a></li> -->
                                                        <!-- <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                                            <ul class="submenu">
                                                                <li><a href="blog.html">blog</a></li>
                                                                <li><a href="single-blog.html">single-blog</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">pages <i class="ti-angle-down"></i></a>
                                                            <ul class="submenu">
                                                                <li><a href="about.html">about</a></li>
                                                                <li><a href="elements.html">elements</a></li>
                                                            </ul>
                                                        </li> -->
                                                        <li><a href="contact.html">Contact</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div class="book_room">
                                                <div class="book_btn">
                                                    <a id="scrollToAppointmentBtn1" class="popup-with-form" href="">Appointment</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- header-end -->

            <!-- slider_area_start -->
            <div class="slider_area">
                <div class="slider_active owl-carousel">
                    <div class="single_slider d-flex align-items-center justify-content-center slider_bg_1 overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-8">
                                    <div class="slider_text">
                                        <h3>Makkmuna: 
                                            Unlock Your Natural Glow</h3>
                                        <p>From toners to serums e.t.c, our skin care range is designed to pamper and protect your skin, addressing specific concerns like dryness, acne and aging.</p>
                                        <button id="scrollToAppointmentBtn4" class="boxed-btn3 shad-link">Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single_slider d-flex align-items-center justify-content-center slider_bg_2 overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-8">
                                    <div class="slider_text">
                                        <h3>Makkmuna: Skin Care that Cares</h3>
                                        <p>Indulge in our luxirious range of toners, face creams, body creams, and serums, designed to nourish, hydrate, and protect your skin.</p>
                                        <button id="scrollToAppointmentBtn2" class="boxed-btn3 shad-link">Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single_slider d-flex align-items-center justify-content-center slider_bg_3 overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-8">
                                    <div class="slider_text">
                                        <h3>Makkmuna: Beautiful Skin, Naturally</h3>
                                        <p>Our carefully crafted range includes toners, face creams, body creams, and serums that work in harmony to nourish, hydrate, and protect your skin.</p>
                                        <button id="scrollToAppointmentBtn3" class="boxed-btn3 shad-link">Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- slider_area_end -->

            <!-- about_area_start -->
            <div class="about_area ">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="animate fade-in-up col-xl-6 col-lg-6 col-md-6">
                            <div class="about_thumbs">
                                <div class="large_img_1">
                                    <img src="img/about/try1.jpg" alt="">
                                </div>
                                <div class="small_img_1">
                                    <img src="img/about/try6.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="animate fade-in-right col-xl-6 col-lg-6 col-md-6">
                            <div class="about_info">
                                <div class="section_title mb-20px">
                                    <h3>About Us</h3>
                                    <p>We provide a wide range of authentic skincare products, from creams and toners to full treatment sets. Whether you’re shopping for yourself or buying in bulk for your business, we ensure quality, affordability, and excellent customer service. Our goal is to help every customer find the perfect products for their skin needs.</p>
                                </div>
                                <p class="opening_hour">
                                    Opening Hour
                                    <span>9:00 am - 8:00 pm</span>
                                </p>
                                <a href="contact.html" class="boxed-btn3">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- about_area_end -->

            <div class="service_area">
                <div class="container">
                    <div class="animate fade-in-up row justify-content-center ">
                        <div class="col-lg-6 col-md-10">
                            <div class="section_title text-center mb-55">
                                <h3>Our Services</h3>
                                <p>Retail? Wholesale? We do it all — creams, toners, and everything in between, because smooth skin waits for no one.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="animate fade-in-up col-lg-4 col-md-6">
                            <div class="single_service">
                                <div class="service_thumb">
                                    <img src="img/prising/services/batch.jpg" alt="">
                                </div>
                                <div class="service_content text-center">
                                    <div class="icon">
                                        <i class="fas fa-warehouse"></i>
                                    </div>
                                    <h3>WholeSale Distribution</h3>
                                    <p>We offer bulk delivery services nation wide</p>
                                </div>
                            </div>
                        </div>
                        <div class="animate fade-in-left col-lg-4 col-md-6">
                            <div class="single_service">
                                <div class="service_thumb">
                                    <img src="img/prising/services/retail.jpg" alt="">
                                </div>
                                <div class="service_content text-center">
                                    <div class="icon">
                                        <i class="flaticon-barber"></i>
                                    </div>
                                    <h3>Retail Sales</h3>
                                    <p>Because sometimes you only need one cream, not a whole warehouse</p>
                                </div>
                            </div>
                        </div>
                        <div class="animate fade-in-right col-lg-4 col-md-6">
                            <div class="single_service">
                                <div class="service_thumb">
                                    <img src="img/prising/services/2.jpg" alt="">
                                </div>
                                <div class="service_content text-center">
                                    <div class="icon">
                                        <i class="flaticon-null"></i>
                                    </div>
                                    <h3>Skin Consultation</h3>
                                    <p>Confused by all the creams and toners? Let us help you find your skin’s soulmate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="prising_area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-md-6">
                            <div class="section_title mb-55">
                                <h3>Categories</h3>
                                <p>We offer any product of your choice that makes your skin get pampered, ranging from toners, facewash, sunscreen, soaps, scrubs, mosturizers e.t.c</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <div class="">
                                            <h4 class="category-name-shad">Some categories listed below</h4>
                                        </div>
                                        <div class="category-con-shad" id="auto-shad-scroll-container">
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/a.jpg" alt="">
                                                <p class="category-label">Toners</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/b.jpg" alt="">
                                                <p class="category-label">Body wash</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/c.jpg" alt="">
                                                <p class="category-label">Serum</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/d.jpg" alt="">
                                                <p class="category-label">Cleansers</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/e.jpg" alt="">
                                                <p class="category-label">Body lotions</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/f.jpg" alt="">
                                                <p class="category-label">Mosturizers</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/g.jpg" alt="">
                                                <p class="category-label">lots more</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- team_area_start  -->
            <div class="team_area">
                <!-- <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="section_title text-center mb-55">
                                <h3>The Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="single_team_member">
                                <div class="team_thumb">
                                    <img src="img/team/1.jpg" alt="">
                                </div>
                                <div class="member_info text-center">
                                    <h3>Chika Smith</h3>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single_team_member">
                                <div class="team_thumb">
                                    <img src="img/team/1.jpg" alt="">
                                </div>
                                <div class="member_info text-center">
                                    <h3>Jems Smith</h3>
                                    <p>Junior Barber</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single_team_member">
                                <div class="team_thumb">
                                    <img src="img/team/1.jpg" alt="">
                                </div>
                                <div class="member_info text-center">
                                    <h3>Thomas J Watson</h3>
                                    <p>Junior Barber</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <!-- team_area_end  -->

            <!-- testimonial_area  -->
            <div class="testimonial_area  ">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="section_title mb-40 text-center">
                                <h3>
                                    Testimonial
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="testmonial_active owl-carousel">
                                <div class="single_carousel">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7 col-md-10">
                                            <div class="single_testmonial text-center">
                                                <p>I’ve been buying wholesale from them for months. The products are always legit and my customers love them.</p>
                                                <div class="testmonial_author">
                                                    <div class="thumb">
                                                        <img src="img/testmonial/2.png" class="shad-user" alt="">
                                                    </div>
                                                    <h3>Nkechi, buyer</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single_carousel">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7 col-md-10">
                                            <div class="single_testmonial text-center">
                                                <p>"The team really helped me pick the right products for my skin type. Everything I got worked so well!</p>
                                                <div class="testmonial_author">
                                                    <div class="thumb">
                                                        <img src="img/testmonial/2.png" class="shad-user" alt="">
                                                    </div>
                                                    <h3>Choima, distributor</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single_carousel">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7 col-md-10">
                                            <div class="single_testmonial text-center">
                                                <p>Affordable prices, authentic products, and great packaging. I'm a regular now!</p>
                                                <div class="testmonial_author">
                                                    <div class="thumb">
                                                        <img src="img/testmonial/2.png" class="shad-user" alt="">
                                                    </div>
                                                    <h3>Kelvin, Buyer</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /testimonial_area  -->

            <div class="make_apppointment_area" id="appointmentSection">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section_title pl-68">
                                <h3>Send us a Message</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="appoint_ment_form pl-68">
                                <form action="https://formsubmit.co/makmuna13@yahoo.com" method="POST">
                                    <div class="single_field">
                                        <input type="text" placeholder="Name" name="Name" required>
                                    </div>
                                    <div class="single_field">
                                        <input type="text" placeholder="Email" name="Email" required>
                                    </div>
                                    <div class="single_field m-0">
                                        <textarea id="" cols="30" rows="10" placeholder="Message" name="Message"></textarea>
                                    </div>
                                    <p>We love to hear what you have to say.<br>
                                     Expect to get a feedback back from us within 24hrs.</p>
                                    <div class="form_btn">
                                        <button class="boxed-btn3" type="submit">Send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-1">
                            <div class="appointMent_info">
                                <div class="single_appontment">
                                    <h4>Visit us at</h4>
                                    <p>51 Rd, opposite All Saints Anglican Church, Amuwo Odofin, Lagos 102102, - Lagos</p>
                                </div>
                                <div class="single_appontment">
                                    <h4>Message us</h4>
                                    <p>makmuna13@yahoo.com<br>
                                        +234 8169227830</p>
                                </div>
                                <div class="single_appontment">
                                    <h4>Working Hours</h4>
                                    <p class="d-flex justify-content-between">
                                        <span>Monday - Friday</span>
                                        <span>:  9.00am - 8.00pm</span>
                                    </p>
                                    <p class="d-flex justify-content-between">
                                        <span>Thursday</span>
                                        <span>:  10.00am - 8.00pm</span>
                                    </p>
                                    <p class="d-flex justify-content-between">
                                        <span>Saturdays</span>
                                        <span>:  10.00am - 8.00pm</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- footer_start  -->
            <footer class="footer" id="shad-js-footer">
            </footer>
            <!-- footer_end  -->


            
            <!-- form itself starts-->
            <form id="test-form" class="white-popup-block mfp-hide">
                    <div class="popup_box ">
                            <div class="popup_inner">
                                <h3>Make an Appointment</h3>
                                <form action="https://formsubmit.co/makmuna13@yahoo.com" method="POST">
                                    <div class="row">
                                        <div class="col-xl-6 col-md-6">
                                            <input id="datepicker" placeholder="Date">
                                        </div>
                                        <div class="col-xl-6 col-md-6">
                                            <input id="timepicker" placeholder="time">
                                        </div>
                                        <!-- <div class="col-xl-6 col-md-6">
                                            <select class="form-select wide" id="default-select" class="">
                                                <option data-display="Choose services">Choose services 1</option>
                                                <option value="1">Choose services 2</option>
                                                <option value="2">Choose services 3</option>
                                                <option value="3">Choose services 4</option>
                                            </select>
                                        </div> -->
                                        <!-- <div class="col-xl-6 col-md-6">
                                            <select class="form-select wide" id="default-select" class="">
                                                <option data-display="Choose Barbers">Choose Barbers</option>
                                                <option value="1">Zaki</option>
                                                <option value="2">Ronky</option>
                                                <option value="3">kalu</option>
                                            </select>
                                        </div> -->
                                        <div class="col-xl-6 col-md-6">
                                            <input type="text" placeholder="Your name">
                                        </div>
                                        <div class="col-xl-6 col-md-6">
                                            <input type="text" placeholder="Phone no">
                                        </div>
                                        <div class="col-xl-12">
                                            <input type="email" placeholder="Your email">
                                        </div>
                                        <div class="col-xl-12">
                                            <button type="submit" class="boxed-btn3">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
            </form>
            <!-- form itself end -->
        </div>`

} else {
    if(localStor){
        localStorage.clear()
    }
    localStorage.setItem('loadOnce', '1');
    bodyContent.innerHTML = `<!-- Splash Screen -->
        <div id="splash-screen">
            <img src="images/mklogo1.png" alt="Logo" class="splash-logo">
            <div class="loading-dots">
            <span></span><span></span><span></span>
            </div>
        </div>
        <div id="main-content" style="display:none;">

            <!--[if lte IE 9]>
                    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
                <![endif]-->

            <!-- header-start -->
            <header>
                <div class="header-area ">
                    <div id="sticky-header" class="main-header-area">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xl-3 col-lg-3">
                                    <div class="logo-img">
                                        <a href="index.html">
                                            <img src="images/mklogo1.png" class="logo-shad" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-9">
                                    <div class="menu_wrap d-none d-lg-block">
                                        <div class="menu_wrap_inner d-flex align-items-center justify-content-end">
                                            <div class="main-menu">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li><a class="active" href="index.html">home</a></li>
                                                        <li><a href="service.html">service</a></li>
                                                        <!-- <li><a href="products.html">products</a></li> -->
                                                        <!-- <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                                            <ul class="submenu">
                                                                <li><a href="blog.html">blog</a></li>
                                                                <li><a href="single-blog.html">single-blog</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">pages <i class="ti-angle-down"></i></a>
                                                            <ul class="submenu">
                                                                <li><a href="about.html">about</a></li>
                                                                <li><a href="elements.html">elements</a></li>
                                                            </ul>
                                                        </li> -->
                                                        <li><a href="contact.html">Contact</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div class="book_room">
                                                <div class="book_btn">
                                                    <a id="scrollToAppointmentBtn1" class="popup-with-form" href="">Appointment</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- header-end -->

            <!-- slider_area_start -->
            <div class="slider_area">
                <div class="slider_active owl-carousel">
                    <div class="single_slider d-flex align-items-center justify-content-center slider_bg_1 overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-8">
                                    <div class="slider_text">
                                        <h3>Makkmuna: 
                                            Unlock Your Natural Glow</h3>
                                        <p>From toners to serums e.t.c, our skin care range is designed to pamper and protect your skin, addressing specific concerns like dryness, acne and aging.</p>
                                        <button id="scrollToAppointmentBtn1" class="boxed-btn3 shad-link">Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single_slider d-flex align-items-center justify-content-center slider_bg_2 overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-8">
                                    <div class="slider_text">
                                        <h3>Makkmuna: Skin Care that Cares</h3>
                                        <p>Indulge in our luxirious range of toners, face creams, body creams, and serums, designed to nourish, hydrate, and protect your skin.</p>
                                        <button id="scrollToAppointmentBtn2" class="boxed-btn3 shad-link">Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single_slider d-flex align-items-center justify-content-center slider_bg_3 overlay">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-8">
                                    <div class="slider_text">
                                        <h3>Makkmuna: Beautiful Skin, Naturally</h3>
                                        <p>Our carefully crafted range includes toners, face creams, body creams, and serums that work in harmony to nourish, hydrate, and protect your skin.</p>
                                        <button id="scrollToAppointmentBtn3" class="boxed-btn3 shad-link">Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- slider_area_end -->

            <!-- about_area_start -->
            <div class="about_area ">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="animate fade-in-up col-xl-6 col-lg-6 col-md-6">
                            <div class="about_thumbs">
                                <div class="large_img_1">
                                    <img src="img/about/try1.jpg" alt="">
                                </div>
                                <div class="small_img_1">
                                    <img src="img/about/try6.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="animate fade-in-right col-xl-6 col-lg-6 col-md-6">
                            <div class="about_info">
                                <div class="section_title mb-20px">
                                    <h3>About Us</h3>
                                    <p>We provide a wide range of authentic skincare products, from creams and toners to full treatment sets. Whether you’re shopping for yourself or buying in bulk for your business, we ensure quality, affordability, and excellent customer service. Our goal is to help every customer find the perfect products for their skin needs.</p>
                                </div>
                                <p class="opening_hour">
                                    Opening Hour
                                    <span>9:00 am - 8:00 pm</span>
                                </p>
                                <a href="contact.html" class="boxed-btn3">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- about_area_end -->

            <div class="service_area">
                <div class="container">
                    <div class="animate fade-in-up row justify-content-center ">
                        <div class="col-lg-6 col-md-10">
                            <div class="section_title text-center mb-55">
                                <h3>Our Services</h3>
                                <p>Retail? Wholesale? We do it all — creams, toners, and everything in between, because smooth skin waits for no one.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="animate fade-in-up col-lg-4 col-md-6">
                            <div class="single_service">
                                <div class="service_thumb">
                                    <img src="img/prising/services/batch.jpg" alt="">
                                </div>
                                <div class="service_content text-center">
                                    <div class="icon">
                                        <i class="fas fa-warehouse"></i>
                                    </div>
                                    <h3>WholeSale Distribution</h3>
                                    <p>We offer bulk delivery services nation wide</p>
                                </div>
                            </div>
                        </div>
                        <div class="animate fade-in-left col-lg-4 col-md-6">
                            <div class="single_service">
                                <div class="service_thumb">
                                    <img src="img/prising/services/retail.jpg" alt="">
                                </div>
                                <div class="service_content text-center">
                                    <div class="icon">
                                        <i class="flaticon-barber"></i>
                                    </div>
                                    <h3>Retail Sales</h3>
                                    <p>Because sometimes you only need one cream, not a whole warehouse</p>
                                </div>
                            </div>
                        </div>
                        <div class="animate fade-in-right col-lg-4 col-md-6">
                            <div class="single_service">
                                <div class="service_thumb">
                                    <img src="img/prising/services/2.jpg" alt="">
                                </div>
                                <div class="service_content text-center">
                                    <div class="icon">
                                        <i class="flaticon-null"></i>
                                    </div>
                                    <h3>Skin Consultation</h3>
                                    <p>Confused by all the creams and toners? Let us help you find your skin’s soulmate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="prising_area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-md-6">
                            <div class="section_title mb-55">
                                <h3>Categories</h3>
                                <p>We offer any product of your choice that makes your skin get pampered, ranging from toners, facewash, sunscreen, soaps, scrubs, mosturizers e.t.c</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <div class="">
                                            <h4 class="category-name-shad">Some categories listed below</h4>
                                        </div>
                                        <div class="category-con-shad" id="auto-shad-scroll-container">
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/a.jpg" alt="">
                                                <p class="category-label">Toners</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/b.jpg" alt="">
                                                <p class="category-label">Body wash</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/c.jpg" alt="">
                                                <p class="category-label">Serum</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/d.jpg" alt="">
                                                <p class="category-label">Cleansers</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/e.jpg" alt="">
                                                <p class="category-label">Body lotions</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/f.jpg" alt="">
                                                <p class="category-label">Mosturizers</p>
                                            </div>
                                            <div class="category-item">
                                                <img class="categories-shad" src="img/team/g.jpg" alt="">
                                                <p class="category-label">lots more</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- team_area_start  -->
            <div class="team_area">
                <!-- <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="section_title text-center mb-55">
                                <h3>The Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="single_team_member">
                                <div class="team_thumb">
                                    <img src="img/team/1.jpg" alt="">
                                </div>
                                <div class="member_info text-center">
                                    <h3>Chika Smith</h3>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single_team_member">
                                <div class="team_thumb">
                                    <img src="img/team/1.jpg" alt="">
                                </div>
                                <div class="member_info text-center">
                                    <h3>Jems Smith</h3>
                                    <p>Junior Barber</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single_team_member">
                                <div class="team_thumb">
                                    <img src="img/team/1.jpg" alt="">
                                </div>
                                <div class="member_info text-center">
                                    <h3>Thomas J Watson</h3>
                                    <p>Junior Barber</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <!-- team_area_end  -->

            <!-- testimonial_area  -->
            <div class="testimonial_area  ">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="section_title mb-40 text-center">
                                <h3>
                                    Testimonial
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="testmonial_active owl-carousel">
                                <div class="single_carousel">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7 col-md-10">
                                            <div class="single_testmonial text-center">
                                                <p>I’ve been buying wholesale from them for months. The products are always legit and my customers love them.</p>
                                                <div class="testmonial_author">
                                                    <div class="thumb">
                                                        <img src="img/testmonial/2.png" class="shad-user" alt="">
                                                    </div>
                                                    <h3>Nkechi, buyer</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single_carousel">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7 col-md-10">
                                            <div class="single_testmonial text-center">
                                                <p>"The team really helped me pick the right products for my skin type. Everything I got worked so well!</p>
                                                <div class="testmonial_author">
                                                    <div class="thumb">
                                                        <img src="img/testmonial/2.png" class="shad-user" alt="">
                                                    </div>
                                                    <h3>Choima, distributor</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single_carousel">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7 col-md-10">
                                            <div class="single_testmonial text-center">
                                                <p>Affordable prices, authentic products, and great packaging. I'm a regular now!</p>
                                                <div class="testmonial_author">
                                                    <div class="thumb">
                                                        <img src="img/testmonial/2.png" class="shad-user" alt="">
                                                    </div>
                                                    <h3>Kelvin, Buyer</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /testimonial_area  -->

            <div class="make_apppointment_area" id="appointmentSection">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section_title pl-68">
                                <h3>Send us a Message</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="appoint_ment_form pl-68">
                                <form action="https://formsubmit.co/0f5aac5e98f1c85adf01eab1ada38283" method="POST">
                                    <div class="single_field">
                                        <input type="text" placeholder="Name" name="Name" required>
                                    </div>
                                    <div class="single_field">
                                        <input type="text" placeholder="Email" name="Email" required>
                                    </div>
                                    <div class="single_field m-0">
                                        <textarea id="" cols="30" rows="10" placeholder="Message" name="message"></textarea>
                                    </div>
                                    <p>I’m available for commissions and collaborations, and i’m <br>
                                        excited to hear from you about new projects.</p>
                                    <div class="form_btn">
                                        <button class="boxed-btn3" type="submit">Send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-1">
                            <div class="appointMent_info">
                                <div class="single_appontment">
                                    <h4>Visit us at</h4>
                                    <p>51 Rd, opposite All Saints Anglican Church, Amuwo Odofin, Lagos 102102, - Lagos</p>
                                </div>
                                <div class="single_appontment">
                                    <h4>Message us</h4>
                                    <p>makmuna13@yahoo.com<br>
                                        +234 8169227830</p>
                                </div>
                                <div class="single_appontment">
                                    <h4>Working Hours</h4>
                                    <p class="d-flex justify-content-between">
                                        <span>Monday - Friday</span>
                                        <span>:  9.00am - 8.00pm</span>
                                    </p>
                                    <p class="d-flex justify-content-between">
                                        <span>Thursday</span>
                                        <span>:  10.00am - 8.00pm</span>
                                    </p>
                                    <p class="d-flex justify-content-between">
                                        <span>Saturdays</span>
                                        <span>:  10.00am - 8.00pm</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- footer_start  -->
            <footer class="footer" id="shad-js-footer">
            </footer>
            <!-- footer_end  -->


            
            <!-- form itself starts-->
            <form id="test-form" class="white-popup-block mfp-hide">
                    <div class="popup_box ">
                            <div class="popup_inner">
                                <h3>Make an Appointment</h3>
                                <form action="https://formsubmit.co/0f5aac5e98f1c85adf01eab1ada38283" method="POST">
                                    <div class="row">
                                        <div class="col-xl-6 col-md-6">
                                            <input id="datepicker" placeholder="Date">
                                        </div>
                                        <div class="col-xl-6 col-md-6">
                                            <input id="timepicker" placeholder="time">
                                        </div>
                                        <!-- <div class="col-xl-6 col-md-6">
                                            <select class="form-select wide" id="default-select" class="">
                                                <option data-display="Choose services">Choose services 1</option>
                                                <option value="1">Choose services 2</option>
                                                <option value="2">Choose services 3</option>
                                                <option value="3">Choose services 4</option>
                                            </select>
                                        </div> -->
                                        <!-- <div class="col-xl-6 col-md-6">
                                            <select class="form-select wide" id="default-select" class="">
                                                <option data-display="Choose Barbers">Choose Barbers</option>
                                                <option value="1">Zaki</option>
                                                <option value="2">Ronky</option>
                                                <option value="3">kalu</option>
                                            </select>
                                        </div> -->
                                        <div class="col-xl-6 col-md-6">
                                            <input type="text" placeholder="Your name">
                                        </div>
                                        <div class="col-xl-6 col-md-6">
                                            <input type="text" placeholder="Phone no">
                                        </div>
                                        <div class="col-xl-12">
                                            <input type="email" placeholder="Your email">
                                        </div>
                                        <div class="col-xl-12">
                                            <button type="submit" class="boxed-btn3">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
            </form>
            <!-- form itself end -->
        </div>`

}

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

document.getElementById('scrollToAppointmentBtn4').addEventListener('click', 
  function() {
    document.getElementById('appointmentSection').scrollIntoView({ behavior: 'smooth' });
  }
);


