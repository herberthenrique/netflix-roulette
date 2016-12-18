export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'main'
  };

  return directive;
}

class NavbarController {
  constructor(accountService) {
    'ngInject';
    this.service = accountService;
    this.activate()
  }
  activate() {
    this.user = {};
    this.logged = this.service.isLogged();
    if(this.logged) {
      this.user = this.service.getUser();
    }
  }

  logout() {
    this.logged = false;
    this.user = {};
    this.service.logout();
  }
}
