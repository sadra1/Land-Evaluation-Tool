
var pluto; 
var accessible_codes ={
	1: 'within 10 to 15 minuets walking distance',
	2: 'within 5 to 10 minutes walking distance',
	3: 'less than 5 minutes walking distance'
}


window.onload = function() {

	  cartodb.createVis('map', 'https://sadra1.cartodb.com/api/v2/viz/b302ca64-16b4-11e5-bc95-0e853d047bba/viz.json').done(function (vis, layers){

	  	pluto = layers[1].getSubLayer(0);
	  	pluto.on('featureClick', function(e, latlng, pos, data, subLayerIndex) {
  			console.log("mouse over polygon with data: " + latlng);
  			lat = latlng[0];
  			lon = latlng[1];
  			console.log("here is lat: "+lat+" and here is lon: "+lon)
  			console.log("data is ",data)
  			var schooldist = data.schooldist
  			var pluto = data
  			var sql = new cartodb.SQL({ user: 'sadra1' });
				sql.execute("SELECT name_1,overall_gr, accessible, schooldist,  cartodb_id, the_geom, the_geom_webmercator FROM schools WHERE ST_Intersects( the_geom, ST_SetSRID(ST_POINT("+lon+","+lat+") , 4326)) and schooldist = "+schooldist)
  				.done(function(data) {
    				console.log(data.rows);
    				var schoolsTemplate = _.template($('#schoolsTemplate').html())
        			$('#schoolsContainer').html(schoolsTemplate(
        				{
        					data: data.rows,
        					code: accessible_codes,
        					pluto: pluto  


        				}  
        			))
  				})
		});

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

