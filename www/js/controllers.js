rescue.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('GovernmentContactsCtrl', function ($scope) {
  $scope.list = [
    {title: ""},
    {},
    {},
  ]

  $scope.title = "Government Contacts";

})
.controller('MedicalSitesCtrl', function ($scope) {
  $scope.list = [
    {title: ""},
    {},
    {},
  ]

  $scope.title = "Medical Sites";

})
.controller('EmergencyContactsCtrl', function ($scope) {
  $scope.list = [
    {title: ""},
    {},
    {},
  ]

  $scope.title = "Emergency Contacts";

})
.controller('SupplyCtrl', function ($scope) {
  $scope.list = [
    {title: ""},
    {},
    {},
  ]

  $scope.title = "Food and water supply";

})
.controller('ShelterSitesCtrl', function ($scope) {
  $scope.list = [
    {title: ""},
    {},
    {},
  ]

  $scope.title = "Shelter Sites";

})
.controller('HomeCtrl', function ($scope) {

})
