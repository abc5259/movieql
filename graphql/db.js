export let movies = [
  {
    id: 0,
    name: "Nicolas",
    score: 12,
  },
  {
    id: 1,
    name: "lee",
    score: 9,
  },
  {
    id: 2,
    name: "jae",
    score: 14,
  },
  {
    id: 3,
    name: "hun",
    score: 93,
  },
  {
    id: 4,
    name: "Nigoodcolas",
    score: 82,
  },
  {
    id: 5,
    name: "bac",
    score: 62,
  },
  {
    id: 6,
    name: "weather",
    score: 23,
  },
];

export const getMovies = () => {
  return movies;
};

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
