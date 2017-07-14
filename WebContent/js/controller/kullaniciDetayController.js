'use strict';
crudApp.controller("DetayController",function($scope,crudService,$state,$stateParams){
	
	$scope.baslik = "Kayıt Detayı";
	
	$scope.detayMi = true;
	
	console.log("Detayı görüntülenecek kayıt id:" + $stateParams.id);
	
	var promise = crudService.kullaniciGetir($stateParams.id);
	
	promise.then(function(response) {
		$scope.kullanici = response;
	}, function(reason) {
		console.log("Hata:" + reason)
	});
	
	$scope.geriDon = function() {
		$state.go("kullaniciListesi");
	}
});