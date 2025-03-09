// 1. Какой результат работы кода и почему? Выберите один ответ.

function greet(name) {
  if (name === undefined) {
    return "Hello, stranger!";
  } else {
    return "Hello, " + name + "!";
  }
}
console.log(greet());

// Варианты ответов:
//     a. "Hello, stranger!" // т.к. не выполнена передача аргумента
//     b. "Hello, undefined!"
//     c. Ошибка: "name is not defined"
//     d. Ошибка: "greet() takes exactly 1 argument (0 given)"

// 2. Напишите функцию, которая выводит в консоль индивидуальное приветствие с именем, которое вы передаете в функцию

function great(name) {
  if (typeof name === "string") {
    return `Hello, ${name}`;
  } else if (typeof name !== "string") {
    return "Hello, stranger";
  }
}

console.log(great());

// 3. Напишите функцию с калькулятором (можно использовать код с предыдущей домашней работы), в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.

function calculate(a, b, operator) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Первый и второй аргументы должны быть числами!";
  }

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) {
      return "Ошибка: деление на ноль!";
    } else {
      return a / b;
    }
  };

  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return "Неверный оператор. Используйте один из: +, -, *, /";
  }
}

console.log(calculate(18, 15, "+"));

// 4. Создать функцию getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.
//    Создать декларируемую функцию (function Declaration), функцию выражение (function Expression) и стрелочную функцию.

const greetings = [
  "Hello world!",
  "¡Hola mundo!",
  "Hallo wereld!",
  "Привет мир!",
];

function getGreetingsDeclaration(index) {
  return greetings[index];
}

const getGreetingsExpression = function (index) {
  return greetings[index];
};

const getGreetingsArrow = (index) => greetings[index];

console.log(getGreetingsDeclaration(0));
console.log(getGreetingsExpression(1));
console.log(getGreetingsArrow(2));

// 5. Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции)
//    Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.

function calculateDays(wall, dayDistance, nightDistance) {
  let totalMeters = 0;
  let dayNumber = 0;

  while (totalMeters < wall) {
    dayNumber++;
    totalMeters += dayDistance;

    if (totalMeters >= wall) {
      break;
    }

    totalMeters -= nightDistance;
  }

  return dayNumber;
}

console.log(calculateDays(5, 3, 2));

// 6. Напишите функцию, которая принимает массив чисел как параметр и возвращает сумму всех чисел этого массива. Если элемент массива не число, пропускаем этот элемент

const arr = [1, 2, "3", 4, 5, 6, "7", 8, 9];

const sum = arr.reduce((acc, current) => {
  if (typeof current === "number" && current !== isNaN) {
    return acc + current;
  }
  return acc;
});

console.log(sum);

// 7. Напишите функцию, которая принимает массива строк как параметр и возвращает строки длиннее 5 букв.

const array = ["Apple", "Banana", "Orange", "Lemon", "Lime", "Grape"];
const filter = array.filter((item) => item.length > 5);
console.log(filter.join());
