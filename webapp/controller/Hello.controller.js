sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast, JSONModel, History) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      onInit: function () {
        const oData = {
          recipient: {
            name: "this is my first sapui5 project",
          },
        };

        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },

      onShowName: function () {
        const name = this.getView().getModel().getProperty("/recipient/name");
        MessageToast.show(name);
      },

      async showDialog() {
        if (!this.dialog) {
          this.dialog = await this.loadFragment({
            name: "project1.view.HelloDialog",
          });
        }

        this.dialog.open();
      },

      closeDialog() {
        // this.byId("dialog").close();
        this.dialog.close();
      },

      gotoCategory() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("category", {}, true);
      },
    });
  }
);
