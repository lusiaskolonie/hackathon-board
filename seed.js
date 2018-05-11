var firebase = require('firebase')

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


var data = [
    {
        id: 1,
        name: 'BorBok',
        git: ['https://api.github.com/repos/IroncodeCS/daily-report'],
        score: [500,0,0,0,0,0,0,0,0,0,0,0,0]
    },
    {   
        id:2,
        name: 'โคตรเอาเยดโด้วโคตรคูล',
        git: ['https://api.github.com/repos/banyawat/slackbot'],
        score: [500,0,0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        id:3,
        name: 'Fascist',
        git: ['https://api.github.com/repos/ypsuttiluk/daily-report-hackaton'],
        score: [500,0,0,0,0,0,0,0,0,0,0,0,0]
    }
]

data.map((team, i) => {
    var newPostKey = firebase.database().ref().child('team').push().key
    var updates = {}
    var objectPath = '/team/' + newPostKey
    updates[objectPath + '/name'] = team.name
    updates[objectPath + '/git'] = team.git
    updates[objectPath + '/score'] = team.score
    
    return firebase.database().ref().update(updates)
})





