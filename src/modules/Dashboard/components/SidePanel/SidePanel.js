import React from 'react';
import { Menu } from 'semantic-ui-react';
import UserPanelContainer from './components/UserPanel/UserPanelContainer';
import ChannelsContainer from './components/Channels/ChannelsContainer';

const SidePanel = (props) => {
  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: '#4A154B', fontSize: '1.2rem'}}
    >
      <UserPanelContainer
       user={props.user }
      />
      <ChannelsContainer 
        user={props.user}
        />
    </Menu>
  )
}

export default SidePanel
