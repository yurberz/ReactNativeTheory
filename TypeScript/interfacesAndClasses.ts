/*


██╗███╗░░██╗████████╗███████╗██████╗░███████╗░█████╗░░█████╗░███████╗░██████╗  
██║████╗░██║╚══██╔══╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝  
██║██╔██╗██║░░░██║░░░█████╗░░██████╔╝█████╗░░███████║██║░░╚═╝█████╗░░╚█████╗░  
██║██║╚████║░░░██║░░░██╔══╝░░██╔══██╗██╔══╝░░██╔══██║██║░░██╗██╔══╝░░░╚═══██╗  
██║██║░╚███║░░░██║░░░███████╗██║░░██║██║░░░░░██║░░██║╚█████╔╝███████╗██████╔╝  
╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚══════╝╚═════╝░  

                    ░█████╗░███╗░░██╗██████╗░  
                    ██╔══██╗████╗░██║██╔══██╗  
                    ███████║██╔██╗██║██║░░██║  
                    ██╔══██║██║╚████║██║░░██║  
                    ██║░░██║██║░╚███║██████╔╝  
                    ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  

        ░█████╗░██╗░░░░░░█████╗░░██████╗░██████╗███████╗░██████╗
        ██╔══██╗██║░░░░░██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝
        ██║░░╚═╝██║░░░░░███████║╚█████╗░╚█████╗░█████╗░░╚█████╗░
        ██║░░██╗██║░░░░░██╔══██║░╚═══██╗░╚═══██╗██╔══╝░░░╚═══██╗
        ╚█████╔╝███████╗██║░░██║██████╔╝██████╔╝███████╗██████╔╝
        ░╚════╝░╚══════╝╚═╝░░╚═╝╚═════╝░╚═════╝░╚══════╝╚═════╝░

    В этом разделе ты узнаешь:
- что такое Interfaces
- основные принципы работы с Interfaces
- о Optional и Readonly свойствах Interface
- как расширить существующий Interfaces
- что такое Utility Types и как они упрощают базовые преобразования типов
- что такое классы
- что такое свойства и методы
- что такое наследование классов

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction <--
--> https://www.typescriptlang.org/docs/handbook/utility-types.html <--
--> https://www.typescriptlang.org/docs/handbook/2/classes.html <--
*/

/*
        Задание 1
    ~ Раскомментировать строки кода ниже
    ~ Учитывая данные определить интерфейс User
    ~ Использовать интерфейс User
*/

// export interface IUser {
//   name: string;
//   age: number;
//   occupation: string;
// }

// export const users: IUser[] = [
//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
// ];

// export function logPerson(user: IUser): void {
//   console.log(` - ${user.name}, ${user.age}`);
// }

// console.log("Users:");
// users.forEach(logPerson);

/*
        Задание 2
    ~ Используем код Задания 1 (копируем, комментируем и вставляем ниже)
    ~ Добавить в массив User объекты { name: 'Jane Doe', age: 32, role: 'Administrator'},  { name: 'Bruce Willis', age: 64, role: 'World saver' }
    ~ Объявить интерфейс Admin, который бы соответствовал новым объектам
    ~ Внести изменения в код, что бы не было ошибок
*/

// export interface IUser {
//   name: string;
//   age: number;
//   occupation?: string;
// }

// export interface IAdmin extends IUser {
//   role: string;
// }

// type TUsersType = IUser | IAdmin;

// export const users: TUsersType[] = [
//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
//   {
//     name: "Jane Doe",
//     age: 32,
//     role: "Administrator",
//   },
//   {
//     name: "Bruce Willis",
//     age: 64,
//     role: "World saver",
//   },
// ];

// export function logPerson(user: TUsersType): void {
//   console.log(` - ${user.name}, ${user.age}`);
// }

// console.log("Users:");
// users.forEach(logPerson);

/*
        Задание 3
    ~ Используем код Задания 2 (копируем, комментируем и вставляем ниже)
    ~ Изменить функцию logPerson таким образом, что бы все свойства объекта были выведены в консоль  (включая role и occupation)
*/

// export interface IUser {
//   name: string;
//   age: number;
//   occupation?: string;
// }

// export interface IAdmin extends IUser {
//   role: string;
// }

// type TUsersType = IUser | IAdmin;

// export const users: TUsersType[] = [
//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
//   {
//     name: "Jane Doe",
//     age: 32,
//     role: "Administrator",
//   },
//   {
//     name: "Bruce Willis",
//     age: 64,
//     role: "World saver",
//   },
// ];

// export function logPerson(user: IAdmin): void {
//   console.log(
//     user.occupation
//       ? ` - ${user.name}, ${user.age}, ${user.occupation}`
//       : ` - ${user.name}, ${user.age}, ${user.role}`
//   );
// }

// console.log("Users:");
// users.forEach(logPerson);

/*
        Задание 4
    ~ Используем код Задания 3 (копируем, комментируем и вставляем ниже)
    ~ Для определения типа аргумента person в функции logPerson используем следующие функции

        export function isAdmin(person: Person) {
            return person.type === 'admin';
        }

        export function isUser(person: Person) {
            return person.type === 'user';
        }

    ~ Как помочь TS понять какой фактический тип передается в эти функции, что бы мы могли без ошибок использовать в logPerson следующее выражение
     if (isAdmin(person)) {
        additionalInformation = person.role;
     }
*/

export interface IUser {
  name: string;
  age: number;
  occupation?: string;
  type: "user" | "admin";
}

export interface IAdmin extends IUser {
  role: string;
}

type TUsersType = IUser | IAdmin;

export const users: TUsersType[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    type: "user",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
    type: "user",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
    type: "admin",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
    type: "admin",
  },
];

export function isAdmin(user: IAdmin): boolean {
  return user.type === "admin";
}

export function isUser(user: IUser): boolean {
  return user.type === "user";
}

export function logPerson(user: IAdmin): void {
  let additionalInformation: string = "";

  if (isAdmin(user)) {
    additionalInformation = user.role;
  }
  if (isUser(user)) {
    additionalInformation = user.occupation;
  }

  console.log(`- ${user.name}, ${user.age}, ${additionalInformation}`);
}

console.log("Users:");
users.forEach(logPerson);

/*
        Задание 5
    ~ Используем код Задания 4 (копируем, комментируем и вставляем ниже)
    ~ Необходимо добавить свойство type в существующие интерфейсы и соответствующие объекты (типов будет три user, admin, superuser)
    ~ Определить интерфейс SuperUser, который содержит все поля от User и Admin за исключением поля type (используй Utility Types). Поле type указать явно и задать соответсвующее значение.
    ~ Написать функцию isSuperUser
    ~ Вывести в консоль отдельные списки Users, Admins, Super Users
*/

//Не решил 💩

// export interface IUser {
//   name: string;
//   age: number;
//   occupation?: string;
//   type: string;
// }

// export interface IAdmin extends IUser {
//   role?: string;
// }

// export interface ISuperUser extends Omit<IAdmin, "type"> {
//   type: "superuser";
// }

// type TUsersType = IUser | IAdmin | ISuperUser;

// export const users: TUsersType[] = [
//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//     type: "user",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//     type: "user",
//   },
//   {
//     name: "Jane Doe",
//     age: 32,
//     role: "Administrator",
//     type: "admin",
//   },
//   {
//     name: "Bruce Willis",
//     age: 64,
//     role: "World saver",
//     type: "admin",
//   },
//   {
//     name: "Chuck Norris",
//     age: 81,
//     occupation: "actor",
//     role: "World Master",
//     type: "superuse",
//   },
// ];

// export function isAdmin(user: IAdmin): boolean {
//   return user.type === "admin";
// }

// export function isUser(user: IUser): boolean {
//   return user.type === "user";
// }

// export function isSuperUser(user: ISuperUser): boolean {
//   return user.type === "superuser";
// }

// users.forEach((user) => {
//   if (isAdmin(user)) {
//   }

//   if (isUser(user)) {
//   }

//   if (isSuperUser(user)) {
//   }
// });

/*
        Задание 6
    ~ Объяви класс Weather, который будет иметь два свойства windSpeed и chanceOfRain числового типа.
    ~ У класса должен быть обязательный инициализатор, который принимает значения скорости ветра (windSpeed) и шанс дождя (chanceOfRain)
    ~ Добавь в класс функцию isDayForWalk. Если скорость ветра (windSpeed) меньше 5 метров и шанс дождя (chanceOfRain) меньше 30 процентов, то функция должна вернуть true,  иначе  - false.
    ~ Создай экземпляр класса и выведи в консоль удачный ли сегодня день для прогулок;)
*/

interface IWeather {
  windSpeed: number;
  chanceOfRain: number;
  isDayForWalk(): boolean;
}

class Weather implements IWeather {
  public windSpeed: number;
  public chanceOfRain: number;

  constructor() {
    this.windSpeed = 2;
    this.chanceOfRain = 14;
  }

  isDayForWalk(): boolean {
    if (this.windSpeed < 5 && this.chanceOfRain < 30) {
      return true;
    }

    return false;
  }
}

const weather: IWeather = new Weather();

console.log(weather.isDayForWalk());

/*
        Задание 7
    ~ Объяви класс Point2D, который будет иметь два свойства x и y числового типа. Свойства должны быть инициализированными 0 по умолчанию.
    ~ Добавь в класс Point2D, метод  reset, который будет устанавливать координаты x и y в 0.
    ~ Добавь инициализатор в класс Point2D, который в качестве параметров будет принимать значения для координат x и y.
    ~ Объяви класс Point3D, который будет дочерним классом по отношению к классу Point2D. Добавь в него свойство z, которое будет проинициализировано по умолчанию нулем
    ~ Добавь инициализатор, который будет в качестве параметров принимать значения для координат x, y и z
    ~ Cоздай экземпляр класса Point3D с именем point3D
    ~ Сделай так, чтобы при вызове метода reset, также сбрасывалась в ноль и координата z
    ~ Используй механизм переопределения методов!
*/

interface IPoint2D {
  x: number;
  y: number;
  reset(): void;
}

interface IPoint3D {
  z: number;
  reset(): void;
}

class Point2D implements IPoint2D {
  public x = 0;
  public y = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public reset() {
    this.x = 0;
    this.y = 0;
  }
}

class Point3D extends Point2D implements IPoint2D {
  public z = 0;

  constructor(x: number, y: number, z: number) {
    super(x, y);

    this.z = z;
  }

  public reset() {
    super.reset();

    this.z = 0;
  }
}

const point3D = new Point3D(20, 30, 56);

point3D.reset();

/*
        Задание 8
    ~ Реализуй иерархию классов, представленной на Рисунке 1
*/

abstract class Telephone {
  public makeCall(): void {
    console.log("hello!");
  }

  public hangUp(): void {
    console.log("put the phone down");
  }
}

abstract class Landline extends Telephone {}

class RotaryPhone extends Landline {
  public rotaryInput(): void {
    console.log("10 impulse..., 5 impulse..., ... ");
  }
}

class PushButtonPhone extends Landline {
  public buttonInput(): void {
    console.log("push 1..., push 6..., ...");
  }
}

abstract class Cellular extends Telephone {
  abstract sendSMS(): void;
}

abstract class Smartphone extends Cellular {
  phoneOS: string;

  constructor(phoneOS: string) {
    super();
    this.phoneOS = phoneOS;
  }

  public sendSMS(): void {
    console.log("sms send");
  }

  public touchInput(): void {
    console.log("touch..., touch&slice...");
  }

  public accessInternet(): void {
    console.log("welcome to the amazing world of the internet");
  }
}

class IPhone extends Smartphone {
  constructor(phoneOS: string) {
    super(phoneOS);
  }
}

class Android extends Smartphone {
  constructor(phoneOS: string) {
    super(phoneOS);
  }
}

class Windows extends Smartphone {
  constructor(phoneOS: string) {
    super(phoneOS);
  }
}

class NonSmartphone extends Cellular {
  public sendSMS() {
    console.log("sms send");
  }

  public buttonInput() {
    console.log("push 1..., push 6..., ...");
  }
}

const iPhone = new IPhone("ios");
console.log(iPhone.phoneOS);

const rotaryPhone = new RotaryPhone();
rotaryPhone.rotaryInput();

const nonSmartphone = new NonSmartphone();
nonSmartphone.makeCall();
