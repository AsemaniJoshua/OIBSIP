const UserInput = document.getElementById("UserInput");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");
const kelvin1 = document.getElementById("kelvin1");
const fahrenheit1 = document.getElementById("fahrenheit1");
const celcius = document.getElementById("celcius");
const celcius1 = document.getElementById("celcius1");
const Convert = document.getElementById("Convert");
const display = document.getElementById("display");

Convert.addEventListener("click", function () {
  let input = UserInput.value;
  
  if(isNaN(input)){
    alert("Please enter a number");
  }  
  else if (input === "") {
    alert("Please enter a value");
  } 
  else {

    if(fahrenheit.checked){
        let celcius_fahrenheit = ( (9/5) * input) +32;
        display.textContent = `${celcius_fahrenheit.toFixed(2)} °F`;
    }
    else if(kelvin.checked){
        let celcius_kelvin = input + 273.15;
        display.textContent = `${celcius_kelvin.toFixed(2)} K`;
    }
    else if(kelvin1.checked){
        let fahrenheit_kelvin = (input - 32) * (5/9) + 273.15;
        display.textContent = `${fahrenheit_kelvin.toFixed(2)} K`;
    }
    else if(fahrenheit1.checked){
        let kelvin_fahrenheit = (input - 273.15) * (9/5) + 32;
        display.textContent = `${kelvin_fahrenheit.toFixed(2)} °F`;;
    }
    else if(celcius.checked){
        let fahrenheit_celcius = (input - 32) * (5/9);
        display.textContent = `${fahrenheit_celcius.toFixed(2)} °C`;;
    }
    else if(celcius1.checked){
        let kelvin_celcius = input - 273.15;
        display.textContent = `${kelvin_celcius.toFixed(2)} °C`;;
    }
    else{
        alert("Please select a unit");
    }
  }
});



