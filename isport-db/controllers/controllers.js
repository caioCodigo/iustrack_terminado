let app = angular.module('ListaUsuarios',[]);

app.controller('myCtrl', function($scope, UsuariosService, $http){
    $http({
        method : "GET",
        url : "http://localhost:3000/api/usuarios"
    }).then(function mySuccess(response) {
        
        console.log(response.data);
       $scope.usuarios = response.data;
        
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });

});