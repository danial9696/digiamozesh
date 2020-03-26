

$(document).ready(() => {

    // DOM Cache
    const collapseBtn = $('#collapseBtn');
    const menu = $('.slick-menu');
    const signUp = $('#sign-up-btn')
    const signIn = $('#sign-in-btn')
    const close = $('#close')
    const accordionPanel = $('.accordion-panel');
    const courseTitle = $('#course-title');
    const description = $('#description');
    const fullDescription = $('.full-description');
    let i;

    // Responsive Menu
    collapseBtn.on('click', () => {
        menu.toggleClass('state-btn');
    });

    // Responsive Menu Mega Menu
    $('.mobile-mega-menu').on('click', function() {
        let mobile = $(this);
        mobile.siblings('.mega-menu').toggle();
    });

    // Close PopUp
    close.on('click', function() {
        $('#registerPopup').toggle(500);
        $('#overlay').css({
            visibility: 'hidden',
            opacity: '0'
        });
    })

    // Register
    signUp.on('click', function() {
        $('#overlay').css({
            visibility: 'visible',
            opacity: '1'
        });
        $('#registerPopup').toggle(500);
    });

    // Login
    signIn.on('click', function() {
        $('#overlay').css({
            visibility: 'visible',
            opacity: '1'
        });
        $('#loginPopup').toggle(500);
    });

    // Top btn for change beetwen descriptio and courser title
    accordionPanel.on('click', function()  {
        let acc = $(this);
        if($(acc).children('.panel').length === 1) {
            $(acc).children('.panel').css('border-bottom', 'none');
        }
        $(acc).children('.panel').toggleClass('active', 300, 'linear');
    
    });

     // Top btn for change beetwen descriptio and courser title
    courseTitle.on('click', function() {
      // fullDescription.css('display', 'none');
      fullDescription.toggle(500);
      $('.course-title').attr('style', 'padding-top: 0 !important');
    });

    description.on('click', function() {
      fullDescription.toggle(500);
    });

    // number count for stats, using jQuery animate
    $('.counting').each(function() {
        const $this = $(this);
        countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
        countNum: countTo
        },
    
        {
    
        duration: 1000,
        easing:'linear',
        step: function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function() {
            $this.text(this.countNum);
            //alert('finished');
        }
    
        });  
    });

    // Teachers Description Tob Btn Changes
    // $('.top-btn-description').children().on('click', function() {
    //     let topBtn = $(this);
    //     topBtn.css
    // });

    $('.web-teacher').on('click', function() {
        $('.network-teacher-inn').hide();
        $('.web-teacher-inn').toggle();
    });

    $('.network-teacher').on('click', function() {
        $('.web-teacher-inn').hide(); 
        $('.network-teacher-inn').toggle();
    });

    // Carousel
    let swiper = new Swiper('.swiper-container', {
        loop: true,
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
          },
        slidesPerView: 4,
        paginationClickable: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
          },
      
        breakpoints: {
            1920: {
                slidesPerView: 5,
                
            },
            1500: {
                slidesPerView: 5,
                
            },
            1028: {
                slidesPerView: 3

            },
            480: {
                slidesPerView: 2,
                
            }
        }
    });
})