const adv = document.querySelector('.adv').remove()
// console.log(adv)

const book = document.querySelectorAll('.book')
console.log(book)

book[0].before(book[1])
book[2].before(book[4])
book[5].after(book[2])

document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

const book3 = document.querySelectorAll('.book h2 a')[2]
book3.innerHTML = 'Книга 3: this и Прототипы Объектов'

const list = document.querySelectorAll('ul li')
console.log(list)

//книга 2
list[9].after(list[12])
list[15].after(list[8])
list[12].after(list[14])

//книга 5
list[37].after(list[45])
list[40].after(list[38])
list[43].after(list[41])

// book.append
let li = document.createElement('li');
li.textContent = "Глава 8: За пределами ES6"
list[56].insertAdjacentElement('beforeBegin', li)