var valeur1 = document.getElementById("val1");
var valeur2 = document.getElementById("val2");
var addButton = document.getElementById("add");
var subButton = document.getElementById("sub");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var result = document.getElementById("result");
// console
console.log(valeur1)
console.log(valeur2)
console.log(addButton)
console.log(subButton)
console.log(multiplyButton)
console.log(divideButton)
console.log(result)

//fonction
function add(valeur1, valeur2) {
    result.value = Number.parseInt(valeur1) + Number.parseInt(valeur2);
}

function substract(valeur1, valeur2) {
    result.value = Number.parseInt(valeur1) - Number.parseInt(valeur2);
}

function multiply(valeur1, valeur2) {
    result.value = Number.parseInt(valeur1) * Number.parseInt(valeur2);
}

function divide(valeur1, valeur2) {
    result.value = Number.parseInt(valeur1) / Number.parseInt(valeur2);
}

addButton.addEventListener("click", function() {
    add(valeur1.value, valeur2.value)
})
subButton.addEventListener("click", function() {
    substract(valeur1.value, valeur2.value)
})
multiplyButton.addEventListener("click", function() {
    multiply(valeur1.value, valeur2.value)
})
divideButton.addEventListener("click", function() {
    divide(valeur1.value, valeur2.value)
})