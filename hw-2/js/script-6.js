"use strict";

/**
 * Функция получающая на вход 2 аргумента и название математическо операции
 * В результате в зависимости от  переданного значения операции (использовать switch) выполнить одну из арифметических
 * операций (использовать функции из задания 5) и вернуть полученное значение.
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case `addition`:
            return arg1 + arg2;
            break;
        case `subtraction`:
            return arg1 - arg2;
            break;
        case `multiplication`:
            return arg1 * arg2;
            break;
        case `division`:
            return arg1 / arg2;
            break;
    }
}

alert(mathOperation(6, 6, `addition`));
alert(mathOperation(6, 6, `subtraction`));
alert(mathOperation(6, 6, `multiplication`));
alert(mathOperation(6, 6, `division`));