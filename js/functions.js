$(document).ready(function(){
	$('#load_data').show(),
	$('.timelineFlatPortfolio').show();
	$.ajax({
		url: "js/data.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			$.each(data['pruebas'] , function(i,el){
				console.log(el.nombre)
				

				$('.timelineFlatPortfolio').append('<div class="item" data-id="'+el.id+'" data-description="'+el.id+'"><a class="image_rollover_bottom con_borderImage" data-description="ZOOM IN" href="images/flat/portfolio/1.jpg" rel="lightbox[timeline]"><img src="images/flat/portfolio/1.jpg" alt="" /></a><div class="read_more" data-id="'+el.id+'">read_more</div></div><div class="item_open" data-id="'+el.id+'" data-access="ajax-content.html"><div class="item_open_content"><img class="ajaxloader" src="images/timeline/loadingAnimation.gif" alt="" /></div></div>')

			})

		},
		complete: function(){
			$('.tl3').timeline({
                openTriggerClass: '.read_more',
                startItem: '08/05/2012',
                closeText: 'x'
            });
            $('.tl3').on('ajaxLoaded.timeline', function(e) {
                console.log(e.element.find('.timeline_open_content span'));

                var height = e.element.height() - 60 - e.element.find('h2').height();
                e.element.find('.timeline_open_content span').css('max-height', height).mCustomScrollbar({
                    autoHideScrollbar: true,
                    theme: "light-thin"
                });
            });
		},
		error: function(){
			console.log('No carga bien el Ajax --_--')
		}
	})

	// $.ajax({
	// 	url: "js/informacion.json",
	// 	dataType: "json",
	// 	contentType: "application/json",
	// 	success: function(data){
	// 		// Lista toda la información
	// 		// $.each(data['informacion'], function(i, valor){
	// 		// 	var id = valor['infoespecifica']['id'];
	// 		// 	var nombre = valor['infoespecifica']['nombre'];
	// 		// 	var texto = valor['infoespecifica']['texto'];
	// 		// 	console.log(nombre);

				
	// 		// });
	// 	},		
	// 	error: function(){
	// 		console.log('No carga bien el Ajax --_--')
	// 	}
	// })

	
})