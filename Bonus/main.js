$(document).ready(function() {
	console.log('ready,steady go!');

  $.ajax({
          url: 'api.php',
          success: function(data,stato){
  
            /* -- ciclo per estratte gli album -- */
            for (var i = 0; i < data.length; i++) {
              data[i];

              /* -- handlebars -- */
              var source = $("#template-handlebars").html();
              var template = Handlebars.compile(source);

              var context = {
                'img': data[i].poster,
                'title': data[i].title,
                'author': data[i].author,
                'year' : data[i].year
              };
              var html = template(context);

              $('.cds-container').append(html);
              /* -- / handlebars -- */

            } // fine for loop

          },
          error: function(richiesta,stato,error){
            $('.cds-container').append("Ops! C'è stato un errore");

          },
        });


});
