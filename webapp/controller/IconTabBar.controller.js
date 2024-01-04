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

    return Controller.extend("project1.controller.IconTabBar", {
      onInit: function () {
        this.oRouter = this.getOwnerComponent().getRouter();

        this.oRouter.attachBeforeRouteMatched(this.onBeforeRouteMatched, this);
        this.oRouter.attachRouteMatched(this.onRouteMatched, this);
      },

      onBeforeRouteMatched: function (oEvent) {
        var oModel = this.getOwnerComponent().getModel();

        var sLayout = oEvent.getParameters().arguments.layout;
        console.log(
          oEvent.getParameters(),
          oEvent.getParameters().arguments,
          "arguments"
        );
        console.log(sLayout, "sLayout");
        // If there is no layout parameter, query for the default level 0 layout (normally OneColumn)
        // if (!sLayout) {
        //   var oNextUIState = this.getOwnerComponent()
        //     .getHelper()
        //     .getNextUIState(0);
        //   sLayout = oNextUIState.layout;
        // }

        // Update the layout of the FlexibleColumnLayout
        if (sLayout) {
          oModel.setProperty("/layout", sLayout);
        }
      },

      onRouteMatched: function (oEvent) {
        var sRouteName = oEvent.getParameter("name"),
          oArguments = oEvent.getParameter("arguments");

        // this._updateUIElements();

        // Save the current route name
        this.currentRouteName = sRouteName;
        this.currentProduct = oArguments.product;
        this.currentSupplier = oArguments.supplier;
      },

      _updateUIElements: function () {
        var oModel = this.getOwnerComponent().getModel();
        // var oUIState = this.getOwnerComponent().getHelper().getCurrentUIState();
        // oModel.setData(oUIState);
      },

      onBeforeRendering() {
        const scroll1 = this.byId("scroll1");
        const scroll2 = this.byId("scroll2");

        scroll1?.setHeight(window.innerHeight - 250 + "px");
        scroll2?.setHeight(window.innerHeight - 250 + "px");
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
    });
  }
);
