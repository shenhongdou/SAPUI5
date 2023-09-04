sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    // "project1/customType/mytype",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, History, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      onInit: function () {
        const oRouter = this.getOwnerComponent().getRouter();

        oRouter
          .getRoute("detail")
          .attachPatternMatched(this._onObjectMatched, this);

        this.getView().setModel(
          new JSONModel({
            name: "12345678901",
            name2: "",
            salesAmount: 12345.6789,
            currencyCode: "EUR",
          })
        );

        // 不需要注册也会进行校验，版本问题，高版本做了注册处理？
        //   const oMyTypeInput = this.byId("myTypeInput");
        //   sap.ui.getCore().getMessageManager().registerObject(oMyTypeInput, true);
      },

      _onObjectMatched(oEvent) {
        console.log(oEvent.getParameter("arguments").invoicePath, "path");
        this.getView().bindElement({
          path: `/${window.decodeURIComponent(
            oEvent.getParameter("arguments").invoicePath
          )}`,
          model: "invoice",
        });
      },

      onNavBack() {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteView1", {}, true);
        }
      },

      onRatingChange(oEvent) {
        const fValue = oEvent.getParameter("value");
        const oResourceBundle = this.getView()
          .getModel("i18n")
          .getResourceBundle();

        MessageToast.show(
          oResourceBundle.getText("ratingConfirmation", [fValue])
        );
      },

      onNameChange(oEvent) {
        // const oInput = oEvent.getSource();
        // const oBinding = oInput.getBinding("value");
        // const sValue = oInput.getValue();
        // let sValueState = "None";
        // let bValidationError = false;
        // try {
        //   oBinding.getType().validateValue(sValue);
        // } catch (error) {
        //   sValueState = "Error";
        //   bValidationError = true;
        // }
        // oInput.setValueState(sValueState);
      },
    });
  }
);
