Questioner
Crowd-source questions for a meetup. ​ Questioner​​ helps the meetup organizer prioritize questions to be answered. Other users can vote on asked questions and they bubble to the top or bottom of the log.

UI without any Framework
HTML
CSS
Javascript (ES6)
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites
To install this API on your your computer, you need to first clone this repository or download the zip file. Once this is set up, you are going to need the following packages. ``` [NodeJs]

 [Node Package Installer - NPM] _this usually comes with Node.
 ```
Installing
Installing this application is fairly straightforward. After cloning this repository to your local environment,CD into the package folder on your favorite terminal... bash, command prompt or the like and run the following:

  > npm install
This runs the following script on the background processes;

  > nodemon app.js --exec babel-node --presets babel-preset-es2015`
This command starts the dev server on port 5000.

Running the tests
To run test we simply run the following on the command prompt

  > npm test
This runs the following script on the background processes: >"clear && NODE_ENV=test nyc --reporter=text --reporter=lcov mocha --timeout 25000 --require babel-register {src,src/test/**}/*.spec.js --exit || true"

Author
Copain Fabrice Bienaime
