/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// STORING INPUT VALUE
const inputEl = document.getElementById("input-field")

console.log(typeof inputValue)

// STORING PARAGRAPHS
const mtfEl = document.getElementById("meters-to-feet")
const ltgEl = document.getElementById("liters-to-gallons")
const ktpEl = document.getElementById("kilograms-to-pounds")

// STORING BUTTON ELEMENT
const btnEl = document.getElementById("convert-btn")    

// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
btnEl.addEventListener("click", function(){
    const inputValue = parseFloat(inputEl.value)

    const inFeet = (inputValue * 3.281).toFixed(3)
    const inMeters = (inputValue / 3.281).toFixed(3)
    mtfEl.textContent = `${inputValue} meters = ${inFeet} feet | ${inputValue} feet = ${inMeters} meters`

    const inGallons = (inputValue * 0.264).toFixed(3)
    const inLiters = (inputValue / 0.264).toFixed(3) 
    ltgEl.textContent = `${inputValue} liters = ${inGallons} gallons | ${inputValue} gallons = ${inLiters} liters`

    const inPounds = (inputValue * 2.204).toFixed(3)
    const inKilos = (inputValue / 2.204).toFixed(3) 
    ktpEl.textContent = `${inputValue} kilos = ${inPounds} pounds | ${inputValue} pounds = ${inKilos} kilos`
})

 