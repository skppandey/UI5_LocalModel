sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller) {
	"use strict";

	return Controller.extend("zmodel.zmodel.controller.View1", {
		onInit: function () {
			var employee = this.getOwnerComponent().getModel("newModel").getProperty("/employee");
			var department = this.getOwnerComponent().getModel("newModel").getProperty("/department");
		}
	});
});