$(document).ready(function(){
  $('article').hide();
  $('#content1').fadeIn('800');
  $('.test').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  });

var offset=250, // At what pixels show Back to Top Button
    scrollDuration=300; // Duration of scrolling to top
        $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
                $('.top').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
                } else {
    $('.top').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
    }
  })

  // Smooth animation when scrolling
  $('.top').click(function(event) {
  event.preventDefault();
            $('html, body').animate({
          scrollTop: 0}, scrollDuration);
                })
  
$('img').bind('mouseenter mouseleave', function() {
    $(this).attr({
        src: $(this).attr('data-other-src') 
        , 'data-other-src': $(this).attr('src') 
    })
});

var num = 132; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('shadow fixed');
    } else {
        $('.menu').removeClass('shadow fixed');
    }
});

$('.learn').mouseover(function(){
	$(this).addClass('shadow');
}).mouseout(function(){
	$(this).removeClass('shadow');
});

  $('#wish1').hover(function() {
  	$('#info').text("WISH #1100: I wish to be Santa's Elf!");
  }).click(function(){
  	$('article').hide();
  	$('#content1').fadeIn('800');
  });

  $('#wish2').hover(function() {
  	$('#info').text('WISH #1099: I wish to be a princess!');
  }).click(function(){
  	$('article').hide();
  	$('#content2').fadeIn('800');
  });

  $('#wish3').hover(function() {
  	$('#info').text('WISH #1098: I wish to be a superhero!');
  }).click(function(){
  	$('article').hide();
  	$('#content3').fadeIn('800');
  });

  $('#wish4').hover(function() {
  	$('#info').text('WISH #1097: I wish to be a chef!');
  })/*.click(function(){
  	$('article').hide();
  	$('#content4').fadeIn('800');
  })*/;

  $('#wish5').hover(function() {
  	$('#info').text('WISH #1096: I wish to be a pilot!');
  })/*.click(function(){
  	$('article').hide();
  	$('#content5').fadeIn('800');
  })*/;  

  $('#wish6').hover(function() {
  	$('#info').text('WISH #1095: I wish to meet Elsa!');
  })/*.click(function(){
  	$('article').hide();
  	$('#content6').fadeIn('800');
  })*/;  

  $('#wish7').hover(function() {
  	$('#info').text('WISH #1094: I wish to meet my hero!');
  })/*.click(function(){
  	$('article').hide();
  	$('#content7').fadeIn('800');
  })*/;  

});

