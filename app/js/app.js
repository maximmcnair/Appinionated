// Add background colors
$('[data-hex]').each(function(){
  var element = $(this)
    , color = '#' + element.data('hex')

  element.css('background-color', color)
  console.log(color)
})


// Correct review height
var docHeight = $(window).height()
$('.landing').height(docHeight)
$('.review').each(function(){
  $(this).height(docHeight)
})


// Keyboard nav
var currentReview = 0

$(document).keydown(function (evt) {
  if ( evt.keyCode === 40 ) { // down arrow
    if( currentReview !== ( $('.post').length - 1 ) ){
      evt.preventDefault(); // prevents the usual scrolling behaviour

      currentReview++

      var scrollTo23 = $('section').eq(currentReview).offset().top;

      $('body').animate({
        scrollTop: scrollTo23
      })
    }
  } else if (evt.keyCode === 38) { // up arrow
    if( currentReview !== 0 ){
      evt.preventDefault();
      currentReview--
      var scrollTo23 = $('section').eq(currentReview).offset().top;
      $('body').animate({
        scrollTop: scrollTo23
      })
    }
  }
});


// Init flexslider
$(window).load(function () {
  $('.review__images').each(function () {
    $(this).flexslider({

    })
  })
})
