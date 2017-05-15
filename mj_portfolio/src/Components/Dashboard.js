import React, { Component } from 'react'
import { SlideUp, FadeInDown } from 'animate-components'
import Navbar from './Navbar'
import Resume from './Resume'

export default class Dashboard extends Component {
  render() {
    return (
      <div style={styles.content}>

        <FadeInDown>
          <Navbar />
        </FadeInDown>
        <div style={styles.merril}>
          <SlideUp>
            <h1 style={styles.header}>Merril Jeffs</h1>
            <h2 style={styles.tagline}>Software Developer</h2>
          </SlideUp>
        </div>
      </div>
    )
  }
}

const styles = {
  merril: {
    display: 'flex',
    justifyContent: 'center'
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
