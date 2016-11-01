// JS COMUM A TODOS OS LAYOUTS


// $(document).ready(function() {
//
//   if (navigator.userAgent.match(/Android/i)) {
//     window.scrollTo(0,0); // reset in case prev not scrolled
//     var nPageH = $(document).height();
//     var nViewH = window.outerHeight;
//     if (nViewH > nPageH) {
//       nViewH -= 250;
//       $('BODY').css('height',nViewH + 'px');
//     }
//     window.scrollTo(0,1);
//   }
//
// });

// LOADING PAGE
window.onload=function() {
    document.getElementById('loading-mask').style.marginTop='-100vh';
}



/* ::::::: INDEX ::::::: */

// SCROLL INVERTIDO LOGO
$(document).ready(function(){

  var winHeight = $(window).innerHeight();
  $(document).ready(function () {
      $(".panel").height(winHeight);
      $("body").height(winHeight*$(".panel").length);
  });

  window.addEventListener('resize', function (event) {
      $(".panel").height($(window).innerHeight());
  });
  $(window).on('scroll',function(){
      $(".panelCon").css('bottom',$(window).scrollTop()*-1);
      $(".panelCon2").css('bottom',$(window).scrollTop()*-1);
  });

});

// HIDE BUG SCROLL INVERTIDO (DIV PRETA)
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 1) {
        $('.nothing').fadeOut(10);
    } else {
        $('.nothing').fadeIn();
    }
});

// HIDE JUST SCROLL
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 30) {
        $('.p_flyA').fadeOut();
    } else {
        $('.p_flyA').fadeIn();
    }
});


// CHANGE SMILES ON HOVER
$('#f1').mouseenter (function() {
  $(this).find(".fhide").fadeOut(0);
});
$('#f1').mouseleave (function() {
  $(this).find(".fhide").fadeIn(0);
});

$('#f2').mouseenter (function() {
  $(this).find(".fhide").fadeOut(0);
});
$('#f2').mouseleave (function() {
  $(this).find(".fhide").fadeIn(0);
});

$('#f3').mouseenter (function() {
  $(this).find(".fhide").fadeOut(0);
});
$('#f3').mouseleave (function() {
  $(this).find(".fhide").fadeIn(0);
});



// 1 ALONE TO EVERYONE
$('#n-linha3 li:nth-child(3)').on('click', function() {
    $(this).css({
     'cursor': 'auto',
     'background': 'none'
    });

    $('#n-linha3 li:nth-child(3)').empty().append('you').hide().fadeIn(300);

    $('#n-linha1 ul li, #n-linha2 ul li, #n-linha3 ul li, #n-linha4 ul li, #n-linha5 ul li').css({
      'visibility': 'visible'
    });

    $('#n-linha4 li:nth-child(4)').css({
      'background': 'none',
      'cursor': 'help'
    });

  });

// 3 YOU TO ARE
$('#n-linha4 li:nth-child(4)').on('click', function() {
    $(this).empty().append('are').hide().fadeIn(300);
    $(this).css({'cursor': 'auto'});

    $('#n-linha2 li:nth-child(2)').css({
      'background': 'none',
      'cursor': 'help'
    });

    $('#n-linha4 li:nth-child(4)').css({
      'background': 'url("../data/clone2.png") no-repeat center',
      'cursor': 'help'
      });

    $('#n-linha3 li:nth-child(3)').empty();

    $('#n-linha3 li:nth-child(3)').empty().append('<img src="data/clone.png" alt="clone">');

  });

// 4 ARE TO NOT
$('#n-linha2 li:nth-child(2)').on('click', function() {
    $(this).empty().append('not').hide().fadeIn(300);
    $(this).css({'cursor': 'auto'});

    $('#n-linha4 li:nth-child(2)').css({
      'background': 'none',
      'cursor': 'help'
    });

    $('#n-linha4 li:nth-child(4)').empty();

    $('#n-linha4 li:nth-child(4)').empty().append('<img src="data/clone.png" alt="clone">');

});
// 5 NOT TO THE
$('#n-linha4 li:nth-child(2)').on('click', function() {
    $(this).empty().append('the').hide().fadeIn(300);
    $(this).css({'cursor': 'auto'});

    $('#n-linha2 li:nth-child(4)').css({
      'background': 'none',
      'cursor': 'help'
    });

    $('#n-linha2 li:nth-child(2)').empty();

    $('#n-linha2 li:nth-child(2)').empty().append('<img src="data/clone.png" alt="clone">');

});

// 6 THE TO ONLY
$('#n-linha2 li:nth-child(4)').on('click', function() {
    $(this).empty().append('only').hide().fadeIn(300);
    $(this).css({'cursor': 'auto'});

    $('#n-linha3 li:nth-child(3)').empty()

    $('.empty2fact').css({display: "initial"});

    $('#n-linha4 li:nth-child(2)').empty();

    $('#n-linha4 li:nth-child(2)').empty().append('<img src="data/clone.png" alt="clone">');

});

// 7 ONLY TO ONE

$('.empty2fact').on('click', function() {
    $(this).css({'display': 'none'});

    $('#n-linha3 li:nth-child(3)').empty().append('one').hide().fadeIn(300);

    $('#n-linha2 li:nth-child(4)').empty();

    $('#n-linha2 li:nth-child(4)').empty().append('<img src="data/clone.png" alt="clone">');

    $('#n-container1').delay(1000).fadeOut(1000);

    $('#n-black-lista1').delay(1000).animate({
      'top': '0',
    }, 1700 )

    $('#n-black-lista2').hide().delay(1700).fadeIn(1000);

    $('#n-white-lista1').css({visibility: "hidden"});

  });


// SHOW SCROLL TIP
  $('#n-black-lista1').click (function() {
    $('#scroll-tip').fadeIn();
    $('#scroll-tip').delay(1000).fadeOut();
  });

  //BACK TO THE MOON
  $('.back').on('mouseenter', function() {
    $(this).find('.css-typing').fadeIn(500);
  });

  $('.back').on('mouseleave', function() {
    $(this).find('.css-typing').fadeOut(500);
  });



  //SHOW ABOUT
   $('.about').click (function() {
      $('.popup-bg').slideToggle("fast");
      $('.popup').slideToggle("fast");
   });


  //HIDE ABOUT
  $('.popup-bg, .p-close').click (function(){
     $('.popup, .popup-bg').hide();
  });




// if (matchMedia('only screen and (min-height: 650px) and (orientation:landscape)').matches) {

// @MEDIAQUERIES de javascript em HEIGHT e não em WIDTH

// horizontalmente a pag consegue ser responsiva automaticamente.
// verticalmente funcoes de js pode criar conflitos,


// DESKTOP

if (matchMedia('only screen and (min-height: 700px)').matches) {

  /* ::::::: INDEX ::::::: */

  // SHOW HOW DYOU FEEL TODAY
  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 400) {
          $('#p_how').fadeIn();
          $('#f1').delay(1000).fadeIn(500);
          $('#f2').delay(1000).fadeIn(1000);
          $('#f3').delay(1000).fadeIn(1500);
      } else {
          $('#p_how').fadeOut();
          $('#f1').fadeOut();
          $('#f2').fadeOut();
          $('#f3').fadeOut();
      }
  });

  // SHOW HOW DYOU IMG BLUR
  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 380) {
          $('#blur').fadeIn();
      } else {
          $('#blur').fadeOut();
      }
  });


  // SHOW FLY SENTENSES
  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 1500) {
          $('.p_flyB').fadeIn();
      } else {
          $('.p_flyB').fadeOut();
      }
  });


  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 2200) {
          $('.p_flyC').fadeIn();
      } else {
          $('.p_flyC').fadeOut();
      }
  });

  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 2900) {
          $('.p_flyD').fadeIn();
      } else {
          $('.p_flyD').fadeOut();
      }
  });


  // SHOW LAST FLY
  $(window).scroll(function() {
      if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
          //Bottom Reached
          $('.p_flyE2').fadeIn();
          $('.p_flyE img').fadeIn();
      } else {
          $('.p_flyE2').fadeOut();
          $('.p_flyE img').fadeOut();
      }
  });


  // ACTIVE SOUND WAKE UP ON HOVER / CLICK
  function playclip() {
    if (navigator.appName == "Microsoft Internet Explorer") {
      if (document.all) {
        document.all.sound.src = "click.wav";
        }
    }
    else {
      { var audio = document.getElementsByTagName("audio")[0];
      audio.play(); }
      }
  }



/* ::::::: NOT SURE ::::::: */

// WHITE LISTS APPEAR
  var t = $("#n-invisible-bg1").offset().top;

  $(document).scroll(function(){
      if($(this).scrollTop() > t)
      {
          $('#n-white-lista1').css({visibility: "visible"});
          $('#n-white-lista2').css({opacity: "1"});
          $('#n-white-lista3').css({opacity: "1"});
      } else {
          $('#n-white-lista1').css({visibility: "hidden"});
          $('#n-white-lista2').css({opacity: "0"});
          $('#n-white-lista3').css({opacity: "0"});
      }
  });

// BLACK LISTS APPEAR
  var u = $("#n-invisible-bg2").offset().top;

  $(document).scroll(function(){
      if($(this).scrollTop() > u)
      {
          $('#n-black-lista3').css({opacity: "1"});
          $('#n-black-lista2').css({'z-index': "7"});
      } else {
          $('#n-black-lista3').css({opacity: "0"});
          $('#n-black-lista2').css({'z-index': "1"});
      }
  });

// MEMORY IMPLANTS TEXT APPEAR
  var x = $("#n-black-bg1").offset().top;

  $(document).scroll(function(){
      if($(this).scrollTop() > x)
      {
          $('#n-black-txt1').css({'z-index': "11"});
      } else {
          $('#n-black-txt1').css({'z-index': "1"});
      }
  });

// EDIT MEMORIES TEXT HIDE
  var y = $("#n-black-txt1").offset().top;

  $(document).scroll(function(){
      if($(this).scrollTop() > y)
      {
          $('#n-black-txt2').css({'z-index': "1"});
      } else {
          $('#n-black-txt2').css({'z-index': "10"});
      }
  });

// SHOW I'M SORRY
$(window).scroll(function() {
    if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
        //Bottom Reached
        $('#n-sorry').fadeIn();
    } else {
      $('#n-sorry').fadeOut();
    }
});

//SHOW GERTY,
$('.css-typing2').on('click', function() {
    $('.italic-sam').fadeIn();
});

//SHOW AND NOW HOW DO U FEEL?
$('.italic-sam').on('click', function() {
    $('#n-container2').fadeOut();
    $('#p_now').fadeIn();
    $('.back').fadeIn();
});

}

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

// MOBILE VERTICAL
if (matchMedia('only screen and (max-height: 699px)').matches) {

  /* ::::::: INDEX ::::::: */

  // SHOW HOW DYOU IMG BLUR
  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 200) {
          $('#blur').fadeIn();
      } else {
          $('#blur').fadeOut();
      }
  });

  //
    var a = $("#n-invisible-bg1").offset().top;

    $(document).scroll(function(){
        if($(this).scrollTop() > a)
        {
            $('#n-black-lista2').css({'z-index': "6"});
        } else {
            $('#n-black-lista2').css({'z-index': "2"});
        }
    });

  //
    var b = $("#n-invisible-bg2").offset().top;

    $(document).scroll(function(){
        if($(this).scrollTop() > b)
        {
            $('#n-black-lista3').css({opacity: "1"});
            $('#n-white-txt2').css({opacity: "0"});
            $('#n-white-bg3').css({opacity: "1"});
            $('#n-black-txt1').css({opacity: "1"});
        } else {
            $('#n-black-lista3').css({opacity: "0"});
            $('#n-white-txt2').css({opacity: "1"});
            $('#n-white-bg3').css({opacity: "0"});
            $('#n-black-txt1').css({opacity: "0"});
        }
    });

  //SHOW GERTY,
  $('.css-typing2').on('click', function() {
      $('.italic-sam').fadeIn();
  });

  //SHOW AND NOW HOW DO U FEEL?
  $('.italic-sam').on('click', function() {
    $('#n-container2').fadeOut();
      $('#p_now').fadeIn();
      $('.back').fadeIn();
  });
}


// MOBILE VERTICAL
if (matchMedia('only screen and (max-height: 499px)').matches) {

  /* ::::::: INDEX ::::::: */

  // SHOW HOW DYOU FEEL TODAY
  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 230) {
          $('#p_how').fadeIn();
          $('#f1').delay(1000).fadeIn(500);
          $('#f2').delay(1000).fadeIn(1000);
          $('#f3').delay(1000).fadeIn(1500);
      } else {
          $('#p_how').fadeOut();
          $('#f1').fadeOut();
          $('#f2').fadeOut();
          $('#f3').fadeOut();
      }
  });

  // SHOW HOW DYOU IMG BLUR
  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 200) {
          $('#blur').fadeIn();
      } else {
          $('#blur').fadeOut();
      }
  });

}
