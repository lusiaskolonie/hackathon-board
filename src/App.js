import React, { Component } from 'react';
import ScoreBox from './ScoreBox'
import TimeBox from './TimeBox'
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {

  client_id = '7e996dd32645cda65fd7'
  client_secret = '0965b089b95d0aba2e8bbebc019c39424355e6c6'

  state = {
    scoreTeam: {},
    team: [
      {
        name: 'BorBok',
        git: ['https://api.github.com/repos/IroncodeCS/daily-report'],
        score: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      },
      {
        name: 'โคตรเอาเยดโด้วโคตรคูล',
        git: ['https://api.github.com/repos/banyawat/slackbot'],
        score: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      },
      {
        name: 'Fascist',
        git: ['https://api.github.com/repos/ypsuttiluk/daily-report-hackaton'],
        score: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    ]
  }

  getParameterByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  componentDidMount() {


    // 
    // let github_code = this.getParameterByName('code')
    // if (github_code) {
    //   console.log(github_code)
      // axios.post(`https://github.com/login/oauth/access_token?client_id=${this.client_id}&client_secret=${this.client_secret}&code=${github_code}`)
      // .then((res)=>{
      //   console.log(res)
      // })
    // }
    // 

    let {scoreTeam} = this.state.scoreTeam
    if (!scoreTeam) {
      scoreTeam = {}
    }
    let access_token = 'eeb51d8498d7729e76002ecf33c36898e5e51043'

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
            <ScoreBox repo={childTeam.git[0]} point={childTeam.score} key={index} team={childTeam.name} lastUpdate={`${this.state.scoreTeam[childTeam.name]}`}/>
          )
        })}
      </div>
    );
  }
}

export default App;
