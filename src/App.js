import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,//initialising count
      history: [],//intialising history list
    };
  }

  incrementCounter = () => {
    const { count } = this.state;
   
      this.setState(
        {
          count: count + 1, //increment counter on click
        },
        () => this.updateHistory(this.state.count)
      );
    
  };

  reset = () => {
   
  
      this.setState(
        {
          count:0 //reset counter
        }
      );
    
  };


  resetHistory = () => {
   
  
    this.setState(
      {
        history: [] //reset list 
      }
    );
  
};


  decrementCounter = () => {
    const { count } = this.state;
  
      this.setState(
        {
          count: count - 1,//decrement on click
        },
        () => this.updateHistory(this.state.count)
      );
    
  };

  updateHistory = (value) => {
    // Keep track of the latest 5 results
    const { history } = this.state;
    if (history.length >= 5) {
      this.setState({
        history: [value, ...history.slice(0, 4)],
      });
    } else {
      this.setState({
        history: [value, ...history],
      });
    }
  };

  render() {
    const { count, history } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>Counter App</h1>
        </div>
        <div className="button-container">
          <button className="increment-button" onClick={this.incrementCounter}>
            Increment
          </button>
          <button className="decrement-button" onClick={this.decrementCounter}>
            Decrement
          </button>
          <button className="decrement-button" onClick={this.reset}>
            Reset
          </button>
          <button className="decrement-button" onClick={this.resetHistory}>
            Reset History
          </button>
        </div>

        <div className="count">
          Count: {count}
        </div>

        <div className="history-container">
          <h2>History</h2>
          {history.map((item, index) => (
            <div key={index} className="history-card">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
