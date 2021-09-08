"use strict";
let str = "hello rn";
let int = 85;
let isOn = true;
let anyType = 0;
anyType = "blabla";
const someFunction = () => {
    alert("msg");
};
var Color;
(function (Color) {
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
let color = Color.Yellow;
let tuple;
tuple = ["hello", 85, true];
const arrNum = [1, 2, 3];
const arrStr = ["1", "2", "3"];
const user = {
    firstName: "Yurii",
    lastName: "Berezynets",
};
let id;
id = 1;
id = "rn";
let idStr = "85";
let idNum = 85;
let coord = {
    x: 100,
    y: 450,
};
const myRootDiv = document.getElementById("root");
console.log("\n", "str =", str, "\n", "int =", int, "\n", "isOn =", isOn, "\n", "anyType =", anyType, "\n", "color = ", color, "\n", "arrNum =", arrNum, "\n", "arrStr =", arrStr, "\n", "tuple = ", tuple, "\n", "obj = ", user, "\n", "idStr = ", idStr, "\n", "idNum =", idNum, "\n", "coord = ", coord, "\n", "myRootDiv = ", myRootDiv);
//# sourceMappingURL=typesAndEnums.js.map