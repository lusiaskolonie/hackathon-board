import React, { Component } from 'react';
import './App.css';

class TimeBox extends Component {

  state = {
    time: "00:00:00"
  }

  componentDidMount() {
    setInterval(() => {
    var date = new Date(); 
    let h = date.getHours().toString().padStart(2, "0")
    let m = date.getMinutes().toString().padStart(2, "0");
    let s = date.getSeconds().toString().padStart(2, "0");
    let currentTime = `${h}:${m}:${s}`
    this.setState({time: currentTime})
    },1000)
  }

  render() {
    return (
      <div className="time-box">
      
        <div className="time-text">{this.state.time}</div>
        <div className="project-text">THiNKNET mini-Hackathon</div>
      </div>
    );
  }
}

export default TimeBox;
