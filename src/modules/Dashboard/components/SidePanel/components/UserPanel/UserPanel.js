import React from 'react';
import { Header, Grid, Icon, Dropdown, Image } from 'semantic-ui-react';


const UserPanel = (props) => {
  return (
    <Grid  style={{ background: '#4A154B' }}>
      <Grid.Column>
        <Grid.Row style={{ padding: '1.2em', margine: 0}}>
          <Header inverted floated="left" as="h2">
            <Icon name="wechat" />
            <Header.Content>Vchat</Header.Content>
          </Header>
           
          <Header style={{ padding: '0.25em' }} inverted as="h4">
          <Dropdown 
            trigger={
            <span>
              <Image src={props.user.photoURL} spaced="right"  avatar/>
              { props.user.displayName}
            </span>} 
            options={props.dropdownOptions} 
          />
        </Header>

        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

export default UserPanel
