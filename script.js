'use strict'

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10; //откат за посредника
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
}

const getAllServicePrices = function (allServicePrices) {
    allServicePrices = servicePrice1 + servicePrice2;
    return allServicePrices;
}

const getFullPrice = function (fullPrice) {
    fullPrice = screenPrice + getAllServicePrices();
    return getFullPrice;
}

const getTitle = function (string) {
    string = string.trim(string).toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getServicePercentPrices = function () {
    return servicePercentPrice = fullPrice - (fullPrice * (rollback / 100)); //полная стоимость за вычетом отката
}

showTypeOf(getTitle(title));
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());




// console.log(getRollbackMessage(fullPrice));
// console.log(typeof title);
// console.log(typeof screenPrice);
// console.log(typeof adaptive);

// console.log(screens.length);
// console.log(servicePercentPrice);

// console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юан");



// console.log("Стоимость верстки экранов " + screenPrice + " RUB");
// console.log("Стоимость верстки экранов " + screenPrice * 0.010706 + " $");
// console.log("Стоимость верстки экранов " + screenPrice * 0.39537 + " UAH");
// console.log("Стоимость верстки экранов " + screenPrice * 0.078404 + " CNY");
// console.log('\n');
// console.log("Полная стоимость разработки " + fullPrice + " RUB");
// console.log("Полная стоимость разработки " + fullPrice * 0.010706 + " $");
// console.log("Полная стоимость разработки " + fullPrice * 0.39537 + " UAH");
// console.log("Полная стоимость разработки " + fullPrice * 0.078404 + " CNY");
// console.log('\n');
// console.log(screens.toLowerCase());
// console.log('\n');
// console.log(screens.split(" "));

