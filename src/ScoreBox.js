import React, { Component } from 'react';
import './App.css';

class ScoreBox extends Component {

  state = {
    point: 0,
    showMedal: 'hide'
  }

  componentDidMount() {
    let point = 0
    this.props.point.map((p) => {
      point += p
    })
    this.setState({point})

    if (this.props.medal) {
      this.setState({showMedal: 'show'})
    }
  }

  

  render() {
    return (
      <div className="score-box">
        <div className="score-detail">
          <p className="score-title">{this.props.team}</p>
          <div>
            <span className="score-text">{this.state.point}</span>
            <span className="last-update">Point</span>
          </div>
        </div>
        <div className="medal">
          <img className={`score-medal ${this.state.showMedal}`} src="https://firebasestorage.googleapis.com/v0/b/hack-board.appspot.com/o/modal.png?alt=media&token=2793c50d-e0b2-48b1-93cf-5504ec2b9c3f" width="50"/>
        </div>
      </div>
    );
  }
}

export default ScoreBox;
