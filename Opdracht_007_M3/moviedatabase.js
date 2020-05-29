let favoriteMovie = {
    title: "Inception",
    duration: 150,
    stars: ["Leonardo DiCaprio", "Ellen page", "Joseph Gordon-levitt"]
};

const movieInformation = function (title, duration, stars){
    console.log(favoriteMovie.title, "lasts for", favoriteMovie.duration, "minutes. Stars:", favoriteMovie.stars.join(','));
}

movieInformation(favoriteMovie);