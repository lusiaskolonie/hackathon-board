import React, { Component } from 'react';
import './App.css';

class ScoreBox extends Component {

  state = {
    point: 0
  }

  componentWillReceiveProps() {
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
          <p className="last-update">Last Updated</p>
          <p className="time-updated">{this.props.lastUpdate}</p>
          <p className="last-update">Point</p>          
          <p className="score-text">{this.state.point}</p>     
          {/* <p><a target="_blank" href={this.props.repo.replace(/api.|repos\//g,'')}>Repo</a></p>      */}
        </div>
      </div>
    );
  }
}

export default ScoreBox;
