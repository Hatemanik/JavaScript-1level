"use strict";

/**
 * Функция ввода денег в банк, на входе получаем количество денег и затем выводим сообщение чот на
 * счет положили столько то рублей*/

function contribution(n) {
    let x = n % 10;
    switch (x) {
        case 1:
            return ("На счет положено " + n + " рубль");
            break;
        case 2:
            return ("На счет положено " + n + " рубля");
            break;
        case 3:
            return ("На счет положено " + n + " рубля");
            break;
        case 4:
            return ("На счет положено " + n + " рубля");
            break;
        case 5:
            return ("На счет положено " + n + " рублей");
            break;
        case 6:
            return ("На счет положено " + n + " рублей");
            break;
        case 7:
            return ("На счет положено " + n + " рублей");
            break;
        case 8:
            return ("На счет положено " + n + " рублей");
            break;
        case 9:
            return ("На счет положено " + n + " рублей");
            break;
        case 0:
            return ("На счет положено " + n + " рублей");
            break;
        case 11:
            return ("На счет положено " + n + " рублей");
            break;
    }
    let z = n % 100;
    switch (z) {
        case 11:
            return ("На счет положено " + n + " рубль");
            break;
    }
}

console.log(contribution(parseInt(Math.floor(prompt("Введите количество денег,которые будут внесены на счет")))));

/* if (x = 2) {
        return ("На счет положено "+ n + " рубль");
    } else if (2 <= x <= 4) {
        return ("На счет положено "+ n + "рубля");
    } else if ((5 <= x <= 9) && (x = 0) && (x = 11 % 100)) {
        return ("На счет положено "+ n + "рублей");
    }*/