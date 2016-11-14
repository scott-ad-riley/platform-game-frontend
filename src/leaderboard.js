import config from './firebase_config.js'

window.onload = function () {
  firebase.initializeApp(config)
  const database = firebase.database()
  const timeRef = database.ref('times/')
  window.writeTimeToLeaderboard = function (name, time) {
    timeRef.push().set({
      name: name,
      time: time
    })
  }
}
