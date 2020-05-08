$(document).ready(function() {
	console.log('ready,steady go!');

	/* ----DISPLAY COMPILATION ---*/
  $.ajax({
          url: 'api.php',
          success: function(data,stato){

	            /* -- ciclo per estratte gli album -- */
	            for (var i = 0; i < data.length; i++) {
								console.log(data[i]);
			            /* -- handlebars -- */
			            var source = $("#template-handlebars").html();
			            var template = Handlebars.compile(source);

			            var context = {
			              'img': data[i].poster,
			              'title': data[i].title,
			              'author': data[i].author,
			              'year' : data[i].year,
										'genere': data[i].genre
			            };
			            var html = template(context);

			            $('.cds-container').append(html);
			            /* -- / handlebars -- */

	            } // fine for loop


          }, //fine success
          error: function(richiesta,stato,error){
            $('.cds-container').append("Ops! C'è stato un errore");

          },
        }); // fine ajax


	/* ---- FILTRA PER GENERE ---*/

		$('#selection').on('click',
			function(){
				var selectedOption = $(this).children("option:selected").val();


				$('.genere').each(
					function(){
						var genere = $(this).text();
						var confronto = genere.includes(selectedOption);

						if  (selectedOption == 'all'){
						 $(this).parents('.cd').slideDown();
					 	} else if(confronto){
							$(this).parents('.cd').slideDown();
						} else {
							$(this).parents('.cd').slideUp();
						}
					}
				)

		}); // fine click







});
