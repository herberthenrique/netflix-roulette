/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { SearchDirective } from '../app/components/search-movie/search-movie.directive';
import NetflixService from '../app/components/netflix-roulette/netflix.service';

angular.module('netflixRoulette', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('netflixService', NetflixService)
  .directive('searchMovie', SearchDirective)
  .controller('MainController', MainController)
