var myApp = angular.module("myApp" , []);
myApp.controller("myController", function($scope){
    console.log("in mycontroller");

$scope.newUser = {};
$scope.clickedUser = {};
$scope.message ="";


    $scope.users =[
        {username:"Sravan", email:"Sravan@gmail.com"},
        {username:"Naveen",  email:"Naveen@gmail.com"},
        {username:"Sumangth", email:"Sumangth@gmail.com"},
        {username:"Vijay", email:"Vijay@gmail.com"}
    ];
    
    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser ={};
        $scope.message ="New User Added Successfully";

    };

    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;

    };


    $scope.updateUser = function(){
    $scope.message ="User Updated Successfully";
    };

    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
        $scope.message ="User Deleted Successfully";
    };

    $scope.clearMessage = function(){
        $scope.message = "";
    };
});