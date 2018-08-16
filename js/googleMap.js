function initMap() {
    
    var coordinates = {lat: 50.456, lng: 30.500};
        			
    var map = new google.maps.Map(document.getElementById('map'), {
          			zoom: 15.2,
          			center: coordinates,
          			disableDefaultUI: true
        		});


	var styles = [
			         {
		    			"featureType": "water",
		    			"elementType": "geometry.fill",
		    			"stylers": [
		     				 {
		        				"color": "#CDC1BE"
		      				}
		    			]
		  			},
					 {
					    "featureType": "water",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      	{
					        	"color": "#522920"
					      	}
					    ]
					 },
					 {
					    "featureType": "road.highway",
    					"elementType": "geometry.fill",
    					"stylers": [
							      {
							        "color": "#EEEAE9"
							      }
					    ]
					 },
					{
		    			"featureType": "road.highway",
					    "elementType": "geometry.stroke",
					    "stylers": [
							      {
							        "color": "#D1C7C4"
							      }
					    ]
		  			},
					{
		    			"featureType": "road.highway",
					    "elementType": "labels.text.fill",
					    "stylers": [
							      {
							        "color": "#451910"
							      }
					    ]
		  			},
					{
		    		    "featureType": "road.highway",
					    "elementType": "labels.text.stroke",
					    "stylers": [
							      {
							        "color": "#E0D9D7"
							      }
					    ]
		  			},
		  			{
		    		    "featureType": "road.arterial",
					    "elementType": "geometry.fill",
					    "stylers": [
							      {
							        "color": "#FFFFFF"
							      }
					    ]
		  			},
		  			{
					    "featureType": "road.arterial",
					    "elementType": "geometry.stroke",
					    "stylers": [
							      {
							        "color": "#ECE8E7"
							      }
					    ]
		  			},
		  			{
		    		     "featureType": "road.arterial",
						 "elementType": "labels.text.fill",
						 "stylers": [
								  {
								    "color": "#714F47"
								  }
						    ]
		  			},
		  			{
		    		   "featureType": "road.arterial",
					   "elementType": "labels.text.stroke",
					   "stylers": [
							      {
							        "color": "#E9E3E2"
							      }
					    ]
		  			},
		  			{
						"featureType": "road.local",
						"elementType": "geometry.fill",
						"stylers": [
						      {
						        "color": "#FFFFFF"
						      }
						]
		  			},
		  			{
		  				"featureType": "road.local",
					    "elementType": "geometry.stroke",
					    "stylers": [
						      {
						        "color": "#E8E2E1"
						      }
					    ]
		  			},
		  			{
		  				"featureType": "road.local",
					    "elementType": "labels.text.fill",
					    "stylers": [
						      {
						        "color": "#66423A"
						      }
					    ]
		  			},
		  			{
					    "featureType": "road.local",
					    "elementType": "labels.text.stroke",
					    "stylers": [
						      {
						        "color": "#F5F3F2"
						      }
					    ]
		  			},





		  			{
		  				"featureType": "landscape.man_made",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#F3F1F0"
					      }
					    ]
		  			},		
		  			
		  			{
						"featureType": "landscape.man_made",
						"elementType": "geometry.stroke",
						"stylers": [
						      {
						        "color": "#F1EDEC"
						      }
						]
		  			},		
		  			
		  			{
						"featureType": "landscape.natural",
					    "elementType": "geometry.fill",
					    "stylers": [
						      {
						        "color": "#F3F0F0"
						      }
					    ]
		  			},		
		  			
		  			{
						"featureType": "landscape.natural",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#F3F0F0"
					      }
					    ]
		  			},
		  			{
					    "featureType": "poi.park",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#D8CFCD"
					      }
					    ]
					},
					  {
					    "featureType": "poi.park",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#6D4A42"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.attraction",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#714F48"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.business",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#E7E1E0"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.medical",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#D8CECC"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.school",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#EFEBEA"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.sports_complex",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#E0D8D6"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#562E26"
					      }
					    ]
					  },

					  {
					    "featureType": "poi",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#562E26"
					      }
					    ]
					  },



					  {
					    "featureType": "transit",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#4D2219"
					      }
					    ]
					  },


					{
					    "featureType": "poi",
					    "elementType": "labels.icon",
					    "stylers": [
					    		  {
							        "saturation": -100
							      },
							      {
							        "lightness": 40
							      }
					    ]
					  },
					    {
					    "featureType": "transit",
					    "elementType": "labels.icon",
					    "stylers": [
							      {
							        "saturation": -100
							      },
							      {
							        "lightness": 20
							      }
							    ]
					  }

	    ]
	map.setOptions({styles: styles});

}





