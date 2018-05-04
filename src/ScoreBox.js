import React, { Component } from 'react';
import './App.css';

class ScoreBox extends Component {
  render() {
    return (
      <div className="score-box">
        <p className="score-title">{this.props.team}</p>
        <div>
          <p className="last-update">Last Updated</p>
          <p className="time-updated">{this.props.lastUpdate}</p>
        </div>
      </div>
    );
  }
}

export default ScoreBox;
