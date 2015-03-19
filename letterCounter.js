angular.module('letterCounter', [])
  .controller('letterCtrl', ['$scope', function ($scope) {
    $scope.countLetters = function (str) {
      var result = {};
      for (var i = 0, char = str[i]; i < str.length; i += 1, char = str[i]) {
        result[char] = (result[char] || 0) + 1;
        console.log(result);
      }
      $scope.result = result;
      console.log(result);
      return result;
    };
  }])