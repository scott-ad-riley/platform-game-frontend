import React, { Component } from 'react'

const LeaderboardRow = ({ name, time }) => (
  <li>
    <span>Name: {name}</span>
    <span>Time: {time}</span>
  </li>
)

export default LeaderboardRow
