
var pluto; 

window.onload = function() {
	  cartodb.createVis('map', 'https://sadra1.cartodb.com/api/v2/viz/3ed6da4e-f2c0-11e4-8364-0e0c41326911/viz.json').done(function (vis, layers){
	  	pluto = layers[1].getSubLayer(0);
	  });
	}


$( window ).load(function() {
        console.log( "window loaded" );
    
	

	$("#slider1").noUiSlider({
		start: 1,
		connect: "lower",
		range: {
			'min': 0,
			'max': 5
		},
		step:1
		
	});

	

	
	$("#slider1").on({

		set: function(){
			console.log ($("#slider1").val());
			var indicator1 = $("#slider1").val()
			pluto.setSQL("SELECT * FROM pluto where evac_s="+indicator1)



		}
	});


	$("#slider2").noUiSlider({
		start: 1,
		connect: "lower",
		range: {
			'min': 0,
			'max': 5
		},
		step:1
		
	});

	$("#slider3").noUiSlider({
		start: 1,
		connect: "lower",
		range: {
			'min': 0,
			'max': 5
		},
		step:1
		
	});

	$("#slider4").noUiSlider({
		start: 1,
		connect: "lower",
		range: {
			'min': 0,
			'max': 5
		},
		step:1
		
	});

	$("#slider5").noUiSlider({
		start: 1,
		connect: "lower",
		range: {
			'min': 0,
			'max': 5
		},
		step:1
		
	});

	$("#slider6").noUiSlider({
		start: 1,
		connect: "lower",
		range: {
			'min': 0,
			'max': 5
		},
		step:1
		
	});

	$("#slider7").noUiSlider({
		start: 1,
		connect: "lower",
		range: {
			'min': 0,
			'max': 5
		},
		step:1
		
	});
});