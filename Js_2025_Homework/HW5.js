// 1. Нарисуйте треугольник с цифрами - вниз

let num = 9;
for (let i = num; i >= 0; i--) {
  let row = "";
  for (let j = 0; j < num - i; j++) {
    row += "  ";
  }
  for (let k = -i; k <= i; k++) {
    row += Math.abs(k) + " ";
  }
  console.log(row);
}

// 9 8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8 9
//   8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8
//     7 6 5 4 3 2 1 0 1 2 3 4 5 6 7
//       6 5 4 3 2 1 0 1 2 3 4 5 6
//         5 4 3 2 1 0 1 2 3 4 5
//           4 3 2 1 0 1 2 3 4
//             3 2 1 0 1 2 3
//               2 1 0 1 2
//                 1 0 1
//                   0

// 2. Сложнее: Нарисуйте горизонтальный треугольник из цифр

let num1 = 1;
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num1 + " ";
    num1++;
  }
  console.log(row);
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// 3. Имеется зашифрованное предложение

const str =
  "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
const result = str.split("br").join("");
console.log(result);

// Мы знаем, что оно означает “You are the best QA ever”.
