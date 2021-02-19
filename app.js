// create weather application
// user types in zip code from command line and it retrieves a weather message from remote service
  // api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
  //  api key: 70a390896e3dd463d387be85156412d3
  // url 



// ensure you can retrieve params from command line +
// ensure only digits are provided +
// ensure incorrect entries generate an error +
// call remote api and pass zip code
// ensure remote api returns a response
// ensure remote url problems are handled with an error
// ensure remote parsed to valid json
// ensure remote json has the values
// print message back to the screen

var https = require('https');
var fetch = require('node-fetch');


function getArguments(inString) {
  return inString.slice(2);
}

function validateInput(inValue){
  const regexp = /^\d{5}$/;
  if (inValue !== null && regexp.test(inValue) && +inValue > 0) {
    return true;
  } else {
    return new Error('Invalid user input.');
  }

}
function getRemoteUrl (zipCode) {
    if(validateInput(zipCode)){
      return `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us`;
    } else {
      throw (new Error('Unable to process request'));
    }
}

async function getOpenAPIWeather (zipCode , callback) {
  const url = getRemoteUrl(zipCode);
  return await fetch(url)
  .then((response) => response.json())
  .then(data => callback(data))
  .catch(error => printMessage(new Error('Unable to process request')));
}

function convertKelvenToFahrenheit (value) {
  return Math.ceil((parseFloat(value) * 1.8) -459.67);
}

function printMessage(jsonObject) {
  let tempAsFloat = parseFloat()
  const msg = `The weather in ${jsonObject.name} is ${jsonObject.weather[0].description} and the temperature is ${convertKelvenToFahrenheit(jsonObject.main.temp)} degrees`;
  return msg;
}


initApp();
function initApp () {
  getArguments(process.argv).forEach((zip) => {
    getOpenAPIWeather(zip, printMessage);
  });
}


module.exports.getArguments = getArguments;
module.exports.validateInput = validateInput;
module.exports.getRemoteUrl = getRemoteUrl;
module.exports.convertKelvenToFahrenheit = convertKelvenToFahrenheit;
module.exports.printMessage = printMessage;
module.exports.getOpenAPIWeather = getOpenAPIWeather;
