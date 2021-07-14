const num1 = document.getElementById('num1')
console.log(num1)
num1.addEventListener('click', function (event) {
    // console.log(event.target.innerText)
    // console.log('Button Clicked')
    display.innerText += event.target.innerText
})

const num2 = document.getElementById('num2')
console.log(num2)
num2.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const num3 = document.getElementById('num3')
console.log(num3)
num3.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const num4 = document.getElementById('num4')
console.log(num4)
num4.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const num5 = document.getElementById('num5')
console.log(num5)
num5.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const num6 = document.getElementById('num6')
console.log(num6)
num6.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const num7 = document.getElementById('num7')
console.log(num4)
num7.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const num8 = document.getElementById('num8')
console.log(num8)
num8.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const num9 = document.getElementById('num9')
console.log(num9)
num9.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const num0 = document.getElementById('num0')
console.log(num0)
num0.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const divide = document.getElementById('divide')
console.log(divide)
divide.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const add = document.getElementById('add')
console.log(add)
add.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const minus = document.getElementById('minus')
console.log(minus)
minus.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const multi = document.getElementById('multi')
console.log(multi)
multi.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

const decimal = document.getElementById('decimal')
console.log(decimal)
decimal.addEventListener('click', function (event) {
    display.innerText += event.target.innerText
})

//
const equal = document.getElementById('equal')
let total = 0
console.log(equal)
equal.addEventListener('click', function (event) {
    const parser = math.parser()
    parser.evaluate('f = typed({"number": f(x) = x ^ 2 - 5})')
    math.evaluate('display.innerText')
    display.innerText = event.total.innerText
})

// Clears display
const clear = document.getElementById('clear')
console.log(clear)
clear.addEventListener('click', function (event) {
    display.innerText = []
})