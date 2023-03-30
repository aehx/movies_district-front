import { TMDBMovieData } from "../typescript/interface/movie.interface";
/**
 *
 * @param array an Array of object
 * @returns Random movie in this array
 */

export function setRandomMovie(array: TMDBMovieData[] | []) {
  if (array) {
    const randomNumber = Math.floor(Math.random() * array?.length);
    const suggestMovie = array
      ?.map((el) => el)
      .splice(
        randomNumber === array?.length ? randomNumber - 1 : randomNumber,
        1
      );
    return suggestMovie && suggestMovie[0];
  }
}
