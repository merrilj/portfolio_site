import React, { Component } from 'react'
import { Button, Image, List } from 'semantic-ui-react'

export default class Projects extends Component {

  constructor(props) {
      super(props)

      this.state = {
        projects: []
      }
  }

  componentDidMount() {
    this.addProjects()
  }


  addProjects() {

    const projects = [
      { title: 'Skyfly', summary: 'Hello World', tech: 'This, that, and the other', image: 'https://s-media-cache-ak0.pinimg.com/736x/37/84/cc/3784ccd58eb7e86fa6d6994a6e1a4dee.jpg' },
      { title: 'Flyway', summary: 'Hmm', tech: 'HTML, JavaScript, etc', image: '' },
      { title: 'Fresh', summary: 'Fresh is a full stack yada yada yada', tech: 'Express, Node, and shit', image: '' }
    ]

    this.setState({ projects: projects })
  }


  render () {
    return (
      <div>

        <List style={styles.listColumn} divided verticalAlign='middle'>
          {this.state.projects.map((project, index) => (
            <List.Item key={index}>
              <List.Content floated='right'>
                <Button icon='plane' inverted color='blue'>View Live</Button>
                <Button icon='cancel' inverted color='red'>View Github</Button>
              </List.Content>

              <Image avatar src={project.image} />
              <List.Content>
                <List.Header>{project.title}</List.Header>
                {project.summary}
                {project.tech}
              </List.Content>
            </List.Item>
          ))}
        </List>

      </div>
    )
  }
}

const styles = {
  main: {
    textAlign: 'center'
  },
}
