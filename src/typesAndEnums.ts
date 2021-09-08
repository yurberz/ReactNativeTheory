/*

████████╗██╗░░░██╗██████╗░███████╗░██████╗  ░█████╗░███╗░░██╗██████╗░  ███████╗███╗░░██╗██╗░░░██╗███╗░░░███╗░██████╗
╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝██╔════╝  ██╔══██╗████╗░██║██╔══██╗  ██╔════╝████╗░██║██║░░░██║████╗░████║██╔════╝
░░░██║░░░░╚████╔╝░██████╔╝█████╗░░╚█████╗░  ███████║██╔██╗██║██║░░██║  █████╗░░██╔██╗██║██║░░░██║██╔████╔██║╚█████╗░
░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░░╚═══██╗  ██╔══██║██║╚████║██║░░██║  ██╔══╝░░██║╚████║██║░░░██║██║╚██╔╝██║░╚═══██╗
░░░██║░░░░░░██║░░░██║░░░░░███████╗██████╔╝  ██║░░██║██║░╚███║██████╔╝  ███████╗██║░╚███║╚██████╔╝██║░╚═╝░██║██████╔╝
░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝╚═════╝░  ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  ╚══════╝╚═╝░░╚══╝░╚═════╝░╚═╝░░░░░╚═╝╚═════╝░

    В этом разделе ты узнаешь:
- что такое константы и переменные
- почему TypeScript является строго типизированным языком
- какие типы данных имеются в TypeScript и как с ними работать
- как проверить тип переменной
- что такое Enums и Tuple

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:
--> https://www.typescriptlang.org/docs/handbook/basic-types.html <--
--> https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases <--
*/

/*
        Задание 1
    ~ Объявить переменные ВСЕХ возможных типов и присвоить им значения.
    ~ Присвоить ранее объявленной переменной значение другого типа (Что будет в этом случае? Будет ли ошибка компиляции?)
    ~ Вывести в консоль значение каждой переменной с указанием ее имени (формат сообщения '<name> = <value>')
*/

// string, number, boolean, any, void = обычно используется для указания того, что функция не возвращает никакого значения.
let str: string = "hello rn";
// str = 2;  тип 'число' не может быть присвоен типу 'строка'
let int: number = 85;
let isOn: boolean = true;
let anyType: any = 0;
anyType = "blabla";
const someFunction = (): void => {
  alert("msg");
};

// перечисление, это способ указать более привычные имена набору числовых значений.
enum Color {
  Blue = 1,
  Yellow,
}
let color: Color = Color.Yellow;

// массив, каждому из элементов которого можно указать свой тип
let tuple: [string, number, boolean];
tuple = ["hello", 85, true];

// массив определенного типа
const arrNum: number[] = [1, 2, 3];
const arrStr: string[] = ["1", "2", "3"];

// объект
const user: object = {
  firstName: "Yurii",
  lastName: "Berezynets",
};

// union type = союз объединения образованный из двух или более других типов
let id: number | string;
id = 1;
id = "rn";

// aliases type = псевдоним типа
type TId = number | string;
let idStr: TId = "85";
let idNum: TId = 85;

// interfaces = разницв с псевдонимом - можно разширить
interface IPoint {
  x: number;
  y: number;
}
interface IPoint {
  z?: number;
}
let coord: IPoint = {
  x: 100,
  y: 450,
};

//Type assertion представляет модель преобразования значения переменной к определенному типу.
const myRootDiv = document.getElementById("root") as HTMLBodyElement;

console.log(
  "\n",
  "str =",
  str,
  "\n",
  "int =",
  int,
  "\n",
  "isOn =",
  isOn,
  "\n",
  "anyType =",
  anyType,
  "\n",
  "color = ",
  color,
  "\n",
  "arrNum =",
  arrNum,
  "\n",
  "arrStr =",
  arrStr,
  "\n",
  "tuple = ",
  tuple,
  "\n",
  "obj = ",
  user,
  "\n",
  "idStr = ",
  idStr,
  "\n",
  "idNum =",
  idNum,
  "\n",
  "coord = ",
  coord,
  "\n",
  "myRootDiv = ",
  myRootDiv
);

/*
        Задание 2
    ~ Написать функцию принимающую в качестве аргументов два числа, которая возвращает их сумму
    ~ Объявить три константы a = 5, b = 7, eight = '8'
    ~ Написать проверку типов аргументов функции и в случае передачи константы eight выводить ошибку "Incorrect input!"
*/

// const a = 5;
// const b = 7;
// const eight = "8";

// const calcFn = (a: number, b: number): number => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new Error("Incorrect input!");
//   }

//   return a + b;
// };

/*
        Задание 3
    ~ Объявить переменную A типа any и задать ей значение 'example'
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false
*/

// let A: any = "example";

// const isFalsy = (val: any) => {
//   if (val) {
//     return false;
//   }

//   return true;
// };

/*
        Задание 4
    ~ Написать функцию combine с аргументами, которые могут быть как типа number так и string.
    ~ Третим аргументом передаем параметр со значениями 'as-number' или 'as-string'.
    ~ При значении 'as-number' выводить сумму чисел, при 'as-string' объединение строк.
*/

// type TArg = number | string;

// const combine = (a: TArg, b: TArg, parameter: string) => {
//   if (parameter === "as-number") {
//     return Number(a) + Number(b);
//   }

//   if (parameter === "as-string") {
//     return a.toString() + b;
//   }
// };

/*
        Задание 5
    ~ Объявить переменную A типа any и задать ей значение 'example'. Объявить константу типа Tuple с кодом ошибки и ее текстом
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false
    ~ Если условие не выполняется вывести код и текст ошибки консоль
    ~ Проверить работу функции присвоив переменной А значение undefined
*/

// let A: any = "example";

// const err: [number, string] = [406, "is not Falsy!"];

// const isFalsy = (val: any) => {
//   if (val) {
//     return console.log(
//       "\n",
//       `error code: ${err[0]}`,
//       "\n",
//       `message: ${err[1]}`
//     );
//   }

//   return true;
// };

// isFalsy(A);
// A = undefined;
// console.log(isFalsy(A));

/*
        Задание 6
    ~ Создать объект person cо свойствами: имя, возраст, пол, роль (Администратор, Автор, Модератор). Например (Jon, 19 years, men, Author).
    ~ Для свойства Роль использовать enum.
    ~ Вывести в консоль название свойства и его значение. Каждое свойство на новой строке.

    !!!
*/

// enum Role {
//   Admin = 1,
//   Author,
//   Moderator,
// }

// const person: { [key: string]: any } = {
//   name: "Jon",
//   years: 19,
//   sex: "men",
//   role: Role[2],
// };

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

/*
        Задание 7
    ~ Перечислению (Enum) Роль с предыдущего задания присвоить текстовые значения.
    ~ Создать несколько объектов подобных объекту person с Задания 6 c разными ролями.
    ~ Написать функцию которая принимает массив объектов и выводит в консоль сообщения следующего вида "My name is {name}. I am {role}" для каждого объекта.

    !!!
*/

// enum Role {
//   Admin = "Admin",
//   Author = "Author",
//   Moderator = "Moderator",
// }

// type TUser = {
//   name: string;
//   years: number;
//   sex: string;
//   role: Role;
// };

// const arrUsers: TUser[] = [
//   {
//     name: "Jon",
//     years: 19,
//     sex: "men",
//     role: Role.Author,
//   },
//   {
//     name: "Mango",
//     years: 36,
//     sex: "men",
//     role: Role.Admin,
//   },
//   {
//     name: "Poly",
//     years: 27,
//     sex: "men",
//     role: Role.Moderator,
//   },
// ];

// const greetingMessage = (arr: TUser[]) => {
//   arr.forEach((itm) => console.log(`My name is ${itm.name}. I am ${itm.role}`));
// };

// greetingMessage(arrUsers);

/*
        Задание 8
    ~ Используйте функцию с Задания 2 для сложения двух чисел.
    ~ Написать функцию addAndHandle, которая будет возвращать результат вычисления в качестве Callback.
    ~ Явно указать тип возвращаемого значения для функций
    ~ Итоговый вызов функции должен иметь следующий вид:
        addAndHandle(10, 20, (result) => {
            console.log(result)
        })

*/

// const calcFn = (a: number, b: number): number => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new Error("Incorrect input!");
//   }

//   return a + b;
// };

// const addAndHandle = (a: number, b: number, cb: Function) => {
//   const result = calcFn(a, b);

//   return cb(result);
// };

// addAndHandle(10, 20, (result: number) => {
//   console.log(result);
// });

/*
        Задание 9
    ~ Написать функцию, с возвращаемым значением типа never
*/

//функция всегда выполняется и никогда не достигает конечной точки, потому что цикл while никогда не заканчивается.
// const keepProcessing = (): never => {
//   while (true) {
//     console.log("I always does something and never ends.");
//   }
// };

/*
        Задание 10
    ~ Создать вычисляемое перечисление с городами (Харьков, Киев, Львов, Одесса) и их почтовыми индексами.
    ~ Написать функцию. которая возвращает индекс города.
    ~ Вывести в консоль города с индексами.
*/

// enum Cities {
//   Kharkiv = "61000",
//   Kyiv = "01001",
//   Lviv = "79007",
//   Odesa = "65125",
// }

// type CitiesPostal = keyof typeof Cities;

// const getPostalCity = (city: CitiesPostal) => {
//   return Cities[city];
// };

// console.log(
//   "\n",
//   `Kharkiv: ${getPostalCity("Kharkiv")}`,
//   "\n",
//   `Kyiv: ${getPostalCity("Kyiv")}`,
//   "\n",
//   `Lviv: ${getPostalCity("Lviv")}`,
//   "\n",
//   `Odesa: ${getPostalCity("Odesa")}`
// );

/*
        Задание 11
    ~ Создай 5 строк с названием стран
    ~ Если в названии страны встречается буква А, выведи ее нзавание в консоль
*/

// const ukraine: string = "Ukraine";
// const sweden: string = "Sweden";
// const croatia: string = "Croatia";
// const albania: string = "Albania";
// const belgium: string = "Belgium";

// const findCountriesByLetter = (s: string) => {
//   if (s.includes("A")) {
//     // если стоит задача найти все совпадения на букву "a" без учета регистра, то еще нужно добавить toUpperCase
//     console.log(s);
//   } else {
//     console.log('there is no "A" in the name of this country');
//   }
// };

// findCountriesByLetter(ukraine);
// findCountriesByLetter(sweden);
// findCountriesByLetter(croatia);
// findCountriesByLetter(albania);
// findCountriesByLetter(belgium);

/*
        Задание 12
    ~ Объявить несколько массивов типа number и заполнить их разным количеством элементов.
    ~ Объявить Tuple в который можно передать любой из объявленных массивов и текстовое значение.
    ~ Создать функцию в качестве аргумента которой созданный Tuple. Вывести в консоль текстовое значение из Tuple и количество элементов массива цифр

    !!!
*/

// const arrNum1: number[] = [1, 2, 3];
// const arrNum2: number[] = [1, 2, 3, 4, 5, 6];

// const arrTuple: [number[], string] = [
//   arrNum1,
//   "number of elements in the array:",
// ];

// const messageFromTuple = (tuple: typeof arrTuple) => {
//   return console.log(tuple[1], tuple[0].length);
// };

// messageFromTuple(arrTuple);

/*
        Задание 13
    ~ Написать метод without, который будет принимать объект со свойствами разных типов и тип.
    ~ Метод without должен вернуть копию объекта, но уже без свойств переданного типа .
*/

// type TObj = {
//   [key: string]: any;
// };

// const without = (obj: TObj, type: string) => {
//   const resultObj: TObj = {};

//   for (const key in obj) {
//     if (typeof obj[key] !== type) {
//       resultObj[key] = obj[key];
//     }
//   }

//   return resultObj;
// };

// console.log(without({ number: 47, string: "str", boolean: true }, "boolean"));

/*
        Задание 14
    ~ Написать функцию isEmpty, которая проверяет пустой ли объект, независимо от его вложенности. Должен венуть true для объектов { a: { b: undefined }, { a: { b: [] } }, {}, { a: { b: [ { c: [] } ] } }

    !!!
*/

// const isEmpty = (obj: { [key: string]: any }): boolean => {
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       return isEmpty(obj[key]);
//     }

//     if (obj[key] === undefined) {
//       return true;
//     }

//     return false;
//   }

//   return true;
// };

// console.log(isEmpty({ a: { b: [] } }));
// console.log(isEmpty({}));
// console.log(isEmpty({ a: { b: [{ c: [] }] } }));
// console.log(isEmpty({ a: { b: undefined } }));
// console.log(isEmpty({ a: { b: [{ c: [1, 2, 3, 4] }] } }));
// console.log(isEmpty({ a: { b: "lola" } }));
