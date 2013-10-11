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

// Review first
$('.js-review-first').on('click', function () {
  scrollToElement('#sword-and-sorcery', 600)
})

function scrollToElement(selector, time, verticalOffset) {
  time = typeof(time) != 'undefined' ? time : 1000;
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $(selector);
  offset = element.offset();
  offsetTop = offset.top + verticalOffset;
  $('html, body').animate({
    scrollTop: offsetTop
  }, time);
}



// Find window position from top
function updateCurrentSection() {
  var postFromTop = $(document).scrollTop()
    , section = parseFloat(postFromTop / docHeight).toFixed(0)

  if(currentSection !== section){
    currentSection = section
    var h2 = $('section').eq(currentSection).find('h2').html()

    if(h2){
      var title = $('section').eq(currentSection).find('h2').html().replace(/\s+/g, '-').toLowerCase()
      // window.location.hash = title
      if ( history.pushState ) window.history.pushState("", "", '#' + title)
    }
  }
}

setTimeout(function () {
  updateCurrentSection()
}, 600)


$(window).scroll(function () {
  updateCurrentSection()
})

var page = {
  up: function () {
    if( currentSection !== 0 ){
      currentSection--
      var scrollTo23 = $('section').eq(currentSection).offset().top
      $('body').animate({
        scrollTop: scrollTo23
      })
    }
  }
, down: function () {
    if( currentSection < sectionCount ){
      currentSection++
      var scrollTo23 = $('section').eq(currentSection).offset().top
      $('body').animate({
        scrollTop: scrollTo23
      })
    }
  }
}
// Keyboard nav
var currentSection = 0
  , sectionCount = $('section').length - 1

$(document).keydown(function (evt) {
  if ( evt.keyCode === 40 ) { // down arrow
    evt.preventDefault()
    page.down()
  } else if (evt.keyCode === 38) { // up arrow
    evt.preventDefault()
    page.up()
  }
})


// // Change section on scroll
// var readyToScroll = true
// $(document).bind('mousewheel DOMMouseScroll', function (evt) {
//     evt.preventDefault()
//     if(readyToScroll === true){
//       if(evt.originalEvent.wheelDelta > 0){
//         readyToScroll = false
//         page.up()
//         setTimeout(function () {
//           readyToScroll = true
//         }, 300)
//       } else {
//         readyToScroll = false
//         page.down()
//         setTimeout(function () {
//           readyToScroll = true
//         }, 300)
//       }
//     }
// })
},{}]},{},[1])
;