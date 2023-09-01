'use strict'


// объект appData
const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10, //откат за посредника
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {           //метод
        appData.asking()
        appData.getAllServicePrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()

        appData.logger()
    },

    // Функции
    // Функция проверки на текст
    isText: function (n) {
        if (typeof n !== 'string') {
            return false;
        } else if (parseFloat(n)) {
            return false;
        } else if (n.trim() === '') {
            return false;
        } else {
            return true;
        }
    },
    // Функция проверки на число
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) //уточнить выражение && isFinite(num)
    },

    getAllServicePrices: function () {
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)) //полная стоимость за вычетом отката
    },

    getTitle: function (string) {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }
    },

    logger: function () {
        console.log(appData.fullPrice)
        console.log(appData.servicePercentPrice)
        console.log(appData.screens)
    },


    // расчет проекта
    asking: function () {

        for (let i = 0; i < 1; i++) {
            appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки")
            if (appData.isText(appData.title) !== true) {
                alert("Название введено некоректно. Название должно начинаться с букв")
                i--
            }
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?")
            let price = 0

            do {
                price = +prompt("Сколько будет стоить данная работа?")
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?")
            let price = 0

            do {
                price = +prompt("Сколько это будет стоить?")
            } while (!appData.isNumber(price))

            appData.services[name] = +price
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")

    }

}

appData.start()
