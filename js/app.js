(function() {
    'use strict';

    var app = angular.module('application', []);//ชื่อโมดูล, โมดูลที่เกี่ยวข้อง(จะกล่าวถึงในภายหลัง)

    app.controller('storeController' , function($scope){
        $scope.sushi = [
        {
          name: 'Maguro',
          price: 200,
          description: 'Fat Tuna',
          mfg : new Date('2016-03-25'),
          quantity:0,
          image:'images/maguro.jpg',
          canPurchase: false
        },{
          name:'California Roll',
          price:180,
          description: 'Rice roll with ebigo avocardo and sashimi',
          mfg : new Date('2016-03-24'),
          quantity:2,
          image:'images/california.jpg',
          canPurchase: true
        }
      ];

      $scope.purchase = function(item){
        if(item.quantity > 0){
          return true;
        }
        else {
          return false;
        }

      };

      $scope.clickAdd = function(item){
        item.quantity +=1;
      };
      $scope.cliclRemove = function (item) {
        if(item.quantity > 0 ){
          item.quantity -=1;
          return true;
        }else{
          return false;
        }
      };


    });


})(); // Best Practice For Javascript
