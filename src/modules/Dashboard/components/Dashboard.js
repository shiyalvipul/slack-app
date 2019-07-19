import React from 'react'
import { Grid } from 'semantic-ui-react';

import ColorPanelContainer from './ColorPanel/ColorPanelContainer';
import SidePanelContainer from './SidePanel/SidePanelContainer';
import MessagesContainer from './Messages/MessagesContainer';
import MetaPanelContainer from './MetaPanel/MetaPanelContainer'

const Dashboard = () => {
  return (
    <Grid columns="equal" className="app" style={{ background:'#eee' }}>
      <ColorPanelContainer/>
      <SidePanelContainer/>
      <Grid.Column style={{marginLeft: 320 }} >
        <MessagesContainer/>
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanelContainer/> 
      </Grid.Column>
     
    </Grid>
  )
}

export default Dashboard
