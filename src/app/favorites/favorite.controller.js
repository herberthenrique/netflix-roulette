export default class FavoriteController {
  constructor(favoriteService) {
    'ngInject';
    this.service = favoriteService;
    this.activate();
  }

  activate() {
    this.getMovies();
  }

  getMovies() {
    this.favorites = this.service.getAll();
  }

  removeFromFavorites(movie) {
    this.service.remove(movie);
    this.getMovies();
  }


}
