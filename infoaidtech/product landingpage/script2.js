// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form for the submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the input temperature and the selected output unit
  const temperature = document.querySelector('#temperature').value;
  const unit = document.querySelector('input[name="unit"]:checked').value;

  // Convert the temperature to the selected unit
  let convertedTemperature;
  if (unit === 'celsius') {
    convertedTemperature = (temperature - 32) * 5 / 9;
  } else if (unit === 'fahrenheit') {
    convertedTemperature = temperature * 9 / 5 + 32;
  } else if (unit === 'kelvin') {
    convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
  }

  // Display the converted temperature
  const result = document.getElementById('result');
  result.textContent = `${temperature} degrees Fahrenheit is ${convertedTemperature} degrees ${unit}.`;
  console.log(result);
});
