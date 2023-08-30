sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      formatter,
      onInit: function () {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });

        this.getView().setModel(oViewModel, "view");
      },

      onFilterInvoice(oEvent) {
        const aFilter = [];
        const sQuery = oEvent.getParameter("query");

        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }

        const oList = this.byId("list");
        const oBinding = oList.getBinding("items");

        oBinding.filter(aFilter);
      },

      onPress: function (oEvent) {
        const oRouter = this.getOwnerComponent().getRouter();
        const oItem = oEvent.getSource();

        const invoicePath = window.encodeURIComponent(
          oItem.getBindingContext("invoice").getPath().substr(1)
        );

        oRouter.navTo("detail", {
          invoicePath,
        });
      },

      productListFactory(sid, oContext) {
        const Quantity = oContext.getProperty("Quantity");
        const Discount = oContext.getProperty("Discount");

        let oUIControl;

        if (Quantity < 10 && Discount) {
          oUIControl = this.byId("productSimple").clone(sid);
        } else {
          oUIControl = this.byId("productExtended").clone(sid);

          if (Quantity < 1) {
            oUIControl.addAttribute(
              new ObjectAttribute({
                text: {
                  path: "i18n>outOfStock",
                },
              })
            );
          }
        }

        return oUIControl;
      },
    });
  }
);
