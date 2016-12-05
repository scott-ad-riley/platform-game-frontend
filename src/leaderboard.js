import React, { render } from 'react'
import { Provider } from 'preact-redux'
import { createStore } from 'redux'

import LeaderboardList from './leaderboard/components/leaderboard_list.js'
import reducer from './leaderboard/reducer.js'
import newRun from './leaderboard/new_run.js'
import removeRun from './leaderboard/remove_run.js'
import FirebaseConnection from './firebase_connection.js'

window.onload = function () {
  const firebase = new FirebaseConnection()
  const store = createStore(reducer, {runs: []})

  firebase.onNewRun((data) => {
    store.dispatch(newRun(data))
  })
  firebase.onRemoveRun((data) => {
    store.dispatch(removeRun(data.key))
  })


  render(
    <Provider store={store}>
      <LeaderboardList />
    </Provider>
  , document.body)
}
