export default class NetflixService {
  constructor($resource) {
    'ngInject';
    this.url = 'http://netflixroulette.net/api/api.php';
    this.service = $resource(this.url);
  }
  search(title) {
    return this.service.get({ 'title': title }).$promise
  }
}
