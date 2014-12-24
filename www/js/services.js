angular.module('starter.services', [])

.factory('Foods', function($q, $http) {
  var foods = [];
  var last_page = 0;
  return {
    all: function() {
      return foods;
    },
    page: function(page) {
      var def = $q.defer();
      if (last_page >= page) {
        def.resolve(foods);
        return def.promise;  
      } else {
        last_page = page;
        
        $http.get('http://diskonmania.sonnylab.com/diskon/food-and-beverages/'+page).success(function(data) {
          data.forEach(function(item) {
            foods.push(item);
          });
          def.resolve(data);
        });
        return def.promise;  
      }
    },
    remove: function(food) {
      foods.splice(foods.indexOf(food), 1);
    },
    get: function(foodId) {
      for (var i = 0; i < foods.length; i++) {
        if (foods[i].id === parseInt(foodId)) {
          return foods[i];
        }
      }
      return null;
    }
  }  
})

.factory('Gadgets', function($q, $http) {
  var gadgets = [];
  var last_page = 0;
  return {
    all: function() {
      return gadgets;
    },
    page: function(page) {
      var def = $q.defer();
      if (last_page >= page) {
        def.resolve(gadgets);
        return def.promise;  
      } else {
        last_page = page;
        
        $http.get('http://diskonmania.sonnylab.com/diskon/elektronik-and-gadget-store/'+page).success(function(data) {
          data.forEach(function(item) {
            gadgets.push(item);
          });
          def.resolve(data);
        });
        return def.promise;  
      }
    },
    remove: function(gadget) {
      gadgets.splice(gadgets.indexOf(gadget), 1);
    },
    get: function(gadgetId) {
      for (var i = 0; i < gadgets.length; i++) {
        if (gadgets[i].id === parseInt(gadgetId)) {
          return gadgets[i];
        }
      }
      return null;
    }
  }  
})

.factory('Flights', function($q, $http) {
  var flights = [];
  var last_page = 0;
  return {
    all: function() {
      return flights;
    },
    page: function(page) {
      var def = $q.defer();
      if (last_page >= page) {
        def.resolve(flights);
        return def.promise;  
      } else {
        last_page = page;
        
        $http.get('http://diskonmania.sonnylab.com/diskon/flight-promo/'+page).success(function(data) {
          data.forEach(function(item) {
            flights.push(item);
          });
          def.resolve(data);
        });
        return def.promise;  
      }
    },
    remove: function(flight) {
      flights.splice(flights.indexOf(flight), 1);
    },
    get: function(flightId) {
      for (var i = 0; i < flights.length; i++) {
        if (flights[i].id === parseInt(flightId)) {
          return flights[i];
        }
      }
      return null;
    }
  }  
})

.factory('Fashions', function($q, $http) {
  var fashions = [];
  var last_page = 0;
  return {
    all: function() {
      return fashions;
    },
    page: function(page) {
      var def = $q.defer();
      if (last_page >= page) {
        def.resolve(fashions);
        return def.promise;  
      } else {
        last_page = page;
        
        $http.get('http://diskonmania.sonnylab.com/diskon/fashion/'+page).success(function(data) {
          data.forEach(function(item) {
            fashions.push(item);
          });
          def.resolve(data);
        });
        return def.promise;  
      }
    },
    remove: function(fashion) {
      fashions.splice(fashions.indexOf(fashion), 1);
    },
    get: function(fashionId) {
      for (var i = 0; i < fashions.length; i++) {
        if (fashions[i].id === parseInt(fashionId)) {
          return fashions[i];
        }
      }
      return null;
    }
  }  
})

.directive('imageonload', function() {
    return {
        restrict: 'A',
      
        link: function(scope, element) {
          element.on('load', function() {
            // Set visibility: true + remove spinner overlay
              element.removeClass('spinner-hide');
              element.addClass('spinner-show');
              element.parent().find('span').remove();
          });
          scope.$watch('ngSrc', function() {
            // Set visibility: false + inject temporary spinner overlay
              element.addClass('spinner-hide');
              // element.parent().append('<span class="spinner"></span>');
          });
        }
    };
});
