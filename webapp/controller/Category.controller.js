sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, History) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      onInit: function () {
        const oModel = new JSONModel("../clothing.json");
        this.getView().setModel(oModel);
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

      onCollapseAll() {
        const oTreeTable = this.byId("treeTable");

        oTreeTable.collapseAll();
      },

      onCollapseSelection() {
        const oTreeTable = this.byId("treeTable");

        oTreeTable.collapse(oTreeTable.getSelectedIndices());
      },

      onExpandFirstLevel() {
        const oTreeTable = this.byId("treeTable");

        oTreeTable.expandToLevel(1);
      },

      onExpandSelection() {
        const oTreeTable = this.byId("treeTable");

        oTreeTable.expand(oTreeTable.getSelectedIndices());
      },
    });
  }
);
