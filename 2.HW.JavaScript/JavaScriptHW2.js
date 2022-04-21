// 1.  Скрипт должен на вход принимать строку.
// 2.  После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
// 3.  Минимум 5 символов в строке
// 4.  Максимум 64 символа в строке
// 5.  В строке должны быть буквы
// 6.  Должна быть хотя бы одна буква в верхнем регистре
// 7.  Должна быть хотя бы одна цифра
// 8.  Должна быть хотя бы одна @
// 9.  Строка не должна быть пустой

function letters(str) {
    return /[a-zA-Zа-яА-Я]/.test(str);
  }

function capital_letters(str) {
    return /[A-ZА-Я]/.test(str);
  }

function numbers(str) {
    return /[0-9]/.test(str);
  }

function result(str){
  let testNumberValue = 10; //Для проверки типа данных
    if (!str) {
    console.log("Строка не должна быть пустой");
  } else if (typeof(str) == typeof (testNumberValue)){
    console.log("Тип данных должен быть String");
  } else if (str.length < 5 || str.length > 64) {
    console.log("Строка должна содержать от 5 до 64 символов");
  } else if (!letters(str)) {
    console.log("Строка должна содержать буквы");
  } else if (!capital_letters(str)) {
    console.log("Строка должна содержать минимум одну букву в верхем регистре");
  } else if (!numbers(str)) {
    console.log("Строка должна содержать минимум одну цифру");
  } else if (!str.includes("@")) {
    console.log("Строка должна содержать минимум одну @");
  } else {
    console.log("Отлично!");
  }
}

//Тест
result("аАфФ12@");

