// 1. Есть класс Song. Выведите на печать автора песни.

class Song {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    this._author = newAuthor;
  }
}
let song = new Song("Bohemian Rhapsody", "Queen");
console.log(song.author);

// 2. Определите класс Shape.
//     - Он имеет три свойства: name, sides, и sideLength.
//     - Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину,
//         например квадрат или равносторонний треугольник.
//     - Добавьте конструктор в этот класс.
//     - Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
//     - Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр
//         (длину внешнего края фигуры) и записывает результат в консоль.
//     - Создайте новый экземпляр класса Shape с именем square.
//     - Дайте name ему square, sides = 4 и sideLength = 5​
//     - Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить,
//         записывает ли он результаты вычислений в консоль браузера, как ожидалось.
//     - Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
//     - Вызовите triangle.calcPerimeter(), чтобы убедиться, что все работает.

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`The perimeter of the figure ${this.name} is ${perimeter}`);
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

// // 3. Создайте класс "Employee", представляющий работника. У работника должны быть следующие свойства:

// //     1. "name" - строка, представляющая имя работника.
// //     2. "age" - число, представляющее возраст работника.
// //     3. "position" - строка, представляющая должность работника.
// //     4. "salary" - число, представляющее зарплату работника.

// //     Требования:

// //     1. Создайте конструктор класса "Employee", который принимает аргументы
// //         "name", "age", "position", "salary" и инициализирует соответствующие свойства объекта.
// //     2. Создайте геттеры и сеттеры для свойств "age", "position" и "salary".
// //     3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать
// //         новые значения свойств.

class Employee {
  constructor(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }
  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Возраст должен быть положительным числом.");
    }
  }

  get position() {
    return this._position;
  }

  set position(newPosition) {
    this._position = newPosition;
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary) {
    if (newSalary >= 0) {
      this._salary = newSalary;
    } else {
      console.log("Зарплата должна быть неотрицательным числом.");
    }
  }
}

const employee = new Employee("John", 30, "QA Engineer", 1000);

employee.name = "Jane";
employee.age = 32;
employee.position = "AQA Engineer";
employee.salary = 2500;

console.log(employee);

// // 4. Создайте класс Person со следующими свойствами:

// //     a. Конструктор который принимает 4 аргумента:
// //         - First Name (по умолчанию значение "John")
// //         - Last Name (по умолчанию значение "Doe")
// //         - Age (по умолчанию значение 0)
// //         - Gender (по умолчанию значение "Male").

// //     b. Метод sayFullName без аргументов и возвращает полное имя человека
// //     c. Статический метод greetExtraTerrestrials который принимает один аргумент, raceName
// //         и возвращает "Welcome to Planet Earth <raceName>".

// //         Пример: если значение raceName "Martians", результат должен быть
// //         "Welcome to Planet Earth Martians"

class Person {
  constructor(FirstName = "John", LastName = "Doe", Age = 0, Gender = "Male") {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Age = Age;
    this.Gender = Gender;
  }
  sayFullName() {
    return `${this.FirstName} ${this.LastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

const person = new Person("Alice", "Smith", 25, "Female");
console.log(person.sayFullName());
console.log(Person.greetExtraTerrestrials("Martians"));

// 5. Переделайте задание из урока 7 в класс. Потом, используя класс, сделайте те же задания:

const books = [
  {
    isbn: 101,
    title: "The Dark Tower I: The Gunslinger",
    author: "Stephen King",
    writtenYear: 1982,
    genre: "Fantasy",
    pages: 224,
    rank: 1,
    quote:
      "The man in black fled across the desert, and the gunslinger followed.",
  },
  {
    isbn: 102,
    title: "The Shining",
    author: "Stephen King",
    writtenYear: 1977,
    genre: "Horror",
    pages: 447,
    rank: 5,
    quote: "Jack Torrance thought: Officious little prick.",
  },
  {
    isbn: 103,
    title: "Mr. Mercedes",
    author: "Stephen King",
    writtenYear: 2014,
    genre: "Thriller",
    pages: 436,
    rank: 3,
    quote:
      "In the frigid pre-dawn hours, in a distressed Midwestern city, hundreds of desperate unemployed folks are lined up for a spot at a job fair.",
  },
  {
    isbn: 104,
    title: "It",
    author: "Stephen King",
    writtenYear: 1986,
    genre: "Horror",
    pages: 1138,
    rank: 4,
    quote:
      "The terror, which would not end for another twenty-eight years – if it ever did end – began, so far as I know or can tell, with a boat made from a sheet of newspaper floating down a gutter swollen with rain.",
  },
  {
    isbn: 105,
    title: "Joyland",
    author: "Stephen King",
    writtenYear: 2013,
    genre: "Mystery",
    pages: 288,
    rank: 2,
    quote:
      "I had a car, but on most days in that fall of 1973 I walked to Joyland from Mrs. Shoplaw's Beachside Accommodations in the town of Heaven's Bay.",
  },
  {
    isbn: 106,
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    writtenYear: 1876,
    genre: "Children's literature",
    pages: 244,
    rank: 1,
    quote:
      "Saturday morning was come, and all the summer world was bright and fresh, and brimming with life.",
  },
  {
    isbn: 107,
    title: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    writtenYear: 1885,
    genre: "Children's literature",
    pages: 362,
    rank: 2,
    quote:
      "You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter.",
  },
  {
    isbn: 108,
    title: "The Prince and the Pauper",
    author: "Mark Twain",
    writtenYear: 1882,
    genre: "Fiction",
    pages: 224,
    rank: 3,
    quote:
      "In the ancient city of London, on a certain autumn day in the second quarter of the sixteenth century, a boy was born to a poor family of the name of Canty, who did not want him.",
  },
  {
    isbn: 109,
    title: "The Horse's Tale",
    author: "Mark Twain",
    writtenYear: 1907,
    genre: "Fiction",
    pages: 153,
    rank: 4,
    quote: "I am Buffalo Bill's horse",
  },
  {
    isbn: 110,
    title: "The Mysterious Stranger",
    author: "Mark Twain",
    writtenYear: 1916,
    genre: "Novella",
    pages: 176,
    rank: 5,
    quote: "IT was in 1590—winter.",
  },
  {
    isbn: 111,
    title: "Eugene Onegin",
    author: "Aleksandr Pushkin",
    writtenYear: 1833,
    genre: "Romance",
    pages: 224,
    rank: 1,
    quote:
      "Мой дядя самых честных правил, когда не в шутку занемог, он уважать себя заставил и лучше выдумать не мог.",
  },
  {
    isbn: 112,
    title: "Ruslan and Lyudmila",
    author: "Aleksandr Pushkin",
    writtenYear: 1820,
    genre: "Fairy tale",
    pages: 320,
    rank: 2,
    quote: "Дела давно минувших дней, преданья старины глубокой.",
  },
  {
    isbn: 113,
    title: "The Bronze Horseman",
    author: "Aleksandr Pushkin",
    writtenYear: 1833,
    genre: "War story, Romance novel",
    pages: 261,
    rank: 4,
    quote: "На берегу пустынных волн стоял он, дум великих полн",
  },
  {
    isbn: 114,
    title: "The Prisoner of the Caucasus",
    author: "Aleksandr Pushkin",
    writtenYear: 1821,
    genre: "Narrative poem",
    pages: 36,
    rank: 5,
    quote: "Прими с улыбкою, мой друг, свободной музы приношенье",
  },
  {
    isbn: 115,
    title: "The Captain's Daughter",
    author: "Aleksandr Pushkin",
    writtenYear: 1836,
    genre: "Historical novel",
    pages: 192,
    rank: 4,
    quote:
      "Отец мой Андрей Петрович Гринев в молодости своей служил при графе Минихе и вышел в отставку премьер-майором в 17.. году.",
  },
];

class Books {
  constructor(library) {
    this.library = library;
  }

  _getLibrary() {
    return this.library;
  }

  //     a. Выведите в console названия всех книг.

  getBookTitle() {
    return this._getLibrary().map((elem) => elem.title);
  }

  //     b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате

  getPopularBooks() {
    return this._getLibrary()
      .filter((book) => book.rank > 4)
      .map((book) => {
        return `Автор: "${book.author}", книга: "${book.title}", рейтинг: "${book.rank}"`;
      });
  }

  //     c. Отсортируйте библиотеку по году выпуска книг

  sortBooksByYear() {
    return this._getLibrary().sort((a, b) => a.writtenYear - b.writtenYear);
  }
}

const test = new Books(books);
console.log(test.getBookTitle());
console.log(test.getPopularBooks());
console.log(test.sortBooksByYear());
