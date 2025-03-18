// 1. Создайте объект cars, где будут 3-4 разные машины с их названиями, моделями, годом выпуска и цветом.

const cars = {
  car1: { name: "Toyota", model: "Camry", year: 2023, color: "Silver" },
  car2: { name: "Honda", model: "Civic", year: 2014, color: "Black" },
  car3: { name: "Ford", model: "Mustang", year: 2018, color: "Red" },
};

// 2. Работа с объектом room. Выполняйте пошагово.
//     а. Создайте объект room и его параметры:
//         	ключ height со значением 3
//         	ключ tv со значением samsung
//         	ключ big со значением true
//     b. Выведите в console все параметры объекта room по очереди
//     c. Выведите в console тип данных параметра big
//     d. Выведите в console количество символов в строке параметра tv (длину строки)
//     e. Выведите в console результат расчёта: длина строки параметра tv минус 1
//     f. Поменяйте samsung на все заглавные буквы и выведите в console.
//     g. Замените samsung на LG в нашем объекте room
//     h. Добавьте в наш объект room ещё одну пару ключ-значение:
//         ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"
//     i. выведите chair в console (путем обращения к массиву)
//     j. Удалите из нашего объекта room параметр big

const room = {
  height: 3,
  tv: "samsung",
  big: true,
};

console.log(room.height);
console.log(room.tv);
console.log(room.big);
console.log(room.tv.length);
console.log(room.tv.length - 1);
console.log(room.tv.toUpperCase());
room.tv = "LG";
console.log(room.tv);
room.furniture = ["table", "chair", "sofa"];
console.log(room.furniture[1]);
delete room.big;
console.log(room);

// 3. Создайте функцию, которая принимает следующий объект как параметр:
//    {name: "dog", legs: 4, color: "yellow"}
//    Возвратите строку: "This yellow dog has 4 legs."

const pet = {
  name: "dog",
  legs: 4,
  color: "yellow",
};

function describe(petInfo) {
  return `This ${petInfo.color} ${petInfo.name} has ${petInfo.legs} legs.`;
}

const result = describe(pet);
console.log(result);

// 4. Есть список людей, которые подписались на международную встречу разработчиков.

const developers = [
  {
    firstName: "Emma",
    lastName: "Z.",
    country: "Netherlands",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "Peter",
    lastName: "B.",
    country: "Poland",
    age: 48,
    language: "Javascript",
  },
  {
    firstName: "Natasha",
    lastName: "P.",
    country: "Mexico",
    age: 25,
    language: "C#",
  },
  {
    firstName: "Josh",
    lastName: "A.",
    country: "USA",
    age: 26,
    language: "C#",
  },
  {
    firstName: "Augusto",
    lastName: "C.",
    country: "Spain",
    age: 32,
    language: "Java",
  },
  {
    firstName: "Lei Mi",
    lastName: "S.",
    country: "China",
    age: 52,
    language: "Fortran",
  },
  {
    firstName: "Mikey",
    lastName: "L.",
    country: "New Zealand",
    age: 30,
    language: "Node",
  },
];

//     Вопрос: есть ли хоть один разработчик, работающий на JavaScript? Возвратите да или нет. Будьте внимательны.

function checkLanguage(developers) {
  for (let elem of developers) {
    developers.language === "Javascript";
    return "Да";
  }
  return "Нет";
}
console.log(checkLanguage(developers));

// 5. Создайте библиотеку книг Стивена Кинга, Марка Твена и Александра Сергеевича.
//    В библиотеке должно быть по 5 книг каждого писателя. Каждая книга должна иметь идентификатор (isbn),
//    имя книги, имя автора, год выпуска, жанр, количество страниц, популярность книги у этого автора (от 1 до 5)
//    и первое предложение/строку.

const library = [
  {
    author: "Stephen King",
    books: [
      {
        id: 1,
        name: "It",
        year: 1986,
        genre: "Horror",
        pages: 1138,
        rating: 5,
      },
      {
        id: 2,
        name: "The Shining",
        year: 1977,
        genre: "Horror",
        pages: 447,
        rating: 5,
      },
      {
        id: 3,
        name: "Misery",
        year: 1987,
        genre: "Psychological Thriller",
        pages: 368,
        rating: 4,
      },
      {
        id: 4,
        name: "The Institute",
        year: 2019,
        genre: "Science Fiction, Thriller",
        pages: 576,
        rating: 4,
      },
      {
        id: 5,
        name: "The Gunslinger",
        year: 1982,
        genre: "Fantasy, Western",
        pages: 288,
        rating: 4,
      },
    ],
  },
  {
    author: "Mark Twain",
    books: [
      {
        id: 1,
        name: "The Adventures of Tom Sawyer",
        year: 1876,
        genre: "Adventure",
        pages: 288,
        rating: 5,
      },
      {
        id: 2,
        name: "The Prince and the Pauper",
        year: 1881,
        genre: "Historical Fiction",
        pages: 320,
        rating: 4,
      },
      {
        id: 3,
        name: "Adventures of Huckleberry Finn",
        year: 1884,
        genre: "Adventure, Satire",
        pages: 366,
        rating: 5,
      },
      {
        id: 4,
        name: "A Connecticut Yankee in King Arthur's Court",
        year: 1889,
        genre: "Fantasy Satire",
        pages: 450,
        rating: 4,
      },
      {
        id: 5,
        name: "The Mysterious Stranger",
        year: 1916,
        genre: "Philosophical Fiction",
        pages: 178,
        rating: 4,
      },
    ],
  },
  {
    author: "Alexander Pushkin",
    books: [
      {
        id: 1,
        name: "Ruslan and Ludmila",
        year: 1820,
        genre: "Poem, Fantasy",
        pages: 192,
        rating: 5,
      },
      {
        id: 2,
        name: "Eugene Onegin",
        year: 1833,
        genre: "Novel in Verse",
        pages: 224,
        rating: 5,
      },
      {
        id: 3,
        name: "The Captain's Daughter",
        year: 1836,
        genre: "Historical Novella",
        pages: 320,
        rating: 4,
      },
      {
        id: 4,
        name: "Boris Godunov",
        year: 1825,
        genre: "Historical Drama",
        pages: 160,
        rating: 4,
      },
      {
        id: 5,
        name: "The Queen of Spades",
        year: 1834,
        genre: "Mystical Novella",
        pages: 64,
        rating: 4,
      },
    ],
  },
];

//    a. Выведите в console названия всех книг.

function getBooksByAuthors(library) {
  let arrayBooks = [];
  for (let author of library) {
    for (let book of author.books) {
      arrayBooks.push(book.name);
    }
  }
  let booksString = arrayBooks.join(",\n ");
  console.log(booksString);
}
getBooksByAuthors(library);

//    b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате

function getTopRatedBooks(library) {
  let arrayTop = [];
  for (let author of library) {
    for (let book of author.books) {
      if (book.rating === 5) {
        arrayTop.push(book);
      }
    }
  }
  return arrayTop;
}

const topRatedBooks = getTopRatedBooks(library);

for (let book of topRatedBooks) {
  console.log(`Книга: ${book.name} Рейтинг: ${book.rating}`);
}

//    c. Отсортируйте библиотеку по году выпуска книг

function getBooksByYear(library) {
  let arraySortBooks = [];
  for (let author of library) {
    for (let book of author.books) {
      arraySortBooks.push(book);
    }
  }
  arraySortBooks.sort((a, b) => a.year - b.year);
  for (let book of arraySortBooks) {
    console.log(`${book.name} (${book.year})`);
  }
}
getBooksByYear(library);
