// function beQuiet() {
//   console.log("It's been 20 seconds since I've spoken to you.")
// }
//
// function beLoud() {
//   console.log("Shut up!!!!")
// }
//
// function message1() {
//   console.log("1")
// }
//
// function message2() {
//   console.log("2")
// }
//
// function message3() {
//   console.log("3")
// }
//
// setTimeout(beQuiet, 20000)
// setTimeout(beLoud, 10000)
//
//
// setInterval(message3, 3000)
// setInterval(message1, 1000)
// setInterval(message2, 2000)


let greet = function() {
  console.log("Hello")
}

let interval = setInterval(function(){

}, 2000)

setTimeout(greet(interval), 10000)
//
// let interval = setInterval(function() {
//   console.log("Hello")
// },2000)
