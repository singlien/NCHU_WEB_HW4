function hideAll(){
  var a = $('p.more1');
  var b = $('p.more2');
  var c = $('div.more3');

  a.hide();
  b.hide();
  c.hide();
}
function hidemd(){
    var m1d = $('#m1d');
    var m2d = $('#m2d');
    var m3d = $('#m3d');
    m1d.hide();
    m2d.hide();
    m3d.hide();
}
//more1 animation ->toggle()
$(document).ready(function() { 
	var p = $('p.more1'); 
	p.hide(); 

	$('#about').click(function() { 
		hideAll();
    p.toggle('slow'); 
	}); 
});
//more2 animation ->slideToggle()
$(document).ready(function() { 
	var p = $('p.more2'); 
	p.hide(); 

	$('#writer').click(function() { 
		hideAll();
    p.slideToggle('slow'); 
	}); 
});
//more3 animation ->show()
$(document).ready(function() { 
	var p = $('div.more3'); 
	p.hide(); 

	$('#movie').click(function() { 
		hideAll();
    p.show(); 
    hidemd();
	}); 

});

//m1d animation ->slideDown(), slideUp()
$(document).ready(function(){
  $("#m1").click(function(){
    if ( $('#m1d').is(":hidden")) {
    $('#m1d').slideDown('slow');
    } else {
    $('#m1d').slideUp('slow');
    }
    });
});

$(document).ready(function(){
  $("#m2").click(function(){
    if ( $('#m2d').is(":hidden")) {
    $('#m2d').slideDown('slow');
    } else {
    $('#m2d').slideUp('slow');
    }
  });
});
//m3d animation ->fadeIn(), fadeOut()
$(document).ready(function(){
  $("#m3").click(function(){
  $('#m3d').fadeToggle('slow');
  });
});

//head mouseenter out ->fadeTo()
$(document).ready(function(){
  $('#title').mouseout(function() {  
    $('#title').fadeTo('fast', 0.3);
  }).mouseenter(function() {  
    $('#title').fadeTo('fast', 1);  
  });
});

