// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionicLazyLoad', 'pasvaz.bindonce'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(2);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.flight', {
    url: '/flight',
    cache: false,
    views: {
      'tab-flight': {
        templateUrl: 'templates/tab-flight.html',
        controller: 'FlightCtrl'
      }
    }
  })
    .state('tab.flight-detail', {
      url: '/flight/:flightId',
      views: {
        'tab-flight': {
          templateUrl: 'templates/flight-detail.html',
          controller: 'FlightDetailCtrl'
        }
      }
    })

  .state('tab.food', {
      url: '/food',
      cache: false,
      views: {
        'tab-food': {
          templateUrl: 'templates/tab-food.html',
          controller: 'FoodCtrl'
        }
      }
    })
    .state('tab.food-detail', {
      url: '/food/:foodId',
      views: {
        'tab-food': {
          templateUrl: 'templates/food-detail.html',
          controller: 'FoodDetailCtrl'
        }
      }
    })

  .state('tab.fashion', {
      url: '/fashion',
      cache: false,
      views: {
        'tab-fashion': {
          templateUrl: 'templates/tab-fashion.html',
          controller: 'FashionCtrl'
        }
      }
    })
    .state('tab.fashion-detail', {
      url: '/fashion/:fashionId',
      views: {
        'tab-fashion': {
          templateUrl: 'templates/fashion-detail.html',
          controller: 'FashionDetailCtrl'
        }
      }
    })

  .state('tab.gadget', {
    url: '/gadget',
    cache: false,
    views: {
      'tab-gadget': {
        templateUrl: 'templates/tab-gadget.html',
        controller: 'GadgetCtrl'
      }
    }
  })
    .state('tab.gadget-detail', {
      url: '/gadget/:gadgetId',
      views: {
        'tab-gadget': {
          templateUrl: 'templates/gadget-detail.html',
          controller: 'GadgetDetailCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/food');

});
