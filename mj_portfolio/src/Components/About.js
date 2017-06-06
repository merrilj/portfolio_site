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
          <p style={styles.header}>Merril Jeffs</p>
          <p style={styles.title}>Software Developer</p>
        </div>

        <div>
          <p style={styles.summary}>
            I am a Full Stack Developer who thinks its great to build cool stuff. Beyond coding, I have a passion for aviation and travel, and I plan to get my private pilot's license soon.
          </p>
          <span style={styles.contact}>
            Please feel free to reach out!
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
    textAlign: 'center',
    marginBottom: '0',
    fontWeight: 'bold'
  },
  title: {
    color: '#fff',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '2em',
    textAlign: 'center',
    marginTop: '0',
    fontWeight: 'bold'
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
    alignItems: 'center'
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
    paddingTop: '0.7em',
    display: 'flex',
    justifyContent: 'center',
  },
  popupContent: {
    fontSize: '1.3em',
    fontFamily: 'Work Sans, sans-serif',
  }
}
