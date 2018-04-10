# haxrana
React client application for haxrana music
This project was bootstrapped with Create React App.

## Starting App
```
npm install
npm start
```
starts the app at [http://localhost:3000](http://localhost:3000)

## React-Express connections
The proxy URL in package.json connects the React Client App to the Express API
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
},
"proxy": "http://localhost:5000"
```
