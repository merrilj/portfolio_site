import React, { Component } from 'react'
import { SlideUp } from 'animate-components'
import { Button } from 'semantic-ui-react'

export default class Dashboard extends Component {
  render() {
    return (
      <div style={styles.content}>
        <SlideUp>
          <nav>
            <ul style={styles.navbar}>
              <li style={styles.listItems}>
                <a href="#" style={styles.btn}>About</a>
              </li>
              <li style={styles.listItems}>
                <a href="#" style={styles.btn}>Projects</a>
              </li>
              <li style={styles.listItems}>
                <a href="#" style={styles.btn}>Contact</a>
              </li>
            </ul>
          </nav>
          <h1 style={styles.header}>Merril Jeffs</h1>
          <h2 style={styles.tagline}>Software Developer</h2>

        </SlideUp>
      </div>
    )
  }
}

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  header: {
    fontSize: '3em',
    paddingTop: '1em',
    color: '#ffffff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '4em',
    textAlign: 'center',
    marginBottom: '0'
  },
  tagline: {
    color: '#ffffff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '2.5em',
    textAlign: 'center',
    marginTop: '0'
  },
  navbar: {
    display: 'flex',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '1.5em',
    listStyleType: 'none',
  },
  listItems: {
    padding: '0.5em',
    float: 'left',
    color: '#ffffff'
  },
  btn: {
    color: '#ffffff'
  }
}
