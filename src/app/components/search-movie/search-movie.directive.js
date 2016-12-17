export function SearchDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/search-movie/search-movie.html',
    controller: SearchController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class SearchController {
  constructor(netflixService) {
    'ngInject';
    this.service = netflixService
    this.activate();
  }
  activate() {
    this.title = '';
    this.result = null;
  }

  search() {
    this.service.search(this.title)
      .then(data => {
        this.result = data
      })
  }
}
