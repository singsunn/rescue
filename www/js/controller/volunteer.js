rescue.controller('VolunteerCtrl', function($scope, $ionicActionSheet, $timeout) {

  // Triggered on a button click, or some other target
 $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);
  }

  $scope.volunteerList = [
    { 
        name: 'Sunny Singh',
        phone: 402-301-9137,
        email: 'sing@gmail.com',
        occupation: 'Doctor',
        location: 'Sanepa Basi',
        gender: 'M',
        description: 'MR handsome'
     },
     { 
        name: 'Sunny Singh',
        phone: 402-301-9137,
        email: 'sing@gmail.com',
        occupation: 'Doctor',
        location: 'Sanepa Basi',
        gender: 'M',
        description: 'MR handsome'
     },
     { 
        name: 'Sunny Singh',
        phone: 402-301-9137,
        email: 'sing@gmail.com',
        occupation: 'Doctor',
        location: 'Sanepa Basi',
        gender: 'M',
        description: 'MR handsome'
     },
     { 
        name: 'Sunny Singh',
        phone: 402-301-9137,
        email: 'sing@gmail.com',
        occupation: 'Doctor',
        location: 'Sanepa Basi',
        gender: 'M',
        description: 'MR handsome'
     }
  ];
})

.controller('VolunteerDetailstCtrl', function($scope, $stateParams) {
})
.controller('CreateVolunteerCtrl', function($scope, $stateParams) {
})