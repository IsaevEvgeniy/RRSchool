// 1. Строки. Установить какие методы строк изменяют начальное значение строки.
//    Дана строка: “Знание встроенных методов JavaScript ускоряет работу тестировщика.”
let str = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
console.log(str.charAt()); // "K"            возвращает первый символ
console.log(str[0]); // "K"            возвращает первый символ через индекс
console.log(str.charAt(str.length - 1)); // "."            возвращает символ последнего строкового аргумента
console.log(str.substring(1, 4)); // "now"          возвращает подстроку строк между двумя индексами или от одного индекса и до конца строки
console.log(str.substr(1, 3)); // "now"          возвращает указанное количество символов в строке, начиная с указанной позиции
console.log(str.slice(-3)); // "rk."          извлекает часть строк и возвращает новый текст без изменения оригинальной строки
console.log(str.indexOf("l")); // "4"            возвращает индекс первого вхождения данной подстроки в строке
console.log(str.lastIndexOf("l")); // "16"           возвращает последний индекс появления данной подстроки в строке
console.log(str.split("of")); //               используется для разрыва строки с разделителями на подстроки
console.log(str.replace("l", "L")); //               возвращает новую строку, в которой первое совподение
console.log(str.replaceAll("l", "L")); //               возвращает новую строку, в которой все совпадения заменены
console.log(str.toUpperCase()); //               используется для преобразования символов в строке к верхнему регистру
console.log(str.toLowerCase()); //              используется для преобразования символов в строке к нижнему регистру

// 2. Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос)

let dayOfTheWeek = +"Enter values ​​from 1 to 7";
let day;
switch (dayOfTheWeek) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    day = "Please enter a valid value, please try again";
}
console.log(day);

// 3.Напишите программу по согласованию отпуска в зависимости от месяца.
//   Если месяц “July” или “August”, то программа должна показать - “approved”, если другие месяцы, то - “denied”.

let month = "July";
let result = month === "July" || month === "August" ? "approved" : "denied";
console.log(result);

const APPROVED_MONTH = ["July", "August"];
let result2 = APPROVED_MONTH.includes(month) ? "approved" : "denied";
console.log(result2, "hoeq");

// 4.Напишите простенький калькулятор (*, /, +, -).
//   У вас должны быть две переменные для исходных чисел и одна для оператора.
//   В зависимости от оператора, должно происходить то sили иное арифметическое действие и выводиться результат в консоль.
//   Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.

let num1 = +prompt("Введите первое число:");
let num2 = +prompt("Введите второе число:");
let operator = prompt(
  "Введите оператор из списка: add, subtract, multiply, divide"
);

switch (operator) {
  case "add":
    console.log(num1 + num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  case "multiply":
    console.log(num1 * num2);
    break;
  case "divide":
    if (num2 === 0) {
      console.log("You can't divide by zero");
      return;
    }
    console.log(num1 / num2);

    break;
  default:
    console.log("Invalid operator");
}

// 5. Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх
//    на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.

const wall = 5;
const dayDistance = 3;
const nightDistance = 2;
let totalMeters = 0;
let dayNumber = 0;

for (; totalMeters < wall; dayNumber++) {
  totalMeters += dayDistance;

  if (totalMeters >= wall) {
    break;
  }

  totalMeters -= nightDistance;
}
console.log(dayNumber);

// 6.Напишите следующую программу:
//   У клиента должен быть выбор из двух (или трех) видов кофе (на ваш выбор).
//   Дайте названия вашим видам кофе.
//   Установите цену на кофе в зависимости от величины стаканчика (small, medium, large).
//   Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика).
//   Компоненты кофе не влияют на стоимость.
//   Используйте подходящую комбинацию условий - if, else if, else - для решения задачи.

let rough = "раф";
let cappuccino = "капучино";
let latte = "латте";

let recipeRough = "1";
let recipeCappuccino = "2";
let recipeLatte = "3";

let smallСup = 180;
let mediumСup = 230;
let largeСup = 280;

let costOfDrink = 200;

const getCoff = (coffeCup, coffeeType) => {
  if (
    (coffeeType === rough ||
      coffeeType === cappuccino ||
      coffeeType === latte) &&
    (coffeCup === smallСup || coffeCup === mediumСup || coffeCup === largeСup)
  ) {
    let costOfDrinkInner = costOfDrink;
    if (coffeCup === mediumСup) costOfDrinkInner = costOfDrink *= 1.2;
    if (coffeCup === largeСup) costOfDrinkInner = costOfDrink *= 1.4;

    let recipe;
    if (coffeeType === rough) recipe = recipeRough;
    if (coffeeType === cappuccino) recipe = recipeCappuccino;
    if (coffeeType === latte) recipe = recipeLatte;

    console.log(
      `Вы выбрали кофе: ${coffeeType}, обьемом ${coffeCup} мл. Его стоимость составляет: ${costOfDrinkInner} рублей ${recipe}.`
    );
  }
};
getCoff(smallСup, cappuccino);
