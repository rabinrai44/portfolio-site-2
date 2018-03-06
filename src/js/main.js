// Sticky Navigation for future wish
// $(window).on('scroll', function() {
//     if ($(window).scrollTop()) {
//         $('nav').addClass('nav-sticky');
//     }
//     else {
//         $('nav').removeClass('nav-sticky');
//     }
// })

// Smooth Scrolling

$(document).ready(function(){ 
    $('nav li a').click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
         && location.hostname == this.hostname) { 
             var $target = $(this.hash); 
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
              if ($target.length) { 
                  var targetOffset = $target.offset().top; 
                  $('html,body') .animate({
                      scrollTop: targetOffset
                        }, 1000);
                    return false; 
                        } 
                    } 
                }); 
        });
// reference: https://www.learningjquery.com/2007/09/animated-scrolling-with-jquery-12

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