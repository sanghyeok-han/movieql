let movies = [
  {
    id: 0,
    name: "Star Wars",
    score: 1,
  },
  {
    id: 1,
    name: "Avengers",
    score: 0,
  },
]

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id)
  return filteredPeople[0]
}

export const getMovies = () => movies

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score,
  }
  movies.push(newMovie)
  return newMovie
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id)
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies
    return true
  } else {
    return false
  }
}
