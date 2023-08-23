sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, History, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      onInit: function () {
        const oRouter = this.getOwnerComponent().getRouter();

        oRouter
          .getRoute("detail")
          .attachPatternMatched(this._onObjectMatched, this);
      },

      _onObjectMatched(oEvent) {
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
        console.log(sPreviousHash, "sPreviousHash");
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
    });
  }
);
