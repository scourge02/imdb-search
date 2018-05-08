$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();

        var searchTerm = $('#search').val();

        var searchUrl = "http://www.omdbapi.com/?apikey=90d4b10a&s=" + searchTerm;
        console.log(searchTerm);
        console.log(searchUrl);

        $.ajax({
            url: searchUrl,
            method: 'GET',
            success: function(response) {
                console.log(response);
                showResults(response);

            }
        });
    });
});

function showResults(results) {
    console.log('Showing results');
    console.log(results);

    $("#movies").empty();

    results.Search.forEach(function(data) {
        $('#movies').append("<img src=" + data.Poster
             + ">");
              $('#movies').append("<div>" + data.Year + "</div>");
              $('#movies').append("<div>" + data.Title + "</div>");
    })
 
}










