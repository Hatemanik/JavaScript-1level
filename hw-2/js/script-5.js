"use strict";

/*5. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
Обязательно использовать оператор return.*/

/**
 * Функция получает на входе 2 аргумента и выдает математические действия сложение / умножение
 * вычитание / деление с числами полученными на входе.
 * */

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

alert(addition(5, 5));
alert(subtraction(5, 5));
alert(multiplication(5, 5));
alert(division(5, 5));