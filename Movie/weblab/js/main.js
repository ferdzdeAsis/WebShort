$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    getSeries(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com?s=' + searchText + "&apikey=7b723748")
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Details</a>
            </div>
          </div>
        `;
      });

      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
function liveSearch(searchText) {
  
}

function getSeries(searchText) {
  axios.get('http://www.omdbapi.com?s=' + searchText + "&apikey=7b723748")
    .then((response) => {
      console.log(response);
      let series = response.data.Search;
      let output = '';
      $.each(series, (index, series) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${series.Poster}">
              <h5>${series.Title}</h5>
              <a onclick="seriesSelected('${series.imdbID}')" class="btn btn-primary" href="#">Details</a>
            </div>
          </div>
        `;
      });

      $('#series').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}


function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function seriesSelected(id) {
  sessionStorage.setItem('seriesId', id);
  window.location = 'series.html';
  return false;
}

function getMovie() {
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com?i=' + movieId + "&apikey=7b723748")
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output = `
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Description</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="youtube api" class="btn btn-default">Watch Trailer</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;

      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getSeries() {
  let seriesId = sessionStorage.getItem('seriesId');

  axios.get('http://www.omdbapi.com?i=' + seriesId + "&apikey=7b723748")
    .then((response) => {
      console.log(response);
      let series = response.data;

      let output = `
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${series.Title}</h2>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Description</h3>
            ${series.Plot}
            <hr>
            <a href="http://imdb.com/title/${series.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="youtube api" class="btn btn-default">Watch Trailer</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;

      $('#series').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}