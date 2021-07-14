const num1 = document.getElementById("num1")
console.log(num1)

num1.addEventListener('click', function (event){
    console.log(event.target.innerText)
    console.log('Button Clicked')
    diplay.innerText = event.target.innerText
})
