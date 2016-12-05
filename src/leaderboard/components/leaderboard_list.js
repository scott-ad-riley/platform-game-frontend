import React, { Component } from 'react'
import { connect } from 'preact-redux'

import LeaderboardRow from './leaderboard_row.js'

const limit = function (array) {
  return array.slice(0, 20)
}

const compareRuns = function (a, b) {
  if (a.time < b.time) return -1;
  if (a.time > b.time) return 1;
  return 0;
}

const mapStateToProps = (state) => (
  {
    runs: limit(state.runs.sort(compareRuns))
  }
)

class LeaderboardList extends Component {
  constructor(props) {
    super(props)
  }

  renderLeaderBoardRow(run) {
    return <LeaderboardRow key={run.key} name={run.name} time={run.time} />
  }

  render() {
    return (
        <div>
          <h1>LEADERBOARD</h1>
          <ul>
            {this.props.runs.map( run => this.renderLeaderBoardRow(run))}
          </ul>
        </div>
      )
  }
}

export default connect(mapStateToProps)(LeaderboardList)
