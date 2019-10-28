var avasModule = angular.module("avasModule", ["ngRoute"]);
avasModule.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "html/landingPage.html"
      })
      .when("/land", {
        templateUrl: "html/homePage.html"
      })
      .when("/park", {
        templateUrl: "html/park.html"
      })
      .when("/park2", {
        templateUrl: "html/park2.html"
      })
      .otherwise({ redirectTo: "/home" });
  }
]);
