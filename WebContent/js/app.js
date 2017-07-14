var crudApp = angular.module("crudApp", [ "ui.router", "LocalStorageModule",
		'ui.grid', 'ui.grid.cellNav', 'ui.grid.edit', 'ui.grid.resizeColumns',
		'ui.grid.pinning', 'ui.grid.selection', 'ui.grid.moveColumns',
		'ui.grid.exporter', 'ui.grid.importer', 'ui.grid.grouping' ]);