export function SearchDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/search-movie/search-movie.html',
    controller: SearchController,
    controllerAs: 'vm'
  };

  return directive;
}

class SearchController {
  constructor(netflixService, accountService, favoriteService, toastr) {
    'ngInject';
    this.service = netflixService
    this.toastr = toastr
    this.accountService = accountService;
    this.favoriteService = favoriteService;
    this.activate();
  }
  activate() {
    this.title = '';
    this.result = null;
    this.logged = this.accountService.isLogged();
  }

  search() {
    this.service.search(this.title)
      .then(data => {
        this.result = data
        this.isInFavorite = this.favoriteService.isInFavorites(this.result);
      })
      .catch(() => {
        this.toastr.warning('I Can\'t find yout movie :(')
      });
  }

  addToFavorites() {
    this.favoriteService.add(this.result);
    this.isInFavorite = true;
  }

  removeFromFavorites() {
    this.favoriteService.remove(this.result);
    this.isInFavorite = false;
  }
}
