import React, { Component } from 'react'

export default class Resume extends Component {
  render () {
    return (
      <div>
        <object data="../Images/Resume.pdf" type="application/pdf" width="600" height="1200">
          alt : <a href="../Images/Resume.pdf">test.pdf</a>
        </object>
      </div>
    )
  }
}

const styles = {}
