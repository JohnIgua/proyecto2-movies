const moviesDB = [
    {
        id: 1,
        title: 'Clean Code',
        description: 'Lorem Ipsum',
        year: 2008,
        director: 'Juanito Alimaña'
    }
]

let movieId = 1

const findAllMovies = async () => {
    return moviesDB
}

const findMovieById = async (id) => {
    const movie = moviesDB.find(movieItem => movieItem.id === id)
    return movie
}

const createMovie = async (movieObj) => {
    const newMovie = {

        id: movieId++,
        title: movieObj.title || 'Untitled',
        description: movieObj.description || 'Lorem Ipsum',
        year: movieObj.year || null,
        director: movieObj.director || 'Anonymous'
    }
    moviesDB.push(newMovie)
    return newMovie
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie
}