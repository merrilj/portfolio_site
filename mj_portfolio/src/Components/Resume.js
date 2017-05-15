import React, { Component } from 'react'

export default class Resume extends Component {
  render () {
    return (
      <div>
        <object data="test.pdf" type="application/pdf" width="300" height="200">
          alt : <a href="test.pdf">test.pdf</a>
        </object>
      </div>
    )
  }
}

const styles = {}
