export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('account', {
      url: '/account',
      templateUrl: 'app/account/account.html',
      controller: 'AccountController',
      controllerAs: 'vm'
    })
    .state('favorite', {
      url: '/favorites',
      templateUrl: 'app/favorites/favorite.html',
      controller: 'FavoriteController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
