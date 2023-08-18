sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      formatter,
      onInit: function () {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });

        this.getView().setModel(oViewModel, "view");
      },
    });
  }
);
