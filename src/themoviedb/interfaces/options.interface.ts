import MovieDB = require('node-themoviedb');

export interface TheMovieDbOptions extends MovieDB.ConstructorOptions {
  API_KEY: string;
}
