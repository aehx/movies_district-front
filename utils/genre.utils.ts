/**
 * @param arrayOfGenre the array of genre you want to give
 * @return the main genre of the movie
 */

export function whatGenreIsTheMovie(arrayOfGenre: number[]): string {
  let movieGenre = "";
  arrayOfGenre.forEach((element) => {
    switch (element) {
      case 28:
        movieGenre = "Action";
        break;
      case 12:
        movieGenre = "Adventure";
        break;
      case 16:
        movieGenre = "Animation";
        break;
      case 35:
        movieGenre = "Comedy";
        break;
      case 80:
        movieGenre = "Crime";
        break;
      case 99:
        movieGenre = "Documentary";
        break;
      case 18:
        movieGenre = "Drama";
        break;
      case 10751:
        movieGenre = "Family";
        break;
      case 14:
        movieGenre = "Fantasy";
        break;
      case 36:
        movieGenre = "History";
        break;
      case 27:
        movieGenre = "Horror";
        break;
      case 10402:
        movieGenre = "Music";
        break;
      case 9648:
        movieGenre = "Mystery";
        break;
      case 10749:
        movieGenre = "Romance";
        break;
      case 878:
        movieGenre = "Science Fiction";
        break;
      case 10770:
        movieGenre = "TV Movie";
        break;
      case 53:
        movieGenre = "Thriller";
        break;
      case 1075:
        movieGenre = "War";
        break;
      case 37:
        movieGenre = "Western";
        break;
    }
  });
  return movieGenre;
}
