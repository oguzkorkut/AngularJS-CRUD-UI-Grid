'use strict';
crudApp.controller("KullaniciListesiExternalController",function($scope,crudService,$state,es3GridColumnDefs,uiGridGridOptions){
	
	var options = {
			enableFiltering: true,
		    enableColumnResizing: true,
		    enableRowSelection: false,
		    treeRowHeaderAlwaysVisible: false,
		    enableColumnMenus: true,
		    enableGridMenu : true
	};
	
	//#######################################################################################################//
	//#######################################################################################################//
	//#############################Kullanıcı Listesi Ekranı Grid#############################################//
	//#######################################################################################################//
	//#######################################################################################################//
	
	//Yayinlanmiş iş emirleri
	$scope.gridGridOptions = uiGridGridOptions.getUIGridOptions("data", options);
	
	$scope.gridGridOptions.columnDefs = es3GridColumnDefs.kullaniciListesiColumnDef();
	
	$scope.data = [];
	
	callGetKullanicilar();
	
	//#######################################################################################################//
	//#######################################################################################################//
	//#####################################Button Click Events###############################################//
	//#######################################################################################################//
	//#######################################################################################################//
	
	$scope.yeniKayit = function() {
		$state.go("kaydet");
	}
	
	//Tabloda bulunan kayıtların güncellenmesi silinmesi ve detayın görüntülenmesi
	$scope.sil = function($event, row){
		
		var promise = crudService.sil(row.entity.id);
		
		promise.then(function(response) {
			callGetKullanicilar();
		}, function(reason) {
			console.log("Hata:" + reason)
		});
	}
	
	/**
	 * Tablo üzerinde bulunan güncelle butonudur. Butona tıklandığı zaman kaydet template'inde bulunan güncelle butonu aktif oluyor
	 * kaydet butonu gizleniyor
	 */
	$scope.guncelle = function($event, row){
		$state.go("guncelle",{id:row.entity.id});
	}
	
	$scope.detay = function($event, row){
		$state.go("detay",{id:row.entity.id});
	}
	
	//#######################################################################################################//
	//#######################################################################################################//
	//#####################################Servis Çağrıları##################################################//
	//#######################################################################################################//
	//#######################################################################################################//
	
	function callGetKullanicilar(){
		var promise = crudService.kullaniciListesiGetir();
		
		promise.then(function(response) {
			$scope.data  = response;
		}, function(reason) {
			console.log("Hata:" + reason)
		});
	}
	
});