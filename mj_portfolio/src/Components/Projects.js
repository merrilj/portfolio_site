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
      { title: 'Skyfly', summary: 'Skyfly maps all current flights around the world in real-time, providing flight details such as aircraft, flight number, speed, and elevation.', tech: 'JavaScript, Materialize CSS, jQuery, AJAX, API Integration', image: '../Images/skyfly.png' },
      { title: 'Flyway', summary: 'Hmm', tech: 'HTML, JavaScript, etc', image: '../Images/flyway.png' },
      { title: 'Fresh', summary: 'Fresh is a full stack yada yada yada', tech: 'Express, Node, and shit', image: '../Images/fresh.png' }
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
                <Button>View Live</Button>
                <Button>View Github</Button>
              </List.Content>

              <Image avatar src={require(project.image)} />
              <List.Content>
                <List.Header>{project.title}</List.Header>
                <p>
                  {project.summary}
                </p>
                <p>
                  {project.tech}
                </p>
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
  listColumn: {
    width: '100%'
  }
}
