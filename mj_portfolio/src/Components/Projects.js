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
      { title: 'Skyfly', summary: 'Skyfly maps all current flights around the world in real-time, providing flight details such as aircraft, flight number, speed, and elevation.', tech: 'JavaScript, Materialize CSS, jQuery, AJAX, API Integration', image: '../Images/skyfly.png', live: 'www.flyway.pro', github: '' },
      { title: 'Flyway', summary: 'Flyway is a full-stack app that visualizes all nonstop flights from any airport of your choice and provides an updated list of scheduled, current, or landed flights per destination airport.', tech: 'HTML, JavaScript, etc', image: '../Images/flyway.png' },
      { title: 'Fresh', summary: 'Fresh is a full-stack ski resort app that displays up-to-date info on snowfall, open trails, and weather for Colorado resorts.', tech: 'Express, Node, and shit', image: '../Images/fresh.png' },
      { title: 'Gratune', summary: 'Gratune is a full-stack iPhone app that targets the free live music venues around Denver.', tech: 'Express, Node, and shit', image: '../Images/fresh.png' },
      { title: 'Hail Ya', summary: 'Hail Ya is an app that allows users planning to drink to get weather information based on their location and day of the week, and then receive drink recipes that will use the weather as one of the ingredients.', tech: 'Express, Node, and shit', image: '../Images/fresh.png' }
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

              <Image avatar src={project.image} />
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
    width: '100%',
    paddingTop: '3em'
  }
}
