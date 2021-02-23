# Introductory Test Set Up
This project is intended to be a sample test suite to outline the setup of your tests

##Installation
This project has a package.json file attached so you can simply run npm install to get the project dependencies. 

To build from scratch install mocha and chai as developmet dependencies. 
npm install mocha chai --save-dev 

Update the scripts folder in your package-json file to include "test": "mocha" . This lets node know that your test runner is mocha.
  "scripts": {
    "test": "mocha"
  },

By default, mocha expects your tests to reside in a test folder off the root of your project.

Create this folder and add your tests here. More advanced setups with more files may locate test specs with their accompany file. For now, we will use the test folder

##Running tests
Any test files located in the test directory will be executed by using the command npm test



