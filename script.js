let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

title = "Урок 2";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 30000;
rollback = 20;
fullPrice = 85000;
adaptive = true;

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
console.log("Процент отката посреднику за работу " + (fullPrice * (rollback / 100)) + " RUB");





