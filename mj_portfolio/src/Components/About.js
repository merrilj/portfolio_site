import React, { Component } from 'react'
import { Button, Popup } from 'semantic-ui-react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div style={styles.picDiv}>
          <img src={require("../Images/merril.JPG")} style={styles.image} />
        </div>

        <div>
          <h1 style={styles.header}>Merril Jeffs</h1>
          <h2 style={styles.title}>Software Developer</h2>
        </div>

        <div>
          <p style={styles.summary}>
            I am a Full Stack Developer who thinks its great to build cool stuff. Beyond coding, I have a passion for aviation and travel, and I plan to get my private pilot's license. I also love playing sports, cheering for the Broncos, reading, and a little hiking and camping in between.
          </p>
          <span style={styles.contact}>
            Please reach out!
            <br />
            720.397.0410
            <br />
            merrilj@yahoo.com
          </span>
        </div>

        <div style={styles.iconsDiv}>
          <Button href='https://www.linkedin.com/in/merrilj/' style={styles.icons} circular icon='linkedin large' />
          <Button href='https://github.com/merrilj' style={styles.icons} circular icon='github large' />
          <Button href='mailto:merrilj@yahoo.com' style={styles.icons} circular icon='mail large' />
          <Popup
            trigger={<Button style={styles.icons} icon='phone large' circular />}
            content='720.397.0410' style={styles.popupContent}
            position='right center'
          />
        </div>
      </div>
    )
  }
}

const styles = {
  header: {
    fontSize: '3em',
    paddingTop: '0.3em',
    color: '#fff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '4em',
    textAlign: 'center',
    marginBottom: '0'
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
    textAlign: 'center',
    paddingTop: '1em',
    width: '50%',
    margin: '0 auto'
  },
  picDiv: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '4em'
  },
  image: {
    width: '15%',
    height: 'auto',
    borderRadius: '50%',
    margin: '0 auto'
  },
  contact: {
    color: '#fff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '1.3em',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1em'
  },
  icons: {
    margin: '0.5em',
  },
  iconsDiv: {
    paddingTop: '2em',
    paddingBottom: '4em',
    display: 'flex',
    justifyContent: 'center',
  },
  popupContent: {
    fontSize: '1.3em',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 'bold'
  }
}
