import React, { Component } from 'react'

export default class Resume extends Component {
  render () {
    return (
      <div style={styles.hmm}>
        <object style={styles.resume} data={require("../Images/Resume.pdf")} type="application/pdf">
          alt : <a href="../Images/Resume.pdf">test.pdf</a>
        </object>
      </div>
    )
  }
}

const styles = {
  resume: {
    width: '800',
    height: '1000'
  },
  hmm: {
    margin: '0 auto',
    alignItems: 'center'

  }
}
