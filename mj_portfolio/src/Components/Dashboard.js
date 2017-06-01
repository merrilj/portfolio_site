import React, { Component } from 'react'
import { SlideUp, FadeInDown } from 'animate-components'
import Navbar from './Navbar'
import Resume from './Resume'
import About from './About'
import Projects from './Projects'

export default class Dashboard extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.navbar}>
          <FadeInDown>
            <Navbar />
          </FadeInDown>
        </div>

        <div>
          <SlideUp>
            <Projects />
          </SlideUp>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    height: 'auto',
    margin: '0 auto',
  },
  navbar: {
    paddingBottom: '4em'
  }
}
