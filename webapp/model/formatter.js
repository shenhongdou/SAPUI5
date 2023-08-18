sap.ui.define(
  [],
  /**
   * provide app-view type models (as in the first "V" in MVVC)
   *
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   * @param {typeof sap.ui.Device} Device
   *
   * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
   */
  function () {
    "use strict";

    return {
      statusText: function (status) {
        switch (status) {
          case "A":
            return "New";
          case "B":
            return "In Progress";
          case "C":
            return "Done";
        }
      },
    };
  }
);
