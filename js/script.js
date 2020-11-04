$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".icon").addClass("fa-arrow-down").removeClass("fa-arrow-right");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".icon").removeClass("fa-arrow-right").addClass("fa-arrow-down");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".icon").removeClass("fa-arrow-down").addClass("fa-arrow-right");
    });
});

//

let modalId = $('#image-gallery');

$(document)
  .ready(function () {
    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

//Filter Button
$(document).ready(function(){
  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "todo")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');          
      }
  });
});


//filtrar html

// $(document).ready(function(){

// 	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
// 	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

// 	// FILTRANDO PROFESORES  ============================================

// 	$('.category_item').click(function(){
// 		var catProf = $(this).attr('category');
// 		console.log(catProf);

// 		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
// 		$('.category_item').removeClass('ct_item-active');
// 		$(this).addClass('ct_item-active');

// 		// OCULTANDO PROFESORES =========================
// 		$('.prof-item').css('transform', 'scale(0)');
// 		function hideProf(){
// 			$('.prof-item').hide();
// 		} setTimeout(hideProf,400);

// 		// MOSTRANDO PROFESORES =========================
// 		function showProf(){
// 			$('.prof-item[category="'+catProf+'"]').show();
// 			$('.prof-item[category="'+catProf+'"]').css('transform', 'scale(1)');
// 		} setTimeout(showProf,400);
// 	});

// 	// MOSTRANDO TODOS LOS PROFESORES =======================

// 	$('.category_item[category="all"]').click(function(){
// 		function showAll(){
// 			$('.prof-item').show();
// 			$('.prof-item').css('transform', 'scale(1)');
// 		} setTimeout(showAll,400);
// 	});
// });
// //BUSCAR PROFESORES=================
// $(document).ready(function(){
//   $("#search_input").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#prof-list *").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

//boton activado
var header = document.getElementById("filtrado");
var btns = header.getElementsByClassName("btn-filtrado");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
var current = document.getElementsByClassName("activeprof");
current[0].className = current[0].className.replace(" activeprof", "");
this.className += " activeprof";
});
}


//FILTRADO================
(function(){
	$(document).ready(function(){
		$(".btn-filtrado").click(function(e){
			e.preventDefault();
			var filtro = $(this).attr("data-filter");

			if (filtro == "all") {
				$(".box-img").show(500);
			} else {
				$(".box-img").not("."+filtro).hide(500);
				$(".box-img").filter("."+filtro).show(500);
			}
		});

		$("ul li").click(function(){
			$(this).addClass("actProf").siblings().removeClass("actProf");
		});
	});
}())
//FIN FILTRADO============

//SLIDER===========
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});
//FIN SLIDER=======