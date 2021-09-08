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
const getPostalCity = (city) => {
    if (city === "Kharkiv") {
        return 61000;
    }
    if (city === "Kyiv") {
        return 1001;
    }
    if (city === "Lviv") {
        return 79007;
    }
    if (city === "Odesa") {
        return 65125;
    }
};
var Cities;
(function (Cities) {
    Cities[Cities["Kharkiv"] = getPostalCity("Kharkiv")] = "Kharkiv";
    Cities[Cities["Kyiv"] = getPostalCity("Kyiv")] = "Kyiv";
    Cities[Cities["Lviv"] = getPostalCity("Lviv")] = "Lviv";
    Cities[Cities["Odesa"] = getPostalCity("Odesa")] = "Odesa";
})(Cities || (Cities = {}));
console.log("\n", `Kharkiv: ${Cities.Kharkiv}`, "\n", `Kyiv: ${Cities.Kyiv}`, "\n", `Lviv: ${Cities.Lviv}`, "\n", `Odesa: ${Cities.Odesa}`);
//# sourceMappingURL=typesAndEnums.js.map