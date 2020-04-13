sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"zmodel/zmodel/controller/BaseController",
	"sap/ui/core/UIComponent"
], function (Controller,JSONModel,BaseController,UIComponent) {
	"use strict";

	return BaseController.extend("zmodel.zmodel.controller.View1", {
		onInit: function () {
			var employee = this.getOwnerComponent().getModel("newModel").getProperty("/employee");
			var department = this.getOwnerComponent().getModel("newModel").getProperty("/department");
		},
		onPress:function(){
			var employee = this .getOwnerComponent().getModel("newModel").getProperty("/employee");
			var department = this.getOwnerComponent().getModel("newModel").getProperty("/department");
			var b = 5;
			var c = 10;
			var a = this.randomCalculations(c,b);
		}
	});
});