import React, { Component } from 'react'
import { connect } from 'preact-redux'

import LeaderboardRow from './leaderboard_row.js'

const mapStateToProps = (state) => (
  {
    runs: state.runs
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
        <ul>
          {this.props.runs.map((run) => this.renderLeaderBoardRow(run))}
        </ul>
      )
  }
}

export default connect(mapStateToProps)(LeaderboardList)
