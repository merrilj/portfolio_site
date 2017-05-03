import React, { Component } from 'react'
import { SlideUp } from 'animate-components'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export default class Dashboard extends Component {
  render() {
    return (
      <div style={styles.content}>
        <SlideUp>
          <h1 style={styles.header}>Merril Jeffs</h1>
          <h2 style={styles.tagline}>Software Developer</h2>
          <div>
            <Card
              image='/assets/images/avatar/large/elliot.jpg'
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extra}
            />
            <Card
              image='/assets/images/avatar/large/elliot.jpg'
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extra}
            />
          </div>

        </SlideUp>
      </div>
    )
  }
}

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    fontSize: '3em',
    paddingTop: '1em',
    color: '#87cddd',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '4em',
    textAlign: 'center',
    marginBottom: '0'
  },
  tagline: {
    color: '#87cddd',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '2.5em',
    textAlign: 'center',
    marginTop: '0'
  }
}
