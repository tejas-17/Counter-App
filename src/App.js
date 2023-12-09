import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
    history: [],
  };

  incrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }), () => this.updateHistory());
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  resetHistory = () => {
    this.setState({
      history: [],
    });
  };

  decrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }), () => this.updateHistory());
  };

  updateHistory = () => {
    const { count, history } = this.state;
    const updatedHistory = [count, ...history.slice(0, 4)];
    this.setState({
      history: updatedHistory,
    });
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

        <History history={history} />
      </div>
    );
  }
}

const History = ({ history }) => (
  <div className="history-container">
    <h2>History</h2>
    {history.map((item, index) => (
      <div key={index} className="history-card">
        {item}
      </div>
    ))}
  </div>
);

export default App;
