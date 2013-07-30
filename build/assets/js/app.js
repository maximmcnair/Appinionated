;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
// Add background colors
$('[data-hex]').each(function(){
  var element = $(this)
    , color = '#' + element.data('hex')

  element.css('background-color', color)
    // Add color to btn
    .find('.btn').css('color',color)
})


// Correct review height
var docHeight = $(window).height()

// Adjust height
$('.landing').height(docHeight)
$('.tags').height(docHeight)
$('.submit').height(docHeight)
$('.review').each(function(){
  $(this).height(docHeight)
})

// Find window position from top
function updateCurrentSection() {
  var postFromTop = $(document).scrollTop()
  currentSection = parseFloat(postFromTop / docHeight).toFixed(0)
}

setTimeout(function () {
  updateCurrentSection()
}, 600)


$(window).scroll(function () {
  updateCurrentSection()
})



// Keyboard nav
var currentSection = 0
  , sectionCount = $('section').length - 1

$(document).keydown(function (evt) {
  if ( evt.keyCode === 40 ) { // down arrow
    if( currentSection < sectionCount ){
      evt.preventDefault() // prevents the usual scrolling behaviour

      currentSection++

      var scrollTo23 = $('section').eq(currentSection).offset().top
      $('body').animate({
        scrollTop: scrollTo23
      })
    }
  } else if (evt.keyCode === 38) { // up arrow
    if( currentSection !== 0 ){
      evt.preventDefault()
      currentSection--
      var scrollTo23 = $('section').eq(currentSection).offset().top
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