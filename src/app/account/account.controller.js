export class AccountController {
  constructor(accountService, $state) {
    'ngInject';
    this.service = accountService;
    this.state = $state;
    this.registerModel = {};
    this.loginModel = {};
  }

  createUser() {
    this.service.createAccount(this.registerModel)
      .then(result => {
        this.service.saveUserInformations(result.data.user, result.data.token);
        this.state.go('home');
      })
  }

  login() {
    this.service.login(this.loginModel);
  }

}
