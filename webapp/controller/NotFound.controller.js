sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
  function (Controller, History) {
    "use strict";
    return Controller.extend("sap.ui5.walkthrough.controller.NotFound", {
      onInit: function () {},

      back() {
        const oHistory = History.getInstance();
        const sPreviewsHash = oHistory.getPreviousHash();

        if (sPreviewsHash === undefined) {
          window.history.go(-1);
        } else {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteView1", {}, true);
        }
      },
    });
  }
);
