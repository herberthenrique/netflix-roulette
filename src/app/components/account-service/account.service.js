export default class AccountService {
  constructor($http, localStorageService, $resource, $state) {
    'ngInject'
    this.storage = localStorageService;
    this.url = 'https://fierce-mountain-93519.herokuapp.com/';
    //this.url = 'http://localhost:9000/';
    this.userKey = 'netflix_roulette-user';
    this.userKeyToken = 'netflix_roulette-token';
    this.http = $http;
    this.resource = $resource;
    this.state = $state
  }

  isLogged() {
    if (this.storage.get(this.userKeyToken)) {
      return true;
    }
    return false;
  }

  getUser() {
    return this.storage.get(this.userKey);
  }

  login(model) {
    this.http.post(`${this.url}auth/local`, model)
      .then(result => {
        let token = result.data.token;
        let req = {
          method: 'GET',
          url: `${this.url}api/user/me`,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        this.http(req).then(data => {
          this.saveUserInformations(data.data, token);
          this.state.go('home')
        })
      });
  }

  saveUserInformations(user, token) {
    this.storage.set(this.userKey, user);
    this.storage.set(this.userKeyToken, token);
  }

  logout() {
    this.storage.remove(this.userKey, this.userKeyToken);
  }

  createAccount(model) {
    return this.http.post(`${this.url}api/user`, model);
  }
}
