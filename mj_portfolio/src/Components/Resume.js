import React, { Component } from 'react'

export default class Resume extends Component {
  render () {
    return (
      <div style={styles.main}>
        <object style={styles.resume} data={require("../Images/Resume.pdf")} type="application/pdf">
          alt : <a href="../Images/Resume.pdf">resume.pdf</a>
        </object>
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
  resume: {
    width: '850',
    height: '1100',
    paddingBottom: '2em',
    margin: '0 auto'
  },
}
