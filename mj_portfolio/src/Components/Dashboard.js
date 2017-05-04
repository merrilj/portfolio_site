import React, { Component } from 'react'
import { SlideUp } from 'animate-components'
import { Button } from 'semantic-ui-react'

export default class Dashboard extends Component {
  render() {
    return (
      <div style={styles.content}>
        <SlideUp>
          <h1 style={styles.header}>Merril Jeffs</h1>
          <h2 style={styles.tagline}>Software Developer</h2>

          <div>
            <Button style={styles.buttons} size='large' inverted color='blue'>Projects</Button>
            <Button style={styles.buttons} size='large' inverted color='blue'>About</Button>
          </div>

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
    paddingTop: '1em',
    color: '#87cddd',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '4em',
    textAlign: 'center',
    marginBottom: '0'
  },
  tagline: {
    color: '#87cddd',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '2.5em',
    textAlign: 'center',
    marginTop: '0'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: '0'
  }
}
