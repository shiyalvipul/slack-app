import React from 'react';
import { Header, Grid, Icon, Dropdown } from 'semantic-ui-react';


const UserPanel = (props) => {
  return (
    <Grid  style={{ background: '#4A154B' }}>
      <Grid.Column>
        <Grid.Row style={{ padding: '1.2em', margine: 0}}>
          <Header inverted floated="left" as="h2">
            <Icon name="user circle outline" />
            <Header.Content>Vchat</Header.Content>
          </Header>
        </Grid.Row>

        <Header style={{ padding: '0.25em' }} inverted as="h4">
          <Dropdown 
            trigger={<span><Icon name="setting" />Profile Setting</span>} 
            options={props.dropdownOptions} 
          />
        </Header>

      </Grid.Column>
    </Grid>
  )
}

export default UserPanel
