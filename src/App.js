import React, { Component } from 'react';
import ScoreBox from './ScoreBox'
import TimeBox from './TimeBox'
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import firebase from 'firebase'

class App extends Component {

  state = {
    scoreTeam: {},
    team: [],
    champion: {
      team: '',
      point: 0
    }
  }

  teamList = []

  listTeamItem = (teams) => {
    this.teamList = []
    let allTeam = teams.val()
    Object.keys(allTeam).forEach((key) => {

      this.teamList.push(allTeam[key])
      this.setState({team: this.teamList})
      let totalPoint = 0
      allTeam[key].score.map((eachPoint) => {
        totalPoint += eachPoint
      })
      if (totalPoint > this.state.champion.point) {
        this.setState({'champion': {
          team: allTeam[key].name,
          point: totalPoint
        }})
      }
    })

  }

  componentDidMount() {

    var config = {
      apiKey: "AIzaSyDfY1aGSgIYSM98EiWaTt7tsATptCiO8qc",
      authDomain: "hack-board.firebaseapp.com",
      databaseURL: "https://hack-board.firebaseio.com",
      projectId: "hack-board",
      storageBucket: "hack-board.appspot.com",
      messagingSenderId: "519448554654"
    }
    firebase.initializeApp(config);
    
    var database = firebase.database();

    let team = database.ref().child('team');
    
    team.on('value', (teams)=>{
      this.listTeamItem(teams)
    })

    team.on('child_changed', (data) => {
      team.on('value', (teams)=>{
        this.listTeamItem(teams)
      })
    });

  }

  render() {
    return (
      <div className="App">
      
        <TimeBox/>

        {this.state.team.map((team, index)=>{

          if (team.name == this.state.champion.team) {
            team['medal'] = true
          }
          
          return (
            <ScoreBox medal={team.medal} repo={team.git[0]} point={team.score} key={index} team={team.name} lastUpdate={`${this.state.scoreTeam[team.name]}`}/>
          )
        })}
      </div>
    );
  }
}

export default App;
