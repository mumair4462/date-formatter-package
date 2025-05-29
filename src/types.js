"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormat = void 0;
var DateFormat;
(function (DateFormat) {
    DateFormat["short"] = "M/d/yy, h:mm a";
    DateFormat["medium"] = "MMM d, y, h:mm:ss a";
    DateFormat["long"] = "MMMM d, y, h:mm:ss a z";
    DateFormat["full"] = "EEEE, MMMM d, y, h:mm:ss a zzzz";
    DateFormat["shortDate"] = "M/d/yy";
    DateFormat["mediumDate"] = "MMM d, y";
    DateFormat["longDate"] = "MMMM d, y";
    DateFormat["fullDate"] = "EEEE, MMMM d, y";
    DateFormat["shortTime"] = "h:mm a";
    DateFormat["mediumTime"] = "h:mm:ss a";
    DateFormat["longTime"] = "h:mm:ss a z";
    DateFormat["fullTime"] = "h:mm:ss a zzzz";
})(DateFormat || (exports.DateFormat = DateFormat = {}));
