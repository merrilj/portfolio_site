import React, { Component } from 'react'

export default class Projects extends Component {
  render () {
    return (
      <div>
        <div style={styles.main}>
          <h3>Title</h3>
          <p>Description</p>
        </div>
      </div>
    )
  }
}

const styles = {
  main: {
    textAlign: 'center'
  }
}
