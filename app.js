const button = document.querySelector('button')
const img = document.querySelector('img')
const body = document.querySelector('body')
const h1 = document.querySelector("h1")
let toggle = false;
let interval

button.addEventListener('click', function(){

console.log("You pushed my button!")

function colorToggle() {
  interval = setInterval(angryChild, 1000)
}

function angryChild() {
  body.style.backgroundColor =  body.style.backgroundColor == "red" ? "blue" : "red"
}

colorToggle()

setTimeout(function() {

  console.log("You're in big trouble mister!")

  if(toggle === true) {
    img.src = "http://4.bp.blogspot.com/-XKwz4IgNuqQ/VUO6bWVJakI/AAAAAAAACJU/oKDW5qabs4s/s1600/ref-time-out.jpg8"
  } else {
    img.src = "http://www.ahaparenting.com/img/iStock_Timeout.jpg"
  }
  toggle =!toggle


  h1.textContent = "Now I'm in Time Out!"

  angryChild()

},5000)

})
