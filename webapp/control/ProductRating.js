sap.ui.define(
  [
    "sap/ui/core/Control",
    "sap/m/RatingIndicator",
    "sap/m/Label",
    "sap/m/Button",
  ],
  function (Control, RatingIndicator, Label, Button) {
    "use strict";

    return Control.extend("project1.control.ProductRating", {
      metadata: {
        properties: {
          value: { type: "int", defaultValue: 0 },
        },
        aggregations: {
          _rating: {
            type: "sap.m.RatingIndicator",
            multiple: false,
            visibility: "hidden",
          },
          _label: {
            type: "sap.m.Label",
            multiple: false,
            visibility: "hidden",
          },
          _button: {
            type: "sap.m.Button",
            multiple: false,
            visibility: "hidden",
          },
        },
        events: {
          change: {
            parameters: {
              value: { type: "int" },
            },
          },
        },
      },

      init() {
        const oRating = new RatingIndicator({
          value: this.getValue(),
          iconSize: "2rem",
          visualMode: "Half",
          liveChange: this._onRate.bind(this),
        });

        const oLabel = new Label({
          text: "{i18n>productRatingLabelInitial}",
        }).addStyleClass("sapUiSmallMargin");

        const oButton = new Button({
          text: "{i18n>productRatingButton}",
          press: this._onSubmit.bind(this),
        }).addStyleClass("sapUiTinyMarginTopBottom");

        this.setAggregation("_rating", oRating);
        this.setAggregation("_label", oLabel);
        this.setAggregation("_button", oButton);
      },

      _onRate(oEvent) {
        const fValue = oEvent.getParameter("value");
        this.setProperty("value", fValue, true);

        const oResourceBundle = this.getModel("i18n").getResourceBundle();

        this.getAggregation("_label").setText(
          oResourceBundle.getText("productRatingLabelIndicator", [
            fValue,
            oEvent.getSource().getMaxValue(),
          ])
        );
        this.getAggregation("_label").setDesign("Bold");
      },

      _onSubmit() {
        const oResourceBundle = this.getModel("i18n").getResourceBundle();

        this.getAggregation("_rating").setEnabled(false);
        this.getAggregation("_label").setText(
          oResourceBundle.getText("productRatingLabelFinal")
        );
        this.getAggregation("_button").setEnabled(false);

        this.fireEvent("change", {
          value: this.getValue(),
        });
      },

      renderer(oRM, oControl) {
        oRM.openStart("div", oControl);
        oRM.class("myAppDemoWTProductRating");
        oRM.openEnd();

        oRM.renderControl(oControl.getAggregation("_rating"));
        oRM.renderControl(oControl.getAggregation("_label"));
        oRM.renderControl(oControl.getAggregation("_button"));

        oRM.close("div");
      },
    });
  }
);
