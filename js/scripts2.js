//Nao é necessario media queries nesta página.

/* ::::::: HAPPY ::::::: */

// OCULTAR FASE 1 (countdown time)
$('#h-Q1').on('click', function() {
  $(this).fadeOut(0);
  $('#h-G1a, #h-G1b').fadeIn(0); // carrega gifs
  $('#h-G1a, #h-G1b').delay(2000).fadeOut(0); // esconde gifs
  $('#h-Q2').fadeIn(0); // carrega próximo quadro
});

// OCULTAR FASE 2 (that's a lie)
$('#h-Q2').on('click', function() {
  $(this).fadeOut(0);
  $('#h-G2a, #h-G2b').fadeIn(0);
  $('#h-G2a, #h-G2b').delay(2500).fadeOut(0);
  $('#h-Q3').fadeIn(0);
});


// OCULTAR FASE 3 (is that what you think)
$('#h-Q3').on('click', function() {
  $(this).fadeOut(0);
  $('#h-G3a, #h-G3b').fadeIn(0);
  $('#h-G3a, #h-G3b').delay(2500).fadeOut(0);
  $('#h-Q4').fadeIn(0);
});

// OCULTAR FASE 4 (this memories arent your memories)
$('#h-Q4').on('click', function() {
  $(this).fadeOut(0);
  $('#h-G4a, #h-G4b').fadeIn(0);
  $('#h-G4a, #h-G4b').delay(2500).fadeOut(0);
  $('#h-Q5').fadeIn(0);
});

// OCULTAR FASE 5 (This are)
$('#h-Q5').on('click', function() {
  $(this).fadeOut(0);
  $('#h-Q6').fadeIn(0);

    // iniciar gif no momento do click em #h-Q5
    if ($('#h-Q6').find("img").attr("data-state") == "static") {
      $('#h-Q6').find("img").attr("src", "data/Q6.gif");
    } else {
      $('#h-Q6').find("img").attr("src", "data/Q6.gif");
    }

    $('#h-Q6').delay(6500).fadeOut(0);

    $('#p_how').hide().delay(6500).fadeIn();
    $('.back').delay(6500).fadeIn();

  });



  // ::::::: CHANGE ICONS ON HOVER :::::::
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

  $('.back').mouseenter (function() {
    $(this).find(".css-typing").fadeIn(500);
  });
  $('.back').mouseleave (function() {
    $(this).find(".css-typing").fadeOut(500);
  });
