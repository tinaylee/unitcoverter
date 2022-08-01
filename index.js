// Grab the number to convert from the DOM
let numToConvert = document.getElementById("num-to-convert").innerText;
// Convert string to float
numToConvert = parseFloat(numToConvert)

let num = document.getElementsByClassName("num")
for (var i = 0; i < num.length; i++) {
    num[i].textContent = numToConvert
}

// Conversion functions
function metersToFeet() {
    let feet = numToConvert * 3.280
    return Math.round(feet*1000)/1000
}

function feetToMeters() {
    let meters = numToConvert / 3.280
    return Math.round(meters*1000)/1000
}

function litersToGallons() {
    let gallons = numToConvert * 0.264
    return Math.round(gallons*1000)/1000
}

function gallonsToLiters() {
    let liters = numToConvert / 0.264
    return Math.round(liters*1000)/1000
}

function kilogramsToPounds() {
    let pounds = numToConvert * 2.204
    return Math.round(pounds*1000)/1000
}

function poundsToKilograms() {
    let kilograms = numToConvert / 2.204
    return Math.round(kilograms*1000)/1000
}

//convert on page load
function pageLoad() {
    document.getElementById("meters-conversion").textContent = numToConvert + " meters = " + metersToFeet() + " feet | " + numToConvert + " feet = " + feetToMeters() + " meters"
    
    document.getElementById("liters-conversion").textContent = numToConvert + " liters = " + litersToGallons() + " gallons | " + numToConvert + " gallons = " + gallonsToLiters() + " liters"
    
    document.getElementById("kilograms-conversion").textContent = numToConvert + " kilograms = " + kilogramsToPounds() + " pounds | " + numToConvert + " pounds = " + poundsToKilograms() + " kilograms"
}

// Call functions on pageload
window.onload = pageLoad();