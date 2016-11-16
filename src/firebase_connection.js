const config = {
  apiKey: "AIzaSyCSjjgsbBohWHbfWSepzKuf-fgkpxPOtiQ",
  authDomain: "platform-game-leaderboard.firebaseapp.com",
  databaseURL: "https://platform-game-leaderboard.firebaseio.com",
  storageBucket: "platform-game-leaderboard.appspot.com",
  messagingSenderId: "1078054065910"
}

const FirebaseConnection = function () {
  firebase.initializeApp(config)
  this.ref = firebase.database().ref('times/')
}

FirebaseConnection.prototype = {
  publishRun: function (name, time) {
    this.ref.push().set({
      name: name,
      time: time
    })
  },
  onNewRun: function(callback) {
    this.ref.on('child_added', (data) => {
      callback(data)
    })
  },
  onRemoveRun: function(callback) {
    this.ref.on('child_removed', (data) => {
      callback(data)
    })
  }
}

export default FirebaseConnection
