;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
// Add background colors
$('[data-hex]').each(function(){
  var element = $(this)
    , color = '#' + element.data('hex')

  element.css('background-color', color)
    // Add color to btn
    .find('.btn').css('color',color)
  // console.log(color)
})


// Correct review height
var docHeight = $(window).height()
$('.landing').height(docHeight)
$('.tags').height(docHeight)
$('.submit').height(docHeight)
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
      slideshowSpeed: 4000
    , controlNav: true
    , directionNav: true
    })
  })
})

},{}]},{},[1])
;