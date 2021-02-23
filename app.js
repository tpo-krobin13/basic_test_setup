var fetch = require('node-fetch');
const config = require('./config');

function getArguments (inString) {
  return inString.slice(2);
}

function validateInput(inValue) {
  const regexp = /^\d{5}$/;
  if (inValue !== null && regexp.test(inValue) && +inValue > 0) {
    return true;
  } else {
    return new Error('Invalid user input.');
  }
}

function getRemoteUrl (zipCode) {
  if (validateInput(zipCode)) {
    const str = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${config.apiKey}`;
    return str;
  } else {
    throw (new Error('Unable to process request'));
  }
}

async function getOpenAPIWeather (zipCode, callback) {
  const url = getRemoteUrl(zipCode);
  return await fetch (url)
    .then((response) => response.json())
    .then(data => callback(data))
    .catch(error => printMessage(new Error('Unable to process request')));
}

function convertKelvenToFahrenheit (value) {
  return Math.ceil((parseFloat(value) * 1.8) - 459.67);
}

function printMessage (jsonObject) {
  let tempAsFloat = parseFloat();
  const msg = `The weather in ${jsonObject.name} is ${jsonObject.weather[0].description} and the temperature is ${convertKelvenToFahrenheit(jsonObject.main.temp)} degrees`;
  console.log(msg);
  return msg;
}


initApp();
function initApp () {
  getArguments(process.argv).forEach((zip) => {
    getOpenAPIWeather(zip, printMessage);
  });
}

export default all;

