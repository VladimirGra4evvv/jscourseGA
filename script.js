const title = prompt('Как называется ваш проект?', "Проект 1");
const screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
const screenPrice = prompt('Сколько будет стоить данная работа?', "12000");
const adaptive = prompt('Нужен ли адаптив на сайте?');
const rollback = 20;
const fullPrice = 85000;


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
console.log('\n');
console.log('\n');
console.log(title);
console.log(screens);
console.log(screenPrice);
if (adaptive == 'да') {
    console.log(Boolean(true));
} else
    console.log(Boolean(false));






