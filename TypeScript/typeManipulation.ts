/*
████████╗██╗░░░██╗██████╗░███████╗
╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝
░░░██║░░░░╚████╔╝░██████╔╝█████╗░░
░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░
░░░██║░░░░░░██║░░░██║░░░░░███████╗
░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝

███╗░░░███╗░█████╗░███╗░░██╗██╗██████╗░██╗░░░██╗██╗░░░░░░█████╗░████████╗██╗░█████╗░███╗░░██╗
████╗░████║██╔══██╗████╗░██║██║██╔══██╗██║░░░██║██║░░░░░██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
██╔████╔██║███████║██╔██╗██║██║██████╔╝██║░░░██║██║░░░░░███████║░░░██║░░░██║██║░░██║██╔██╗██║
██║╚██╔╝██║██╔══██║██║╚████║██║██╔═══╝░██║░░░██║██║░░░░░██╔══██║░░░██║░░░██║██║░░██║██║╚████║
██║░╚═╝░██║██║░░██║██║░╚███║██║██║░░░░░╚██████╔╝███████╗██║░░██║░░░██║░░░██║╚█████╔╝██║░╚███║
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░░░░░╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝

    В этом разделе ты узнаешь:
- что такое Generics и как с ними работать
- что такое манипуляторы типов и их виды
- keyof и typeof операторы
- как расширять существующие типы

Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://www.typescriptlang.org/docs/handbook/2/types-from-types.html <--
*/
const { log } = console;
/*  
        Задание 1 
    ~ Объявить несколько массивов разного типа
    ~ Написать функцию, которая будет возвращать рандомный элемент этого массива используя generic type
*/

const arrayOfNumber = [23, 267, 786, 1897];
const arrayOfString = ["TypeScript", "MacOS", "blabla", "2021"];
const arrayOfObject = [{ a: 23 }, { b: "Open" }, { c: true }];

const getRandomElementFromArray = <T>(array: T[]): T => {
  const element = array[Math.floor(Math.random() * array.length)];

  return element;
};

log(getRandomElementFromArray(arrayOfNumber));
log(getRandomElementFromArray(arrayOfString));
log(getRandomElementFromArray(arrayOfObject));

/*  
        Задание 2 
    ~ Функция myFilter повторяет функционал стандартной функции filter.
    ~ Раскомментировать код.
    ~ Добавить в функцию аннотацию типов с использованием generic type
    ~ Вывести результат работы функции в консоль
*/

const myFilter = <T>(arr: T[], predicate: (element: T) => boolean): T[] => {
  const result = [];

  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }

  return result;
};

// Пример использования
const res = myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0);
const res2 = myFilter(["foo", "hoge", "bar"], (str) => str.length >= 4);

log("\n", res, "\n", res2);

/*  
        Задание 3 
    ~ Раскомментировать код.
    ~ Определить тип Price
    ~ Написать пример и вывести в консоль результат использования функции
*/

type TPrice = {
  speed: "low" | "medium" | "high";
};
// @ts-ignore
const getPrice = (price: TPrice): number => {
  switch (price.speed) {
    case "low":
      return 50;

    case "medium":
      return 100;

    case "high":
      return 150;
  }
};

log(getPrice({ speed: "high" }));

/*  
        Задание 4
    ~ Раскомментировать код.
    ~ Определить и указать тип функции addAge, которая добавляет к объекту новое свойство age.
    ~ Вывести в консоль результат использования функции
*/

const addAge = <P>(obj: P): P => {
  const age = 36;

  return {
    ...obj,
    age,
  };
};

log(addAge({ firstName: "Yurii", lastName: "Berezynets" }));

/*  
        Задание 5
    ~ Раскомментировать код.
    ~ Определить и указать тип аргументов функции reducer.
    ~ action.type может быть только трех видов (increment, decrement, reset)
*/

type TActionAmount = {
  type: "increment" | "decrement";
  amount: number;
};

type TActionValue = {
  type: "reset";
  value: number;
};

type TAction = TActionAmount | TActionValue;

// type TAction = {
//   type: "increment" | "decrement" | "reset";
//   [key: string]: any;
// };

const reducer = (state: number, action: TAction): number => {
  switch (action.type) {
    case "increment":
      return state + action.amount;

    case "decrement":
      return state - action.amount;

    case "reset":
      return action.value;
  }
};

// Пример использования

log(
  reducer(100, {
    type: "increment",
    amount: 10,
  }) === 110
); //true

/*  
        Задание 6
    ~ Дано два типа Keys и Accessors
    ~ Получить из существующих типов тип Methods ("getName" | "getAddress" | "setName" | "setAddress") применяя Manipulation Types
*/

type Keys = "name" | "address";
type Accessors = "get" | "set";

type Methods = `${Accessors}${Capitalize<Keys>}`;

/*  
        Задание 7
    ~ Дан тип с опциональными свойствами
    ~ На основании типа User создать тип без опциональных свойств
    ~ Использовать модификаторы типа 
*/

type User = {
  id: string;
  name: string;
  age?: number;
  sex?: string;
};

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type oneMoreUser = Concrete<User>;
