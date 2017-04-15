import React, { Component } from 'react'
import { SlideUp } from 'animate-components'

export default class Dashboard extends Component {
  render() {
    return (
      <div style={styles.content}>
        <SlideUp>
        <h1 style={styles.header}>Merril Jeffs Portfolio</h1>
        <h2 style={styles.tagline}>Coming Soon!</h2>
        </SlideUp>
      </div>
    )
  }
}

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    fontSize: '3em',
    paddingTop: '2em',
    color: '#87cddd',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '4em',
    textAlign: 'center'
  },
  tagline: {
    color: '#87cddd',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '3em',
    textAlign: 'center'
  }
}
