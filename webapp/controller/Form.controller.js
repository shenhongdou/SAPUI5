sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/core/routing/History",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, ODataModel, History) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      onInit: function () {
        const oData = {
          ProductId: "1239102",
          Name: "Power Projector 4713",
          Category: "PR",
          CategoryName: "Projector",
          SupplierName: "Titanium",
          Description:
            "A very powerful projector with special features for Internet usability, USB",
          WeightMeasure: 1467,
          WeightUnit: "g",
          Price: "856.49",
          CurrencyCode: "EUR",
          Status: "Available",
          Quantity: 3,
          UoM: "PC",
          Width: 51,
          Depth: 42,
          Height: 18,
          DimUnit: "cm",
          MyBoolean: true,
          YourBoolean: true,
          ProductPicUrl:
            "https://ui5.sap.com/test-resources/sap/ui/documentation/sdk/images/HT-6100-large.jpg",
        };

        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },

      handleEditToggled(oEvent) {
        console.log(oEvent, "oEvent");
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
