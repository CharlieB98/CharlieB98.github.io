  	const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')

burger.addEventListener('click', () => {
	nav.classList.toggle('open')
	burger.classList.toggle('open')
})
 
const year = new Date();
document.getElementById("Year").innerHTML = "@" + year.getFullYear() + " Charlie Batterbee";

$(document).on('ready', function() {
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 4,
        autoplaySpeed:1000,
        autoplay:true,
        variableWidth:true,
        arrows:false,
      });
    });