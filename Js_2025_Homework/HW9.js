// 1. Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, вычисляющий площадь квадрата.
//    Настройте конструктор экземпляров объекта Square так, чтобы свойству name автоматически присваивалось значение square, а sides для свойства автоматически устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.
//    Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, и вызовите его методы calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`The perimeter of the ${this.name} is ${perimeter}`);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super('square', 4, sideLength);
  }

  calcArea() {
    const area = this.sideLength ** 2;
    console.log(`The area of the square is ${area}`);
  }
}

const square = new Square(5);
square.calcPerimeter();
square.calcArea();

// 2. Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User
//    имеет закрытую функцию updatePassword() и публичную функцию resetPassword(). Класс Admin имеет публичную функцию deleteUser().

// Параметры для класса User
//     username: String
//     (private) password: String

// Параметры для класса Admin
//     username: String
//     (private) password: String

// Свойства класса Admin
// Следующие свойства также должны быть добавлены в класс Admin. Они не являются параметрами.
//     isAdmin = true;

// Функции класса User
// resetPassword(newPassword)
// Вызывает закрытую функцию updatePassword с новым паролем.

// updatePassword(newPassword)
// Устанавливает пароль пользователя на newPassword. Это частная функция.

// Функции класса Admin
// deleteUser(userToDelete): Принимает строку userToDelete и возвращает строковое сообщение: "Пользователь [userToDelete] был удален."

// Результат
// [testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

// Ограничения
// Пароль должен быть частной переменной
// updatePassword должен быть частной функцией
// Вы должны использовать ключевое слово extends для создания связи между пользователем и администратором

class User {
  #password;
  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  #updatePassword(newPassword) {
    this.#password = newPassword;
  }

  resetPassword(newPassword) {
    this.#updatePassword(newPassword);
    return 'Password updated';
  }
}

class Admin extends User {
  constructor(username, password) {
    super(username, password);
    this.isAdmin = true;
  }

  deleteUser(userToDelete) {
    return `User ${userToDelete} was deleted`;
  }
}

const testUser = new User('user', '12345');
const testAdmin = new Admin('admin', 'admin');
console.log([testAdmin, testUser]);
