import React, { Component } from 'react';
import ScoreBox from './ScoreBox'
import TimeBox from './TimeBox'
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    scoreTeam: {},
    team: [
      {
        name: 'BorBok',
        git: ['https://api.github.com/repos/IroncodeCS/daily-report'],
        score: [500,0,0,0,0,0,0,0,0,0,0,0,0]
      },
      {
        name: 'โคตรเอาเยดโด้วโคตรคูล',
        git: ['https://api.github.com/repos/banyawat/slackbot'],
        score: [500,0,0,0,0,0,0,0,0,0,0,0,0]
      },
      {
        name: 'Fascist',
        git: ['https://api.github.com/repos/ypsuttiluk/daily-report-hackaton'],
        score: [500,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    ]
  }

  render() {
    return (
      <div className="App">
      
        <TimeBox/>

        {this.state.team.map((team, index)=>{
          return (
            <ScoreBox repo={team.git[0]} point={team.score} key={index} team={team.name} lastUpdate={`${this.state.scoreTeam[team.name]}`}/>
          )
        })}
      </div>
    );
  }
}

export default App;
