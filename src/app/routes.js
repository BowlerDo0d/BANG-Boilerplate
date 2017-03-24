/* @ngInject */
function routing($stateProvider, $urlRouterProvider) {
  // Un-matched URL
  $urlRouterProvider.otherwise('/setup');

  // Setup the states
  $stateProvider
    .state('setup', {
      url: '/setup',
      template: require('./templates/setup.html')
    })
    .state('gulp-info', {
      url: '/gulp-info',
      template: require('./templates/gulp-info.html')
    })
    .state('about', {
      url: '/about',
      template: require('./templates/about.html')
    });
}

export default routing;
