

$(document).ready(() => {

    const collapseBtn = $('#collapseBtn');
    const menu = $('.slick-menu');
    const accordionPanel = $('.accordion-panel');
    const courseTitle = $('#course-title');
    const description = $('#description');
    const fullDescription = $('.full-description');
    // const panel = $('.panel');
    let i;

    // Responsive Menu
    collapseBtn.on('click', () => {
        // if (menu.hasClass() = 'd-none') {
        //     menu.clas
        // }
        menu.toggleClass('state-btn',1000);
    });

    

    // Accordion
    accordionPanel.on('click', function()  {
        let acc = $(this);
        if($(acc).children('.panel').length === 1) {
            $(acc).children('.panel').css('border-bottom', 'none');
        }
        $(acc).children('.panel').toggleClass('active', 500, 'easeOutSine');
    
    });

    // Accordion on click
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

    

    // $('.owl-carousel').owlCarousel({
        
        
        
        // margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
        // responsiveClass: true,
        // nav: true,

        // responsive: {
        //   0: {
        //     items: 1
        //   },

        //   600: {
        //     items: 3
        //   },

        //   1024: {
        //     items: 4
        //   },

        //   1366: {
        //     items: 4,
        //     nav:true,
        //     loop:true,
        //     autoplay: true,
        //   }
        // }
        
    // });

    // $('.similar-product').slick({
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 3
    // });
    

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