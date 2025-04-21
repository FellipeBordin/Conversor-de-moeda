/* documnet -> HTML
getElementById > tras um elemento pelo ID
getElemntByClassName > tras todos elementos pela classe
getElemntByTagName > tras todos os elementos com essa TAG
getElemntByName > tras todos os elementos com esse NAME

querySelector > tra um elemento, o primeiro que encontrar
uqerySelectorALL > tras todos os elementos que encontrar */
 
/*
const input = document.querySelector("#main-input")

function cliqueiNoBotão(){
    console.log(input.value)

}

function digiteiNoinput() {
    console.log("Digitei no input")
}
 */

//const input = document.querySelector("#main-input")
const select = document.querySelector("select")
//const button = document.querySelector(".main-button")
function troqueiValor() {
    console.log("Troquei de valor")
}

select.addEventListener("keypress",troqueiValor)