jQuery.sap.registerModulePath('Button', 'Button');
sap.ui.define("zmodel.zmodel/custom/Button", [
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("zmodel.zmodel.controller.View1", {
			metadata: {
				properties: {
					"width": {
						type: "sap.ui.core.CSSSize",
						defaultValue: "100px"
					},
					"height": {
						type: "sap.ui.core.CSSSize",
						defaultValue: "100px"
					},
					"border-radius": {
						type: "sap.ui.core.CSSSize",
						defaultValue: "50%"
					},
					"border": {
						type: "sap.ui.core.CSSSize",
						defaultValue: "10px solid #5c9a1a"
					},
					"cursor": {
						type: "sap.ui.core.CSSSize",
						defaultValue: "pointer"
					},
					"background-color": {
						defaultValue: "#4CAF50"
					},
					"opacity": {
						defaultValue: ".6"
					},
					"transition": {
						defaultValue: ".3s"
					},
					"box-shadow": {
						defaultValue: "0 9px #999"
					},
					"text": {
						type: "string"
					}
				},
				aggregations: {},
				events: {
					"hover": {},
					"fuck": {},
					"press": {}
				}
			},
			onmouseover: function (evt) {
				// evt.toElement.style.opacity = "1"
				this.setOpacity("1");
				this.fireHover(evt);
			},
			onmousemove: function (evt) {
				// evt.toElement.style.opacity = "1"
				this.setOpacity("1");
			},
			onclick: function (evt) {
				// this.firePress(evt);
			this.fireFuck(evt);
		},
		onmouseout: function (evt) {
			// evt.toElement.style.opacity = "1"
			this.setOpacity(".6");
		},
		onmousedown:function(evt){
				evt.toElement.style.backgroundColor = "#ffff66";
				evt.toElement.style.boxShadow = "0 5px #666";
				evt.toElement.style.transform = "translateY(4px)";
		},
				onmouseup:function(evt){
				evt.toElement.style.backgroundColor = "#3e8e41";
				evt.toElement.style.boxShadow = "0 9px #999";
				evt.toElement.style.transform = "";
		},
		// onAfterRendering: function (evt) {
		// 	if (evt == "hover") {
		// 		this.renderer(oRM, oControl);
		// 	}

		init: function () {},
		renderer: function (oRM, oControl) {
			oRM.write("<div");
			oRM.writeControlData(oControl);
			// oRM.addStyle("opacity", oControl.getProperty('opacity'));
			// oRM.addStyle("width", oControl.getProperty('width'));
			// oRM.addStyle("height", oControl.getProperty('height'));
			// oRM.addStyle("border-radius", oControl.getProperty('border-radius'));
			// oRM.addStyle("border", oControl.getProperty('border'));
			oRM.writeStyles();
			oRM.write(">");
			oRM.write("<button type='button'");
			oRM.addStyle("width", oControl.getProperty('width'));
			oRM.addStyle("height", oControl.getProperty('height'));
			oRM.addStyle("border-radius", oControl.getProperty('border-radius'));
			oRM.addStyle("border", oControl.getProperty('border'));
			oRM.addStyle("cursor", oControl.getProperty('cursor'));
			// oRM.addStyle("active", oControl.getProperty('active'));
			oRM.addStyle("background-color", oControl.getProperty('background-color'));
			oRM.addStyle("opacity", oControl.getProperty('opacity'));
			oRM.addStyle("transition", oControl.getProperty('transition'));
			oRM.addStyle("box-shadow", oControl.getProperty('box-shadow'));
			oRM.writeStyles();
			oRM.write(">");
			oRM.write(oControl.getProperty('text'));
			oRM.write("</button>");
			oRM.write("</div>");

			// oRM.addClass("myAppDemoWTProductRating");
			// // oRM.writeClasses();
			// oRM.write(">");
			// oRM.renderControl(oControl.getAggregation("_rating"));
			// oRM.renderControl(oControl.getAggregation("_label"));
			// oRM.renderControl(oControl.getAggregation("_button"));
			// oRM.write("</div>");
		}
	});
});