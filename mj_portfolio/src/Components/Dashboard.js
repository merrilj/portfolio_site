import React, { Component } from 'react'
import { SlideUp, FadeInDown } from 'animate-components'
import Navbar from './Navbar'
import Resume from './Resume'
import About from './About'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <FadeInDown>
            <Navbar />
          </FadeInDown>
        </div>

        <div>
          <SlideUp>
            <About />
          </SlideUp>
        </div>
      </div>
    )
  }
}

const styles = {
  merril: {
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    fontSize: '3em',
    paddingTop: '1em',
    color: '#fff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '4em',
    textAlign: 'center',
  },
  tagline: {
    color: '#fff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '2.5em',
    textAlign: 'center',
    marginTop: '0'
  },
}
