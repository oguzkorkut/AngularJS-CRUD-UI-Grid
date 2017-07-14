'use strict';
crudApp.controller("KaydetController", function($scope,crudService,$state) {
	
	$scope.baslik = "Kullanıcı Kaydı";
	$scope.buttonValue = "Kaydet";

	//Detay sayfasında inputların readonly görünmesi için eklendi
	$scope.detayMi = false;
	
	//Kaydet sayfasındaki kullanici objesi
	$scope.kullanici = {};
	
	$scope.submitForm = function(){
		if ($scope.kullaniciForm.$valid) {
			var promise = crudService.kaydet($scope.kullanici);
			
			promise.then(function(response) {
				var id = response;
				console.log("Kaydedilen kullanici id:" + id);
				$state.go('kullaniciListesi');
			}, function(reason) {
				console.log("Hata:" + reason)
			});
			
		}else{
			console.log("Form valid değil");
		}
	}
	
	$scope.geriDon = function() {
		$state.go("kullaniciListesi");
//		$window.history.back();	
	}
});
