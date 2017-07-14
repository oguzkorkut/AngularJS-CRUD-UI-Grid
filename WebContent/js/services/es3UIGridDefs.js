'use strict';
crudApp.factory("es3GridColumnDefs", function() {
	
	
	function kullaniciListesiColumnDef() {
		var columDefs =  [
  		    { name:'id',displayName:"Id", width:50 ,type:'number', enableCellEdit : false, sort: { direction: 'asc', priority: 0 }},
  		    { name:'adi', displayName:"Adi",width:250,cenableCellEdit : false},
  		    { name:'soyadi', displayName:"Soyadi",width:250, cenableCellEdit : false},
  		    { name:'ePosta', displayName:"E-Posta",width:350, cenableCellEdit : false},
  		    { name:'crud', displayName:"",width:200, enableCellEdit : false, 
  		    	cellTemplate:'<div class="ui-grid-cell-contents">' +
	  		    		'<button title="--" class="btn btn-link btn-xs" ' +
			    		 ' ng-click="grid.appScope.sil($event, row)" style="margin: auto;width: 33%;color: red">Sil'+
			    		'</button> |' +
			    		'<button title="--" class="btn btn-link btn-xs" ' +
			    		 ' ng-click="grid.appScope.guncelle($event, row)" style="margin: auto;width: 33%;color: green">Güncelle'+
			    		'</button> |' +
			    		'<button title="--" class="btn btn-link btn-xs" ' +
			    		 ' ng-click="grid.appScope.detay($event, row)" style="margin: auto;width: 33%;color: blue">Detay'+
			    		'</button>' +
		    		'</div>'
		    },
  		  ];
		return columDefs;
	}
	
	
	return {
		kullaniciListesiColumnDef:kullaniciListesiColumnDef
	};
});

crudApp.factory("uiGridGridOptions", function() {
	
	var gridOptions = {};
	
	gridOptions["enableCellEditOnFocus"] = false;
	gridOptions["enableColumnResizing"] = true;
	gridOptions["enableFiltering"] = false;
	gridOptions["enableGridMenu"] = true;
	gridOptions["showGridFooter"] = true;
	gridOptions["showColumnFooter"] = true;
	gridOptions["fastWatch"] = false;
	gridOptions["enableRowSelection"] = false;
	gridOptions["multiSelect"]  = false;
	gridOptions["selectWithCheckboxOnly"]= false;
	gridOptions["enableFullRowSelection"]= false;
	
	gridOptions["paginationPageSizes"]=[15, 25, 35];
	gridOptions["paginationPageSize"]=15;
	
	
	function getDefaultUIGridOptions(dataSetName) {
		gridOptions["data"] = dataSetName;
		
		return angular.copy(gridOptions);
	}
	
	function getUIGridOptions(dataSetName,options){
		gridOptions["data"] = dataSetName;
		
		gridOptions["enableCellEditOnFocus"] = typeof options["enableCellEditOnFocus"] != undefined ? options["enableCellEditOnFocus"] :  false;
		gridOptions["enableColumnResizing"] = typeof options["enableColumnResizing"] != undefined ? options["enableColumnResizing"] :  true;
		gridOptions["enableFiltering"] = typeof options["enableFiltering"] != undefined ? options["enableFiltering"] : false;
		gridOptions["enableGridMenu"] = typeof options["enableGridMenu"] != undefined ? options["enableGridMenu"] :  true;
		gridOptions["showGridFooter"] = typeof options["showGridFooter"] != undefined ? options["showGridFooter"] :  true;
		gridOptions["showColumnFooter"] = typeof options["showColumnFooter"] != undefined ? options["showColumnFooter"] :  true;
		gridOptions["fastWatch"] = typeof options["fastWatch"] != undefined ? options["fastWatch"] :  false;
		gridOptions["enableRowSelection"] = typeof options["enableCellEditOnFocus"] != undefined ? options["enableCellEditOnFocus"] :  false;
		gridOptions["multiSelect"]  = typeof options["multiSelect"] != undefined ? options["multiSelect"] :  false;
		gridOptions["selectWithCheckboxOnly"]= typeof options["selectWithCheckboxOnly"] != undefined ? options["selectWithCheckboxOnly"] :  false;
		gridOptions["enableFullRowSelection"]= typeof options["enableFullRowSelection"] != undefined ? options["enableFullRowSelection"] :  false;
		gridOptions["enableExpandableRowHeader"]= typeof options["enableExpandableRowHeader"] != undefined ? options["enableExpandableRowHeader"] :  false;
		
		
		return angular.copy(gridOptions);
	}
	
	return {
		getDefaultUIGridOptions : getDefaultUIGridOptions,
		getUIGridOptions : getUIGridOptions
	};
});
