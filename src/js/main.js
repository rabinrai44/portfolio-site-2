// Sticky Navigation with background
$(window).scroll(function() {
    if($('.navbar').offset().top > 150) {
        $('.fixed-top').addClass('nav-sticky');
        $('.fixed-top').addClass('bg-light');
    }
    else {
        $('.fixed-top').removeClass('nav-sticky');
    }
});


// SmoothScrolling Navigation
$(document).ready(function() {
    let scrollLink = $('a');

    // Smooth scrolling 
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
        scrollTop: $(this.hash).offset().top        
        }, 2000 );
    });

    // Active Link Switching 
    $(window).scroll(function() {

        let scrollNavLocation = $(this).scrollTop();

        scrollLink.each(function() {

            let sectionOffset = $(this.hash).offset().top - 100;

            if (sectionOffset <= scrollNavLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    });
});

// REVEAL SCROLLING EFFECTS
window.sr = ScrollReveal();
//NAVBAR EFFECT
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'top',
    distance: '2rem'
});
// GLOBAL EFFECT

sr.reveal('.btn', {
    duration: 2000,
    origin: 'bottom',
    distance: '18.75rem'
});
sr.reveal('.section-title', {
    duration: 1000,
    origin: 'top',
    distance: '2rem'
});
sr.reveal('.section-subtitle', {
    duration: 1500,
    origin: 'bottom',
    distance: '2rem'
});
sr.reveal('hr', {
    duration: 1000,
    origin: 'bottom',
    distance: '2rem'
});
// HERO SECTIOIN EFFECT
sr.reveal('#hero .display-4', {
    duration: 1000,
    origin: 'left',
    distance: '25rem'
});
sr.reveal('#hero p', {
    duration: 1500,
    origin: 'right',
    distance: '18.75rem'
});

// ABOUT SECTION EFFECT
sr.reveal('#about h3', {
    duration: 1000,
    origin: 'left',
    distance: '10rem'
});
sr.reveal('#about p', {
    duration: 1500,
    origin: 'right',
    distance: '20rem'
});
sr.reveal('#about img', {
    duration: 2000,
    origin: 'right',
    distance: '5rem'
});

// SKILLS SECTION EFFECT
sr.reveal('#skills li span', {
    duration: 2000,
    origin: 'right',
    distance: '20rem'
});

// PROJECT SECTION EFFECT
sr.reveal('.project-title', {
    duration: 1000,
    origin: 'left',
    distance: '10rem'
});
sr.reveal('.project-image', {
    duration: 1500,
    origin: 'left',
    distance: '5rem'
});
sr.reveal('.project-stack', {
    duration: 1500,
    origin: 'right',
    distance: '5rem'
});
sr.reveal('.project-content p', {
    duration: 2000,
    origin: 'bottom',
    distance: '10rem'
});

// CLIENT SECTION EFFECT
sr.reveal('#testimonials blockquote', {
    duration: 2000,
    origin: 'top',
    distance: '2rem'
});
sr.reveal('#testimonials .testimonial-info', {
    duration: 1500,
    origin: 'bottom',
    distance: '2rem'
});
// CONTACT SECTION EFFECT
sr.reveal('#contact .contact-form', {
    duration: 2000,
    origin: 'left',
    distance: '30rem'
});

 // FOOTER EFFECT
 sr.reveal('footer .social-link-group', {
    duration: 2500,
    origin: 'right',
    distance: '10rem'
});
sr.reveal('footer .text-muted', {
    duration: 2000,
    origin: 'bottom',
    distance: '2rem'
});