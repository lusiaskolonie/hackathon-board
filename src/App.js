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
        git: ['https://api.github.com/repos/IroncodeCS/daily-report']
      },
      {
        name: 'ตู่และผองเพื่อน',
        git: [
              'https://api.github.com/repos/ai2mii/line-hackathon'
             ]
      },
      {
        name: 'โคตรเอาเยดโด้วโคตรคูล',
        git: ['https://api.github.com/repos/banyawat/slackbot']
      },
      {
        name: 'Fascist',
        git: ['https://api.github.com/repos/ypsuttiluk/daily-report-hackaton']
      }
    ]
  }

  

  componentDidMount() {
    let {scoreTeam} = this.state.scoreTeam
    if (!scoreTeam) {
      scoreTeam = {}
    }
    let access_token = '8e032518869aad58c5da13dfcf3b3f33b6f24d44'

    this.state.team.map((member)=>{
      member.git.map((repo)=>{

        axios.get(`${repo}?access_token=${access_token}`)
          .then((res) => {
            scoreTeam[member.name] = new Date(res.data.pushed_at)
            this.setState({scoreTeam})
          })

      })
    }) // duplicate สัสอย่าใส่ใจ กุรีบ

    setInterval(()=>{
      this.state.team.map((member)=>{
        member.git.map((repo)=>{
  
          axios.get(`${repo}?access_token=${access_token}`)
            .then((res) => {
              scoreTeam[member.name] = new Date(res.data.pushed_at)
              this.setState({scoreTeam})
            })
  
        })
      })
    },5000)
    
  }

  render() {
    return (
      <div className="App">
      
        <TimeBox/>

        {this.state.team.map((childTeam, index)=>{
          return (
            <ScoreBox key={index} team={childTeam.name} lastUpdate={`${this.state.scoreTeam[childTeam.name]}`}/>
          )
        })}
      </div>
    );
  }
}

export default App;
