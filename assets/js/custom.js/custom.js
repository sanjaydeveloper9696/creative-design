


    document.addEventListener("DOMContentLoaded", function () {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true      // Animation happens only once
        });

        // Initialize Particles.js after DOM load
        particlesJS.load('particles-js', 'particles.json', function () {
            console.log('Particles.js config loaded');
        });

        // Counter animation
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            counter.innerText = '0';
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 100;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });

        // Initialize Owl Carousel
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2000,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 6 }
            }
        });
    });



        document.addEventListener("DOMContentLoaded", function () {
            const menuToggle = document.getElementById("menuToggle");
            const offcanvasMenu = document.getElementById("offcanvasMenu");
            const closeMenu = document.getElementById("closeMenu");
            const navLinks = document.querySelectorAll(".nav-link");

            // Open menu
            menuToggle.addEventListener("click", function () {
                offcanvasMenu.classList.add("active");
            });

            // Close menu
            closeMenu.addEventListener("click", function () {
                offcanvasMenu.classList.remove("active");
            });

            // Close menu when a menu item is clicked
            navLinks.forEach(link => {
                link.addEventListener("click", function () {
                    offcanvasMenu.classList.remove("active");
                });
            });
        });

