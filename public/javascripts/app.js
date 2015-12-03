angular.module('api', ['ui.router', 'ngAnimate'])
    .directive('loading', [

        function() {
            return {
                restrict: 'EA',
                link: function(scope, iElement, iAttrs) {
                    var html = '<div class="sk-circle"><div class="sk-circle1 sk-child"></div> <div class="sk-circle2 sk-child"></div> <div class="sk-circle3 sk-child"></div>' +
                        '<div class="sk-circle4 sk-child"></div> <div class="sk-circle5 sk-child"></div> <div class="sk-circle6 sk-child"></div> ' +
                        '<div class="sk-circle7 sk-child"></div> <div class="sk-circle8 sk-child"></div> <div class="sk-circle9 sk-child"></div> ' +
                        '<div class="sk-circle10 sk-child"></div> <div class="sk-circle11 sk-child"></div> <div class="sk-circle12 sk-child"></div> </div>';
                    iElement.html(html);
                }
            };
        }
    ])
    .controller('homeCtrl', ['$scope', '$http',

        function($scope, $http) {
            angular.extend($scope, {
                getHostDetails: function() {
                    return window.location.protocol +'//'+ window.location.host;
                },
                copyLink: function(item) {
                    return prompt('Copy API Link', $scope.getHostDetails() + item);
                },
                openLink: function(item) {
                    window.location.href = ($scope.getHostDetails() + item);
                }
            });
            $scope.clear = function() {
                $scope.searchKey = '';
                $scope.$apply();
            }
            $("#searchKey").keyup(function(key) {
                if (key.keyCode === 27) {
                    $scope.clear();
                }
            });

            $scope.more = function(index) {
                $("#li_" + index).slideToggle(1000);
                // $scope.routes[index].show = $scope.routes[index].show ? false : true;
            }
            $scope.getRouteMethod = function(item) {
                for (var key in item) {
                    return key.toUpperCase();
                }
            }
            $http.get('/api/routes', {})
                .then(function(result) {
                    $scope.routes = result.data;
                    $scope.loading = true;
                })
                .catch(function(error) {
                    console.log(error);
                })
        }
    ]);