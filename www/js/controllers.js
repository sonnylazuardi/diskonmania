angular.module('starter.controllers', [])

.controller('GadgetCtrl', function($scope, Gadgets) {
  $scope.gadgets = [];
  $scope.page = 1;
  $scope.remove = function(gadget) {
    Gadgets.remove(gadget);
    $scope.gadgets = Gadgets.all();
  }
  $scope.loadMore = function() {
    Gadgets.page($scope.page).then(function(data) {
      if (data) {
        $scope.gadgets = Gadgets.all();
        $scope.page++;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }
    });
  };
  $scope.getItemHeight = function(item, index) {
    return 70;
  };
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
})

.controller('FoodCtrl', function($scope, Foods) {
  $scope.foods = [];
  $scope.page = 1;
  $scope.remove = function(food) {
    Foods.remove(food);
    $scope.foods = Foods.all();
  }
  $scope.loadMore = function() {
    Foods.page($scope.page).then(function(data) {
      if (data) {
        $scope.foods = Foods.all();
        $scope.page++;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }
    });
  };
  $scope.getItemHeight = function(item, index) {
    return 70;
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
})

.controller('FlightCtrl', function($scope, Flights) {
  $scope.flights = [];
  $scope.page = 1;
  $scope.remove = function(flight) {
    Flights.remove(flight);
    $scope.flights = Flights.all();
  }
  $scope.loadMore = function() {
    Flights.page($scope.page).then(function(data) {
      if (data) {
        $scope.flights = Flights.all();
        $scope.page++;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }
    });
  };
  $scope.getItemHeight = function(item, index) {
    return 70;
  };
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
})

.controller('FashionCtrl', function($scope, Fashions) {
  $scope.fashions = [];
  $scope.page = 1;
  $scope.remove = function(fashion) {
    Fashions.remove(fashion);
    $scope.fashions = Fashions.all();
  }
  $scope.loadMore = function() {
    Fashions.page($scope.page).then(function(data) {
      if (data) {
        $scope.fashions = Fashions.all();
        $scope.page++;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }
    });
  };
  $scope.getItemHeight = function(item, index) {
    return 70;
  };
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
})

.controller('FoodDetailCtrl', function($scope, $stateParams, Foods) {
  $scope.food = Foods.get($stateParams.foodId);
})

.controller('GadgetDetailCtrl', function($scope, $stateParams, Gadgets) {
  $scope.gadget = Gadgets.get($stateParams.gadgetId);
})

.controller('FlightDetailCtrl', function($scope, $stateParams, Flights) {
  $scope.flight = Flights.get($stateParams.flightId);
})

.controller('FashionDetailCtrl', function($scope, $stateParams, Fashions) {
  $scope.fashion = Fashions.get($stateParams.fashionId);
});
