import React, { render } from 'react'
import { Provider } from 'preact-redux'
import { createStore } from 'redux'

import config from './leaderboard/firebase_config.js'
import LeaderboardList from './leaderboard/components/leaderboard_list.js'
import reducer from './leaderboard/reducer.js'
import newRun from './leaderboard/new_run.js'
import removeRun from './leaderboard/remove_run.js'

window.onload = function () {
  firebase.initializeApp(config)
  const timeRef = firebase.database().ref('times/')

  timeRef.on('child_added', (data) => {
    store.dispatch(newRun(data))
  })
  timeRef.on('child_removed', (data) => {
    store.dispatch(removeRun(data.key))
  })

  const store = createStore(reducer, {runs: []})

  render(
    <Provider store={store}>
      <LeaderboardList />
    </Provider>
  , document.body)

  window.writeTimeToLeaderboard = function (name, time) {
    // just here as an example - will move into the game
    timeRef.push().set({
      name: name,
      time: time
    })
  }
}
