angular.module('signForm', [])

.directive('signForm', function() {
  return {
    restrict: 'E',
    templateUrl:"views/form.html",
    scope: {
      isFocus: '=',
      qrcodeUrl: '@'
    },

    link: function (scope, element, attrs) {
      scope.$watch('qrcodeUrl', function(value) {
        console.log(value);
        scope.qrcodeUrl=value;

      });
      scope.$watch('isFocus', function(value) {
        console.log(value);
        scope.isFocus=value;

      });


    }
  };
});