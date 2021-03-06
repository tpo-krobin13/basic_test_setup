const expect = require('chai').expect;
const app = require('../app');

describe('Mocha', function () {

  it('should run our tests using npm', function () {
    expect(true).to.be.ok;
  })
})

describe('App.js', function () {
  describe('getArguments', function () {
      var { getArguments } = require('../app.js');
      it('should remove first two commandLine arguments', function () {
        // Given
        const argumentString = ['/opt/homebrew/Cellar/node/15.8.0/bin/node','/Users/krobinson/Development/vsc/th_profile_app/app.js','Cinderella','otherUser'];

        // When 
        const actual = getArguments(argumentString);
        const expected = ['Cinderella','otherUser'];
        
        // Then
        expect(actual).to.deep.equal(expected);
      })
  })
  describe('validateInput', function () {
    var validateInput = require('../app.js').validateInput;
    it('should throw an error when letters are present', function () {
      //Given 
      let allLetters = 'ggggg';
      let fourLetters = '0000w';

      //when 
      let actual = validateInput(allLetters);

      //Then
      expect(actual).to.be.an('error');

      // When
      actual = validateInput(fourLetters);

      // Then
      expect(actual).to.be.an('error');
    })

    it('should throw an error when the incorrect number of digits is present', function () {
      
      let expected = 'error';
      let actual = validateInput('000');
      expect(actual).to.be.an('error');

      expected = 'error';
      actual = validateInput('000000');
       expect(actual).to.be.an('error');
    })


    it('should return true when five digits are provided', function () {
      
      let expected = 'error';
      let actual = validateInput('30331');
      expect(actual).to.be.true;

      expected = 'error';
      actual = validateInput('98736');
      expect(actual).to.be.true;
    })
    it('should throw an error when the value is less than 00001', function () {
      
      const expected = 'error';
      const actual = validateInput('00000');
      expect(actual).to.be.an('error');
    })
  })

  describe('convertKelvenToFahrenheit', function () {
    var convertKelvenToFahrenheit = require('../app.js').convertKelvenToFahrenheit;
    it('should properly convert Kelvin to Fahrenheit', function () {

      let expected = 47;
      let actual = convertKelvenToFahrenheit(281.47);
      expect(actual).to.equal(expected);

      expected = 81;
      actual = convertKelvenToFahrenheit(300);
      expect(actual).to.equal(expected);
    })
  })

  describe('printMessage', function () {
    var printMessage = require('../app.js').printMessage;
    var jsonData = JSON.parse('{"coord":{"lon":-84.5205,"lat":33.7224},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":281.47,"feels_like":278.23,"temp_min":280.93,"temp_max":282.15,"pressure":1016,"humidity":81},"visibility":10000,"wind":{"speed":3.09,"deg":40},"clouds":{"all":90},"dt":1613339034,"sys":{"type":1,"id":4155,"country":"US","sunrise":1613305398,"sunset":1613344885},"timezone":-18000,"id":0,"name":"Atlanta","cod":200}');

    it('should print the users weather string', function (done) {
      const expected = 'The weather in Atlanta is overcast clouds and the temperature is 47 degrees';
      const actual = printMessage(jsonData);

      expect(actual).to.equal(expected);
      done();
    })
  })
});

describe('getOpenAPIWeather', function () {
  var printMessage = require('../app.js').printMessage;
  var getOpenAPIWeather = require('../app.js').getOpenAPIWeather;
  var jsonData = JSON.parse('{"coord":{"lon":-84.5205,"lat":33.7224},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":281.47,"feels_like":278.23,"temp_min":280.93,"temp_max":282.15,"pressure":1016,"humidity":81},"visibility":10000,"wind":{"speed":3.09,"deg":40},"clouds":{"all":90},"dt":1613339034,"sys":{"type":1,"id":4155,"country":"US","sunrise":1613305398,"sunset":1613344885},"timezone":-18000,"id":0,"name":"Atlanta","cod":200}');
  before (() => {
    return getOpenAPIWeather(30331, printMessage).then((res) => actual = res);
  })
  it('should print the users weather string', function () {
  console.log("actual text: " + actual);
    expect(actual).is.not.empty;
  })
})