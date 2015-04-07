

$(document).ready(function(){
	
	$('#load_data').show(),
	$('.timelineFlatPortfolio').show();
	$.ajax({
		url: "js/data.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			$.each(data['pruebas'] , function(i,el){
				
				// $('.timelineFlatPortfolio').append('<div class="item" data-id="'+el.id+'" data-description="'+el.id+'"><a class="image_rollover_bottom con_borderImage" data-description="ZOOM IN" href="'+el.imagen+'" rel="lightbox[timeline]"><img src="images/flat/default/1.jpg" alt=""/></a><h2>MAY, 4</h2><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc...</span><div class="read_more" data-id="'+el.id+'">Read more</div></div><div class="item_open" data-id="'+el.id+'" data-access="ajax-content.html"><div class="item_open_content"><img class="ajaxloader" src="images/timeline/loadingAnimation.gif" alt="" /></div></div>')

				$('.timelineFlatPortfolio').append('<div data-code="'+el.code+'" class="item" data-id="'+el.id+'" data-description="'+el.id+'"><a class="image_rollover_bottom con_borderImage" data-description="ZOOM IN" href="'+el.imagen+'" rel="lightbox[timeline]"><img src="'+el.imagen+'" alt=""/></a><h2>Fecha: '+el.id+'</h2><span>'+el.description+'</span><div class="read_more" data-id=""><a href="javascript:openWindows();">Detalle</a></div></div><div class="item_open" data-id="'+el.id+'" data-access="ajax-content.html"><div class="item_open_content"><img class="ajaxloader" src="images/timeline/loadingAnimation.gif" alt="" /></div></div>')
			})
		},
		complete: function(data){			

			$('.tl1').timeline({
				openTriggerClass : '.read_more',
				startItem : '08/06/2012',
				closeText : 'x',
				ajaxFailMessage: 'This ajax fail is made on purpose. You can add your own message here, just remember to escape single quotes if you\'re using them.'
			});
			$('.tl1').on('ajaxLoaded.timeline', function(e){
				var height = e.element.height()-60-e.element.find('h2').height();
				e.element.find('.timeline_open_content span').css('max-height', height).mCustomScrollbar({
					autoHideScrollbar:true,
					theme:"light-thin"
				});	
			});

			$('.read_more').click(function(){			

				var _id = $(this).closest('.item').attr('data-code');
				console.log(_id)
				$.ajax({
					url: "js/data.json",
					dataType: "json",
					success: function(data){
						var _fecha = data['pruebas'][_id].id;
						var _nombre = data['pruebas'][_id].nombre;
						var _descripcion = data['pruebas'][_id].description;
						var _imagen = data['pruebas'][_id].imagen;

						$('#fecha').val(_fecha).attr("disabled",true);
						$('#nombre').val(_nombre).attr("disabled",true);
						$('#descripcion').val(_descripcion).attr("disabled",true);
						$('#imagen').val(_imagen);

						// $('.timelineFlatPortfolio').append('<div class="timelineFlat  ventana"><h1>Vetana Modal</h1><div class="form"><div class="cerrar"><a href="javascript:closeWindows();"> cerrar X</a></div><h1>Información del Evento</h1><form><table><tr><td>fecha: </td><td><input type="text" name="fecha" id="fecha" value="'+_fecha+'"></td></tr><tr><td>Nombre: </td><td><input type="text" name="nombre" id="nombre"></td></tr><tr><td>Descripción: </td><td><input type="text" name="descripcion" id="descripcion"></td></tr><tr><td>Imagen: </td><td><img src="'+_imagen+'" alt="" id="imagen"/></td></tr><tr><td></td><td><input type="submit" valie="Ingresar"></td></tr></table></form></div></div>');
						$('#imagen').append('<img src="'+_imagen+'" alt="" />');
					}
				})				
			});

			$('.cerrar').click(function(){
				$.ajax({
					url: "js/data.json",
					dataType: "json",
					success: function(data){
						var _fecha = '';
						var _nombre = '';
						var _descripcion = '';
						var _imagen = '';

						$('#fecha').val(_fecha);
						$('#nombre').val(_nombre);
						$('#descripcion').val(_descripcion);
						$('#imagen').val(_imagen);
						
						$('#imagen').empty('<img />');
						console.log('se limpió');
					}
				});
			});
		},


		error: function(){
			console.log('No carga bien el Ajax --_--')
		}
	});

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
	// 		console.log('No carga bien el Ajax -_-')
	// 	}
	// })	
});