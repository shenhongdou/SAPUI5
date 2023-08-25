sap.ui.define(
  ["sap/ui/model/SimpleType", "sap/ui/model/ValidateException"],
  function (SimpleType, ValidateException) {
    "use strict";

    return SimpleType.extend("project1.customType.mytype", {
      parseValue(sValue) {
        return sValue.replace(/-/, "");
      },

      validateValue(sValue) {
        if (!this._isNumberic(sValue)) {
          throw new ValidateException(sValue + "格式不合法！");
        }
      },

      formatValue(sValue) {
        const aDigits = sValue.split("");
        let sOutput = "";
        aDigits.forEach((d, index) => {
          if (index > 0 && index % 4 === 0) {
            sOutput += "-" + d;
          } else {
            sOutput += d;
          }
        });

        return sOutput;
      },

      _isNumberic(str) {
        if (typeof str !== "string") return false;

        return !isNaN(str) && !isNaN(parseFloat(str));
      },
    });
  }
);
