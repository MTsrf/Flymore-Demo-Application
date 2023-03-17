(function() {
    "use strict";
    window.addEventListener('scroll', function () {
        let header = document.querySelector('header');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('scrolling-active', windowPosition);
    });
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
        parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
    });
    var slide = document.getElementById("slide");
    var upArrow = document.getElementById("upArrow");
    var downArrow = document.getElementById("downArrow");

    let x = 0;

    upArrow.onclick = function(){
        if(x > "-600"){
            x = x - 300;
            slide.style.top = x + "px";
        }
        
    }
    downArrow.onclick = function(){
        if(x < 0){
            x = x + 300;
            slide.style.top = x + "px";
        }
        
    }
    $(document).ready(function() {
        if ( $(window).width() < 1000 ) {
           startCarousel1();
        } else {
             $('#jslider').addClass('off');
        }
      });
      
      $(window).resize(function() {
          if ( $(window).width() < 1000 ) {
            startCarousel1();
          } else {
            stopCarousel1();
          }
      });
      
      function startCarousel1(){
           $("#jslider").owlCarousel({    
           navigation : true,
           slideSpeed : 500,
           margin:20,
           paginationSpeed : 400,
           autoplay:true,
           items : 4,
           dots: true,
           itemsDesktop : false,
           itemsDesktopSmall : false,
           loop:true,
           nav:true,
           navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
           responsive:{
                      0:{
                          items:1
                      },
                      300:{
                          items:2
                      },
                      600:{
                          items:3
                      }
                  }
        });
      }

    // let slideIndex = 1;
    //     showSlides(slideIndex);

    // // Next/previous controls
    // function plusSlides(n) {      
    //     showSlides(slideIndex += n);
    // }

    // // Thumbnail image controls
    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    // let i;
    // let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    // if (n > slides.length) {slideIndex = 1}
    // if (n < 1) {slideIndex = slides.length}
    // for (i = 0; i < slides.length; i++) {
    //      slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    // }



})()
