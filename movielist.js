var movies = [{
        title: "Knives Out",
        rating: "4.5",
        hasWatched: true
    },

    {
        title: "1917",
        rating: "4.5",
        hasWatched: true
    },

    {
        title: "Ford vs Ferrari",
        rating: "3.5",
        hasWatched: false,
    },

    {
        title: "Jojo Rabbit",
        rating: "4.0",
        hasWatched: true,
    },
    {
        title: "Harley Quinn",
        rating: "3.0",
        hasWatched: false,
    },
]

function myMovies() {

    movies.forEach(function(movie) {
        var result = "You have ";
        if (movie.hasWatched) {
            result += "watched "

        } else {
            result += "not watched "
        }
        result += movie.title + " - "
        result += movie.rating + " stars"
        console.log(result)


    })

}