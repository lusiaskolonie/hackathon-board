import React, { Component } from 'react';
import './App.css';

class ScoreBox extends Component {

  state = {
    point: 0
  }

  componentDidMount() {
    let point = 0
    this.props.point.map((p) => {
      point += p
    })
    this.setState({point})
  }

  render() {
    return (
      <div className="score-box">
        <p className="score-title">{this.props.team}</p>
        <div>
          <p className="last-update">Point</p>          
          <p className="score-text">{this.state.point}</p>     
        </div>
      </div>
    );
  }
}

export default ScoreBox;
