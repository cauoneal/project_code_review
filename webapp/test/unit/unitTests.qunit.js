/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/br/code_review/project_code_review/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});