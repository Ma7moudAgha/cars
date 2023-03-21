//============================ swiper ========================= //


function myFunction(x) {
    if (x.matches) { // If media query matches
      /***  Initialize Swiper **/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 65,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,

        autoplay:{
          delay:3000,
                },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      /***  Initialize Swiper **/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 60,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // autoplay:{
        //   delay:1700,
        //         },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }
  
  
  var x = window.matchMedia("(max-width: 1000px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes



/*==================== SCROLL REVEAL ANIMATION ====================*/

// top
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  reset: true
});

sr.reveal('.card , .social_links , .swiper' , {interval: 200})



//   right
ScrollReveal({ distance: '65px' });
const srr =   ScrollReveal({
  origin: 'right',
  distance: '0px',
  duration: 3000,
  reset: true
})
srr.reveal('.about , .about-bmw , .about-mercedes , .about-audi',{ interval: 200 });



//   left
ScrollReveal({ distance: '65px' });
const srl =   ScrollReveal({
  origin: 'left',
  distance: '200px',
  duration: 2000,
  reset: true
})
srl.reveal('.home , .contact , .home-bmw , .home-mercedes ', { interval:200 });


//   left audi
ScrollReveal({ distance: '65px' });
const srla =   ScrollReveal({
  origin: 'left',
  distance: '300px',
  duration: 2000,
  reset: true
})
srl.reveal('.home-audi', { interval:200 });


//   right audi
ScrollReveal({ distance: '65px' });
const srlau =   ScrollReveal({
  origin: 'right',
  distance: '0px',
  duration: 2000,
  reset: true
})
srl.reveal('.about-audi', { interval:200 });



// ================scroll top================//

let span = document.querySelector(".up");
window.onscroll =function(){
  if (this.scrollY >= 1000){span.classList.add("show");}
  else {span.classList.remove("show");}
};

span.onclick = function()
{
  window.scrollTo({top:0 , behavior:"smooth"})
}