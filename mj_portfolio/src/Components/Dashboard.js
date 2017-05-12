import React, { Component } from 'react'
import { SlideUp, FadeInDown } from 'animate-components'

export default class Dashboard extends Component {
  render() {
    return (
      <div style={styles.content}>

        <FadeInDown>
          <nav style={styles.nav}>
            <ul style={styles.ul}>
              <li style={styles.listItems}>
                <a href="#" style={styles.btn}>About</a>
              </li>
              <li style={styles.listItems}>
                <a href="#" style={styles.btn}>Projects</a>
              </li>
              <li style={styles.listItems}>
                <a href="#" style={styles.btn}>Resume</a>
              </li>
            </ul>
          </nav>
        </FadeInDown>

        <SlideUp>
          <h1 style={styles.header}>Merril Jeffs</h1>
          <h2 style={styles.tagline}>Software Developer</h2>

        </SlideUp>
      </div>
    )
  }
}

const styles = {
  content: {
  },
  header: {
    fontSize: '3em',
    paddingTop: '1em',
    color: '#ffffff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '4em',
    textAlign: 'center',
  },
  tagline: {
    color: '#ffffff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '2.5em',
    textAlign: 'center',
    marginTop: '0'
  },
  ul: {
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '1.5em',
    listStyleType: 'none',
  },
  listItems: {
    padding: '0.5em',
    float: 'left',
    color: '#ffffff',
  },
  btn: {
    color: '#ffffff'
  },
  nav: {
    positon: 'fixed',
  }
}
