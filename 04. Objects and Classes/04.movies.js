function movies(arr) {
    let movies = [];
    for (let i = 0; i < arr.length; i++) {
        let movie = {};
        if (arr[i].includes('addMovie')) {
            let name = arr[i].split('addMovie ')[1];
            movie.name = name;
            movies.push(movie);
        } else if (arr[i].includes('directedBy')) {
            let [name, director] = arr[i].split(' directedBy ');
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (arr[i].includes('onDate')) {
            let [name, date] = arr[i].split(' onDate ');
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    }
    movies.forEach((movie) => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

movies(['addMovie Fast and Furious','addMovie Godfather','Inception directedBy Christopher Nolan','Godfather directedBy Francis Ford Coppola','Godfather onDate 29.07.2018','Fast and Furious onDate 30.07.2018','Batman onDate 01.08.2018','Fast and Furious directedBy Rob Cohen']); // {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.1972"} {"name":"Fast and Furious","director":"Rob Cohen","date":"23.05.2001"}
