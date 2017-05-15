import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div style={styles.merril}>
          <h1 style={styles.header}>Merril Jeffs</h1>
          <h2 style={styles.tagline}>Software Developer</h2>
        </div>
      </div>
    )
  }
}

const styles = {
  merril: {
    
  },
  header: {
    fontSize: '3em',
    paddingTop: '1em',
    color: '#fff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '4em',
    textAlign: 'center',
  },
  tagline: {
    color: '#fff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '2.5em',
    textAlign: 'center',
    marginTop: '0'
  },
}
