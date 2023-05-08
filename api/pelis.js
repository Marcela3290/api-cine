$(document).ready(function() {
    $('#search-button').click(function() {
      var query = $('#movie-search').val();
      var api_key = '0b3218a8041a40a53d2a31f72fa6f753'; 
  
      var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + query;
  
      $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
          showResults(data);
        },
        error: function() {
          alert('Error al realizar la búsqueda de películas.');
        }
      });
    });
  
    function showResults(data) {
      var movies = data.results;
      var resultsDiv = $('.movie-results');
  
      resultsDiv.empty();
  
      if (movies.length === 0) {
        resultsDiv.append('<p>No se encontraron resultados para la búsqueda.</p>');
      } else {
        $.each(movies, function(index, movie) {
          var image = movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : 'https://via.placeholder.com/500x750?text=Imagen+no+disponible';
          resultsDiv.append('<div class="movie-result"><img src="' + image + '"></div>');
        });
      }
    }
  });
