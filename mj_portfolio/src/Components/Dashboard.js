import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.content}>Merril Jeffs</h1>
        <h2 style={styles.content}>Coming Soon!</h2>
      </div>
    )
  }
}

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '3em',
    paddingTop: '2em'
  }
}
