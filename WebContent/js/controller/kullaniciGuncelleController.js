'use strict';
crudApp.controller("GuncelleController",function($scope,crudService,$state,$stateParams){
	
	$scope.baslik = "Kayıt Güncelleme";
	$scope.buttonValue = "Güncelle";
	
	//Detay sayfasında inputların readonly görünmesi için eklendi
	$scope.detayMi = false;
	
	console.log("Güncellenecek kayıt id:" + $stateParams.id);
	
	var promiseKullaniciGetir = crudService.kullaniciGetir($stateParams.id);
	
	promiseKullaniciGetir.then(function(response) {
		$scope.kullanici  = response;
	}, function(reason) {
		console.log("Hata:" + reason)
	});
	
	/**
	 * Kaydet sayfasındaki güncelle butonu. Kaydın serviste bulunan değerini güncelliyor 
	 */
	$scope.submitForm = function () {
		if ($scope.kullaniciForm.$valid) {
			var promiseGuncelle = crudService.guncelle($scope.kullanici);
			
			promiseGuncelle.then(function(response) {
				$state.go("kullaniciListesi");
			}, function(reason) {
				console.log("Hata:" + reason)
			});
		}else{
			console.log("Form valid değil")
		}
		
	}
	
	$scope.geriDon = function() {
		$state.go("kullaniciListesi");
//		$window.history.back();	
	}
});