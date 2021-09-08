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
console.log("\n", "str =", str, "\n", "int =", int, "\n", "isOn =", isOn, "\n", "anyType =", anyType, "\n", "color = ", color, "\n", "arrNum =", arrNum, "\n", "arrStr =", arrStr, "\n", "tuple = ", tuple, "\n", "obj = ", user, "\n", "idStr = ", idStr, "\n", "idNum =", idNum, "\n", "coord = ", coord, "\n");
const a1 = 5;
const b1 = 7;
const eight = "8";
const calcFn = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Incorrect input!");
    }
    return a + b;
};
let A1 = "example";
const isFalsyFirst = (val) => {
    if (val) {
        return false;
    }
    return true;
};
const combine = (a, b, parameter) => {
    if (parameter === "as-number") {
        return Number(a) + Number(b);
    }
    if (parameter === "as-string") {
        return a.toString() + b;
    }
};
let A = "example";
const err = [406, "is not Falsy!"];
const isFalsySecond = (val) => {
    if (val) {
        return console.log("\n", `error code: ${err[0]}`, "\n", `message: ${err[1]}`);
    }
    return true;
};
isFalsySecond(A);
A = undefined;
console.log(isFalsySecond(A));
var RoleFirst;
(function (RoleFirst) {
    RoleFirst[RoleFirst["Admin"] = 1] = "Admin";
    RoleFirst[RoleFirst["Author"] = 2] = "Author";
    RoleFirst[RoleFirst["Moderator"] = 3] = "Moderator";
})(RoleFirst || (RoleFirst = {}));
const person = {
    name: "Jon",
    years: 19,
    sex: "men",
    role: RoleFirst[2],
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Author"] = "Author";
    Role["Moderator"] = "Moderator";
})(Role || (Role = {}));
const arrUsers = [
    {
        name: "Jon",
        years: 19,
        sex: "men",
        role: Role.Author,
    },
    {
        name: "Mango",
        years: 36,
        sex: "men",
        role: Role.Admin,
    },
    {
        name: "Poly",
        years: 27,
        sex: "men",
        role: Role.Moderator,
    },
];
const greetingMessage = (arr) => {
    arr.forEach((itm) => console.log(`My name is ${itm.name}. I am ${itm.role}`));
};
greetingMessage(arrUsers);
const calcFnSecond = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Incorrect input!");
    }
    return a + b;
};
const addAndHandle = (a, b, cb) => {
    const result = calcFnSecond(a, b);
    return cb(result);
};
addAndHandle(10, 20, (result) => {
    console.log(result);
});
const keepProcessing = () => {
    while (true) {
        console.log("I always does something and never ends.");
    }
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
const ukraine = "Ukraine";
const sweden = "Sweden";
const croatia = "Croatia";
const albania = "Albania";
const belgium = "Belgium";
const findCountriesByLetter = (s) => {
    if (s.includes("A")) {
        console.log(s);
    }
    else {
        console.log('there is no "A" in the name of this country');
    }
};
findCountriesByLetter(ukraine);
findCountriesByLetter(sweden);
findCountriesByLetter(croatia);
findCountriesByLetter(albania);
findCountriesByLetter(belgium);
const arrNum1 = [1, 2, 3];
const arrNum2 = [1, 2, 3, 4, 5, 6];
const arrTuple = [
    arrNum1,
    "number of elements in the array:",
];
const messageFromTuple = (tuple) => {
    return console.log(tuple[1], tuple[0].length);
};
messageFromTuple(arrTuple);
const without = (obj, type) => {
    const resultObj = {};
    for (const key in obj) {
        if (typeof obj[key] !== type) {
            resultObj[key] = obj[key];
        }
    }
    return resultObj;
};
console.log(without({ number: 47, string: "str", boolean: true }, "boolean"));
const isEmpty = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            return isEmpty(obj[key]);
        }
        if (obj[key] === undefined) {
            return true;
        }
        return false;
    }
    return true;
};
console.log(isEmpty({ a: { b: [] } }));
console.log(isEmpty({}));
console.log(isEmpty({ a: { b: [{ c: [] }] } }));
console.log(isEmpty({ a: { b: undefined } }));
console.log(isEmpty({ a: { b: [{ c: [1, 2, 3, 4] }] } }));
console.log(isEmpty({ a: { b: "lola" } }));
//# sourceMappingURL=typesAndEnums.js.map