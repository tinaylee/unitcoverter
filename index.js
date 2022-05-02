// Grab the number to convert from the DOM
let numToConvert = document.getElementById("num-to-convert").innerText;
// Convert string to float
numToConvert = parseFloat(numToConvert)
// Grab ids of text to change
let metersInFeet = document.getElementById("meters-in-feet")

let num = document.getElementsByClassName("num")
for (var i = 0; i < num.length; i++) {
    num[i].textContent = numToConvert
}

console.log(num)


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
    let gallons = numToConvert / 4.546
    return Math.round(gallons*1000)/1000
}

function gallonsToLiters() {
    let liters = numToConvert * 4.546
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

//function to change all "num"

function pageLoad() {
    document.getElementById("meters-in-feet").textContent = metersToFeet()
    document.getElementById("feet-in-meters").textContent = feetToMeters()
    document.getElementById("liters-in-gallons").textContent = litersToGallons()
    document.getElementById("gallons-in-liters").textContent = gallonsToLiters()
    document.getElementById("kilograms-in-pounds").textContent = kilogramsToPounds()
    document.getElementById("pounds-in-kilograms").textContent =  poundsToKilograms()
}

// Call functions on pageload
window.onload = pageLoad();