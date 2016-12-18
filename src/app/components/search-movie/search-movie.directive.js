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
  constructor(netflixService, toastr) {
    'ngInject';
    this.service = netflixService
    this.toastr = toastr
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
      .catch(() => {
        this.toastr.warning('I Can\'t find yout movie :(')
      });
  }
}
