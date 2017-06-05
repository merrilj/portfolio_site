import React, { Component } from 'react'
import { Button, Image, List } from 'semantic-ui-react'

export default class Projects extends Component {
  render () {
    return (
      <div>
        <List divided verticalAlign='middle'>
          <List.Item>
            <List.Content floated='right'>
              <Button>View Live</Button>
              <Button>View Github</Button>
            </List.Content>
            <Image avatar src='/assets/images/avatar/small/lena.png' />
            <List.Content>
              Project Name
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated='right'>
            <Button>View Live</Button>
            <Button>View Github</Button>
            </List.Content>
            <Image avatar src='/assets/images/avatar/small/lindsay.png' />
            <List.Content>
              Project Name
            </List.Content>
          </List.Item>
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
