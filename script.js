'use strict'

const title = prompt('Как называется ваш проект?', 'Разработка сайта');
const screens = prompt('Какие типы экранов нужно разработать?', 'Сложные');
const screenPrice = prompt('Сколько будет стоить данная работа?', '30000');
const adaptive = prompt('Нужен ли адаптив на сайте?');
const rollback = 20; //откат за посредника
let fullPrice; //полная стоимость
let servicePercentPrice; //полная стоимость за вычетом отката

const qustions1 = prompt('Какой дополнительный тип услуги нужен?', 'Установка на хост');
let servicePrice1 = prompt('Сколько это будет стоить?', '3000');
const qustions2 = prompt('Какой дополнительный тип услуги нужен?', 'Настройка HTTPS');
let servicePrice2 = prompt('Сколько это будет стоить?', '5000');


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " RUB");
console.log("Стоимость верстки экранов " + screenPrice * 0.010706 + " $");
console.log("Стоимость верстки экранов " + screenPrice * 0.39537 + " UAH");
console.log("Стоимость верстки экранов " + screenPrice * 0.078404 + " CNY");
console.log('\n');
console.log("Полная стоимость разработки " + fullPrice + " RUB");
console.log("Полная стоимость разработки " + fullPrice * 0.010706 + " $");
console.log("Полная стоимость разработки " + fullPrice * 0.39537 + " UAH");
console.log("Полная стоимость разработки " + fullPrice * 0.078404 + " CNY");
console.log('\n');
console.log(screens.toLowerCase());
console.log('\n');
console.log(screens.split(" "));
console.log('\n');
console.log('\n');
console.log('\n');


if (adaptive == 'да') {
    console.log(Boolean(true));
} else
    console.log(Boolean(false));

console.log('\n');

fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);

fullPrice = Math.round(fullPrice)
console.log("Процент отката посреднику за работу " + (fullPrice * (rollback / 100)) + " RUB");
console.log("Cтоимость работы: " + fullPrice + " RUB");

servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

console.log("Итоговая стоимость: " + servicePercentPrice + " RUB");

switch (true) {
    case servicePercentPrice > 30000:
        console.log("Даем скидку в 10%");
        break;
    case 15000 < servicePercentPrice && servicePercentPrice < 30000:
        console.log("Даем скидку в 5%");
        break;
    case 0 < servicePercentPrice && servicePercentPrice < 15000:
        console.log("Скидка не предусмотрена");
        break;
    default:
        console.log("Что то пошло не так");
}
