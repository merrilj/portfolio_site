import React, { Component } from 'react'

export default class Navbar extends Component {
  render () {
    return (
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
    )
  }
}

const styles = {
  nav: {
    position: 'absolute',
    top: '0',
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
}
