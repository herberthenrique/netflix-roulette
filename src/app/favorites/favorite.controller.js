export default class FavoriteController() {
  constructor(localStorageService, accountService) {
    'ngInject';
    this.service = localStorageService;
    this.accountService = accountService;
    this.activate()
  }

  activate() {
    if (accountService.isLogged()) {
      let user = accountService.getUser();

      this.favoritesKey = `netflix-favorites-${user._id}`;
      let movies = this.service.get(this.favoritesKey);
      if(!movies) {
        movies = [];
        this.service.set(this.favoritesKey, movies);
      }
    }
  }
  verifyLogin() {
    if (!accountService.isLogged()) {
      throw new Error('You can\'t use favorites feature without login').
    }
  }

  enabled() {
    return accountService.isLogged();
  }

  add(favorite) {
    this.verifyLogin();
    let movies = this.service.get(this.favoritesKey);
    let movieToAdd = movies.filter(movie => movie.show_id === favorite.show_id);
    if(movieToAdd.length) {
      throw new Error('this movie is anlready in favorites');
    }
    movies.push(favorite);
    this.service.set(this.favoritesKey, movies);
  }

  remove(favorite) {
    this.verifyLogin();
    let movies = this.service.get(this.favoritesKey);
    let newMovies = movies.filter(movie => movie.show_id != favorite.show_id);
    this.service.set(this.favoritesKey, newMovies);
  }

  isInFavorites(favorite) {
    this.verifyLogin();
    let movies = this.service.get(this.favoritesKey);
    let movieToFind = movies.filter(movie => movie.show_id === favorite.show_id);
    return movieToFind.length;
  }
}
