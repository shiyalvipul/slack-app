import React from 'react'
import { Menu } from 'semantic-ui-react';
import UserPanelContainer from './components/UserPanel/UserPanelContainer'

const SidePanel = () => {
  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: '#4A154B', fontSize: '1.2rem'}}
    >
      <UserPanelContainer/>
    </Menu>
  )
}

export default SidePanel
