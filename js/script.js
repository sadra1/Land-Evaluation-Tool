
var pluto; 

window.onload = function() {
	  cartodb.createVis('map', 'https://sadra1.cartodb.com/api/v2/viz/10cfa7ea-f507-11e4-83ab-0e018d66dc29/viz.json').done(function (vis, layers){
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
			pluto.setSQL("SELECT pluto.the_geom_webmercator,pluto.cartodb_id,pluto.sbs_s,sum(schools.grade_code) * " + indicator1 + " as score FROM pluto as pluto JOIN schools ON ST_INTERSECTS(pluto.the_geom_webmercator,schools.the_geom_webmercator) GROUP BY pluto.cartodb_id")



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
