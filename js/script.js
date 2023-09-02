'use strict'
const title = document.getElementsByTagName('h1')[0]
const btnEliminate = document.getElementsByClassName('handler_btn')
const btnPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('.rollback input')
const spanRangeValue = document.querySelector('.rollback span')
const totalInput1 = document.getElementsByClassName('total-input')[0]
const totalInput2 = document.getElementsByClassName('total-input')[1]
const totalInput3 = document.getElementsByClassName('total-input')[2]
const totalInput4 = document.getElementsByClassName('total-input')[3]
const totalInput5 = document.getElementsByClassName('total-input')[4]
let screen = document.querySelectorAll('.screen')


console.log(title)
console.log(btnEliminate[0])
console.log(btnEliminate[1])
console.log(btnPlus)
console.log(otherItemsPercent)
console.log(otherItemsNumber)
console.log(inputRange)
console.log(spanRangeValue)
console.log(totalInput1)
console.log(totalInput2)
console.log(totalInput3)
console.log(totalInput4)
console.log(totalInput5)
console.log(screen)

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
