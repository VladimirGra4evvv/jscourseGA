// 1) Повесить на кнопку обработчик события click и реализовать такой функционал:
// В input[type = text] можно ввести цвет: red, green, blue и так далее.
// По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style = "backgroundColor: " квадрата
// Работать должно так: ввели в input[type = text] yellow, по нажатию на кнопку значение input[type = text] 
// попадает в свойство style = "backgroundColor: yellow" и фон квадрата должен поменяться
// 2) В кружке(который внутри квадрата) есть кнопка.Дать ей свойство style = "display: none; "
// 3) Повесить на input[type = range] обработчик события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение input[type = range] необходимо заносить в свойства ширины и высоты кружка(который внутри квадрата)(height и width)(в процентах!!)

const btn = document.getElementById('btn')
const text = document.getElementById('text')
const eBtn = document.getElementById('e_btn')
const range = document.getElementById('range')
let value
const circle = document.getElementById('circle')
let color
const rangeSpan = document.getElementById('range-span')

function myRange() {
    value = range.value
    rangeSpan.textContent = value
    return rangeSpan.textContent
}

btn.addEventListener("click", function () {
    color = text.value
    document.getElementById('square').style.backgroundColor = color
})

range.addEventListener("input", function () {
    console.log(myRange())
    document.getElementById('circle').style.width = myRange() + '%'
    document.getElementById('circle').style.height = myRange() + '%'
})

eBtn.addEventListener("click", function () {
    document.getElementById('e_btn').style.display = 'none'
})