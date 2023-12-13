React Counter App Readme
Introduction
This React Counter App is a simple application that allows users to increment, decrement, reset the counter, and view the history of previous counts. It serves as a basic example of a React application with state management.

Getting Started
To clone this project, use the following command in your terminal:

bash
Copy code
git clone https://github.com/tejas-17/Counter-App.git
Available Scripts
In the project directory, you can run the following scripts:

npm install
Run this command to install the required dependencies for the Counter App.

npm start
Use this command to start the development server. Open http://localhost:3000 to view the app in your browser.

App Features
The Counter App has the following features:

Increment
Click the "Increment" button to increase the count by 1.

Decrement
Click the "Decrement" button to decrease the count by 1.

Reset
Click the "Reset" button to reset the count to 0.

Reset History
Click the "Reset History" button to clear the history of previous counts.

Count Display
The current count is displayed on the screen.

History Display
The history section shows the last 5 counts in reverse chronological order.

Code Structure
The main logic of the Counter App is implemented in the App component. The history is displayed using the History component.

javascript
Copy code
// App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // ... (state and methods)

  render() {
    // ... (JSX structure)
  }
}

const History = ({ history }) => (
  // ... (History component structure)
);

export default App;
Usage
Feel free to use, modify, or extend this Counter App for your React projects. It's a great starting point for learning React state management and component interactions. Enjoy coding!
