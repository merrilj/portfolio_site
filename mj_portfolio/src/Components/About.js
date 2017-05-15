import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div style={styles.merril}>
          <img src="../Images/merril.JPG" style={styles.image} />
          <h1 style={styles.header}>Merril Jeffs</h1>
          <h2 style={styles.title}>Software Developer</h2>
          <p style={styles.summary}>
            I am a Full Stack Developer who thinks its great to build cool stuff. Beyond coding, I have a passion for aviation and travel, and I plan to get my private pilots license soon. I also love playing sports, cheering for the Broncos, and a little hiking and camping in between.
          </p>
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
  title: {
    color: '#fff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '2.5em',
    textAlign: 'center',
    marginTop: '0'
  },
  summary: {
    fontFamily: 'Work Sans, sans-serif',
    color: '#fff',
    fontSize: '1.5em',
    width: '50%',
    textAlign: 'center'
  },
  image: {
    width: '200px',
    height: '400px',

  }
}
