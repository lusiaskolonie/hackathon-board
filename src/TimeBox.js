import React, { Component } from 'react';
import './App.css';

class TimeBox extends Component {

  state = {
    time: "00:00:00"
  }
  
  remainingTime = 0

  msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000
    s = (s - ms) / 1000
    var secs = s % 60
    s = (s - secs) / 60
    var mins = s % 60
    var hrs = (s - mins) / 60
  
    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
  }
  

  componentDidMount() {
    setInterval(() => {
      let dateStart = new Date(2018, 4, 11,  17, 0);
      let currentDate = new Date();
      let timeDiff = Math.abs(currentDate.getTime() - dateStart.getTime());
      // let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); เก็บเอาไว้ใช้ยามยาก
      this.remainingTime = this.msToTime(timeDiff)

      this.setState({time: this.remainingTime})
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
