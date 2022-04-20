// 1* Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. Вывести в консоль результат работы функции с возрастами 17, 18, 61
console.log("\n// 1")
function TEST1(age) {
    if (age < 18) {
        console.log("You don`t have access cause your age is " + age + " It`s less then");
    } else if (age >=  18 && age <  60) {
        console.log("Welcome!");
    } else if (age  > 60) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
}};

let mas1 = [17, 18, 61];
mas1.forEach(i => { 
    TEST1(i);
});

console.log("++++++++++++++++++++++++++++++++++++");
// 2* Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
console.log("\n// 2");
function TEST1(age) {
    let x = "test"
    if (typeof(age) == typeof (x)){
      console.log("Error");
      throw new UserException("Тип даных не Number");
    }

    if (age < 18) {
        console.log("You don`t have access cause your age is " + age + " It`s less then");
    } else if (age >=  18 && age <  60) {
        console.log("Welcome!");
    } else if (age  > 60) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }    
};

let mas2 = [17, "teststring", 18, 61];
mas1.forEach(i => { 
    TEST1(i); 
});

console.log("++++++++++++++++++++++++++++++++++++");
// 3** Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
console.log("\n// 3");
function TEST1(item) {
    let age = parseInt(item);
    let x = "test";
    if (typeof(age) == typeof (x) || isNaN(age) == true){
        console.log("Error");
        throw new UserException("Тип даных не Number");
    }

    if (age < 18) {
        console.log("You don`t have access cause your age is " + age + " It`s less then");
    } else if (age >=  18 && age <  60) {
        console.log("Welcome!");
    } else if (age  > 60) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }    
};


let mas3 = [17, 18, 61, "2", "teststring"];
mas1.forEach(i => { 
    console.log("----------------------------");
    TEST1(i) 
});

console.log("++++++++++++++++++++++++++++++++++++");
// 4*** Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке. 
// HTML файл приложил в папку с заданием.
console.log("\n// 4")
function TEST1(item) {
    let age = parseInt(item);
    let x = "test";
    if (typeof(age) == typeof (x) || isNaN(age) == true){
        console.log("Error");
        throw new UserException("Тип даных не Number");
    }

    if (age < 18) {
        console.log("You don`t have access cause your age is " + age + " It`s less then");
    } else if (age >=  18 && age <  60) {
        console.log("Welcome!");
    } else if (age  > 60) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }    
};

var age = prompt("Введите Ваш возраст");
TEST1(age);