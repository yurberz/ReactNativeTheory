/*
    ████████╗░██████╗  ██████╗░███████╗░██████╗██╗░██████╗░███╗░░██╗
    ╚══██╔══╝██╔════╝  ██╔══██╗██╔════╝██╔════╝██║██╔════╝░████╗░██║
    ░░░██║░░░╚█████╗░  ██║░░██║█████╗░░╚█████╗░██║██║░░██╗░██╔██╗██║
    ░░░██║░░░░╚═══██╗  ██║░░██║██╔══╝░░░╚═══██╗██║██║░░╚██╗██║╚████║
    ░░░██║░░░██████╔╝  ██████╔╝███████╗██████╔╝██║╚██████╔╝██║░╚███║
    ░░░╚═╝░░░╚═════╝░  ╚═════╝░╚══════╝╚═════╝░╚═╝░╚═════╝░╚═╝░░╚══╝

    ██████╗░░█████╗░████████╗████████╗███████╗██████╗░███╗░░██╗░██████╗
    ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗████╗░██║██╔════╝
    ██████╔╝███████║░░░██║░░░░░░██║░░░█████╗░░██████╔╝██╔██╗██║╚█████╗░
    ██╔═══╝░██╔══██║░░░██║░░░░░░██║░░░██╔══╝░░██╔══██╗██║╚████║░╚═══██╗
    ██║░░░░░██║░░██║░░░██║░░░░░░██║░░░███████╗██║░░██║██║░╚███║██████╔╝
    ╚═╝░░░░░╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░

        В этом разделе ты узнаешь:
- что такое паттерны проектирования и когда их использовать
- суть паттерна Декоратор

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://refactoring.guru/ru/design-patterns <--
    К Заданию 1
--> https://refactoring.guru/ru/design-patterns/adapter <--
    К Заданию 2
--> https://refactoring.guru/ru/design-patterns/observer <--
    К Заданию 3 
--> https://refactoring.guru/ru/design-patterns/abstract-factory <--
====================================================================
    ПРОДВИНУТЫЙ УРОВЕНЬ
    К Заданию 4
--> https://refactoring.guru/ru/design-patterns/decorator <--
    К Заданию 5
--> https://refactoring.guru/ru/design-patterns/facade <--
    К Заданию 6
--> https://refactoring.guru/ru/design-patterns/state <--

*/

// БАЗОВЫЙ УРОВЕНЬ
/*
        Задание 1
    Реализуй паттерн Adapter в следующем контексте: 
    Есть два класса: автомобиль и эвакуатор. Каждый из них, независимо друг от друга может ездить. 
    У автомобиля обнаружили несправность. Хозяин вызвал эвакуатор и автомобиль начали буксировать. 
    Опишите эту ситуацию реализуя паттерн проектирования с выводами текстовых сообщений в консоль.
*/

interface ICar {
  move(): void;
}

interface ITowTruck {
  move(): void;
  evacuate(): void;
}

class Car implements ICar {
  public move() {
    console.log("The car moves 🏎");
  }
}

class TowTruck implements ITowTruck {
  public move() {
    console.log("The tow truck moves 🚓");
  }

  public evacuate() {
    console.log("Towing a car...");
  }
}

class CarToEvacuate implements ICar {
  towTruck: ITowTruck;

  constructor(towTruck: ITowTruck) {
    this.towTruck = towTruck;
  }

  public move(): void {
    this.towTruck.evacuate();
  }
}

const car = new Car();
const towTruck = new TowTruck();
const brokenCar = new CarToEvacuate(towTruck);

car.move();
console.log("");
console.log("The car broke down, calling tow truck...");
console.log("");
towTruck.move();
console.log("");
brokenCar.move();
console.log("");

/*
        Задание 2
    Реализуй паттерн Observer в следующем контексте: 
    В доме срабатывает сигнализация. Она оповещает о тревоге охранную 
    фирму и хозяина дома, после отключения сигнализации, все так же получают соответствующее уведомление.
*/

interface ISubject {
  data: number;
  setData(value: number): void;
  registerObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(): void;
}

interface IObserver {
  update(subject: ISubject): void;
}

class AlarmSystem implements ISubject {
  data: number;
  private observers: IObserver[] = [];

  public setData() {
    this.data = Math.round(Math.random());

    console.log("Alarm system: Updating...");

    this.notifyObservers();
  }

  public registerObserver(observer: IObserver) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);

      console.log("Alarm system: register observer");
    }
  }

  public removeObserver(observer: IObserver) {
    this.observers = this.observers.filter((register) => register !== observer);

    console.log("Alarm system: remove observer");
  }

  public notifyObservers() {
    console.log("Alarm system: Notifying observers...");

    this.observers.forEach((observer) => observer.update(this));
  }
}

class Observer implements IObserver {
  public update(subject: ISubject) {
    if (subject.data === 1) {
      console.log("ALERTS!");
    } else {
      console.log("Stay cool...");
    }
  }
}

const ajax = new AlarmSystem();
const security = new Observer();
const owner = new Observer();

ajax.registerObserver(security);
ajax.registerObserver(owner);
console.log("");
ajax.setData();
ajax.setData();
console.log("");
ajax.removeObserver(owner);
console.log("");
ajax.setData();

/* 
        Задание 3
    Реалиуй паттерн Abstract Factory в следующем контексте:
    Есть два производителя Samsung и Apple. Каждый из этих производителей выпускает различные девайсы (телефоны, планшеты, компьютеры и т.д).
    Фабрика должна предоставлять возможность создавать девайсы любой марки и любого типа. 
*/

interface IFactory {
  createPhone(): IPhone;
  createTablet(): ITablet;
}

interface IPhone {
  phone(): void;
}

interface ITablet {
  tablet(): void;
}

class AppleFactory implements IFactory {
  public createPhone() {
    return new ApplePhone();
  }

  public createTablet() {
    return new AppleTablet();
  }
}

class SamsungFactory implements IFactory {
  public createPhone() {
    return new SamsungPhone();
  }

  public createTablet() {
    return new SamsungTablet();
  }
}

class ApplePhone implements IPhone {
  public phone() {
    console.log("Apple phone");
  }
}

class SamsungPhone implements IPhone {
  public phone() {
    console.log("Samsung phone");
  }
}

class AppleTablet implements ITablet {
  public tablet() {
    console.log("Apple tablet");
  }
}

class SamsungTablet implements ITablet {
  public tablet() {
    console.log("Samsung tablet");
  }
}

const createProduct = (factory: IFactory) => {
  const phone = factory.createPhone();
  const tablet = factory.createTablet();

  phone.phone();
  tablet.tablet();
};

createProduct(new AppleFactory());
console.log("");
createProduct(new SamsungFactory());

// ПРОДВИНУТЫЙ УРОВЕНЬ
/*
        Задание 4
    Реализуй паттерн Decorator в следующем контексте: 
    Фастфуд предлагает два комбо набора Чизбургер меню и Гамбургер меню.
    Каждый из этих наборов могут дополняться различными напитками или десертами на выбор покупателя, из-за чего изменяется его цена.
    Поступил заказ на два меню (Чизбургер меню и Гамбургер меню), одно с соком, а второе с колой и пончиком. 
    Помогите фастфуду приготовить и вывести заказ в консоль, не создавая новых видов меню.
*/

interface IFastFood {
  order(): void;
}

class MenuDecorator implements IFastFood {
  protected menu: IFastFood;

  constructor(menu: IFastFood) {
    this.menu = menu;
  }

  public order() {
    this.menu.order();
  }
}

class CheesburgerMenu implements IFastFood {
  public order() {
    console.log("basic combo Cheesburger menu");
  }
}

class HamburgerMenu implements IFastFood {
  public order() {
    console.log("basic combo Humburger menu");
  }
}

class AddJuice extends MenuDecorator {
  public order() {
    super.order();

    console.log("added juice");
  }
}

class AddCola extends MenuDecorator {
  public order() {
    super.order();

    console.log("added cola");
  }
}

class AddDonut extends MenuDecorator {
  public order() {
    super.order();

    console.log("added donut");
  }
}

const basicCheesburgerMenu = new CheesburgerMenu();
const cheesburgerMenuPlus = new AddJuice(new CheesburgerMenu());
const hamburgerMenuPlus = new AddDonut(new AddCola(new HamburgerMenu()));

basicCheesburgerMenu.order();
console.log("");
cheesburgerMenuPlus.order();
console.log("");
hamburgerMenuPlus.order();

/*
        Задание 5
    Реализуй паттерн Facade в следующем контексте: 
    У вас умный дом. Он напичкан многими девайсами и автоматическими приборами. 
    Когда вы уходите или приходите домой каждый раз повторяете множество одних и тех же действий (вкл/выкл света, кондиционера, музыки и т.д).
    Создайте две запрограммированных поведения системы умного дома - "хозяин дома", "хозяин ушел".
*/

interface ISmartHouse {
  lightsControl: IController;
  musicControl: IController;
  ownerHome(): void;
  ownerOut(): void;
}

interface IController {
  on(): void;
  off(): void;
}

class SmartHouse implements ISmartHouse {
  lightsControl: Lights;
  musicControl: Music;

  constructor(lights: Lights, music: Music) {
    this.lightsControl = lights || new Lights();
    this.musicControl = music || new Music();
  }

  ownerHome() {
    console.log("honey, i`m home");

    this.lightsControl.on();
    this.musicControl.on();
  }

  ownerOut() {
    console.log("bye, bye");

    this.lightsControl.off();
    this.musicControl.off();
  }
}

class Lights implements IController {
  on() {
    console.log("light on!");
  }

  off() {
    console.log("light off!");
  }
}

class Music implements IController {
  on() {
    console.log("music on!");
  }

  off() {
    console.log("music off!");
  }
}

const smartHouse = new SmartHouse(new Lights(), new Music());
smartHouse.ownerOut();
console.log("");
smartHouse.ownerHome();

/*
        Задание 6
    Реализуй паттерн State в следующем контексте: 
    Допустим, что мобильное приложение перед выливкой в стор, может находится в 4-x состояних: waiting for review, in review, ready for sale, published.
    В каждом состоянии мы можем вызвать методы Publish и Cancel, уоторые будет работать по-разному:
     - из waiting for review Publish отправит приложение на проверку, Cancel вызвать нельзя
     - из in review Publish отправит в ready for sale, если проверка прошла успешно, 
       либо вызовет Cancel, при обнаружении ошибок и вернет в начальное состояние.
    - из ready for sale пользователь может вызвать Cancel и отменить выливку, или Publish и перейти в состояние published.
    - из состояния published нельзя вызывать методы Publish и Cancel
*/

interface IMobileApp {
  state: IState;
  setState(state: IState): void;
  publish(): void;
  cancel(): void;
}

interface IState {
  context: IMobileApp;
  setContext(context: IMobileApp): void;
  publish(): void;
  cancel(): void;
}

class MobileApp implements IMobileApp {
  state: State;

  constructor(state: State) {
    this.setState(state);
  }

  public setState(state: State) {
    console.log(`State to ${state.constructor.name}.`);

    this.state = state;
    this.state.setContext(this);
  }

  public publish() {
    this.state.publish();
  }

  public cancel() {
    this.state.cancel();
  }
}

abstract class State implements IState {
  context: MobileApp;

  public setContext(context: MobileApp) {
    this.context = context;
  }

  abstract publish(): void;

  abstract cancel(): void;
}

class WaitingForReview extends State {
  publish() {
    console.log("check plz!");
    this.context.setState(new InReview());
  }

  cancel() {
    throw new Error("Method not implemented.");
  }
}

class InReview extends State {
  publish() {
    console.log("nice!");
    this.context.setState(new ReadyForSale());
  }

  cancel() {
    console.log("read code review!");
    this.context.setState(new WaitingForReview());
  }
}

class ReadyForSale extends State {
  publish() {
    console.log("in store!");
    this.context.setState(new Published());
  }

  cancel() {
    console.log("cancel!");
    this.context.setState(new InReview());
  }
}

class Published extends State {
  publish(): void {
    throw new Error("Method not implemented.");
  }

  cancel(): void {
    throw new Error("Method not implemented.");
  }
}

const mobileApp = new MobileApp(new WaitingForReview());

mobileApp.publish();
mobileApp.cancel();
console.log("");
mobileApp.publish();
mobileApp.publish();
mobileApp.cancel();
console.log("");
mobileApp.publish();
mobileApp.publish();
