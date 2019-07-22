import React, { Fragment } from 'react';
import { Menu, Icon, Modal, Form, Input, TextArea, Button } from 'semantic-ui-react';
// import { ToastContainer, toast ,Flip } from 'react-toastify';




const Channels = (props) => {
  return (
    <Fragment>
      <Menu.Menu style={{ paddingBottom: '2em' }}>
        <Menu.Item>
          <span>
            <Icon name="exchange"/> CHANNELS
          </span>{" "}
          ({ props.channels.length }) <Icon name="add" onClick={props.openModal}/> 
        </Menu.Item>
        {props.displayChannels}
        {/* Channels List */}
      </Menu.Menu>

      <Modal standard open={props.modal} onClose={props.closeModal} closeIcon>
        <Modal.Header>Add a Channel</Modal.Header>
          <Modal.Content>
              <Form onSubmit={props.handlerSubmit}>
                <Form.Field>
                  <Input 
                    fluid
                    label="Name of Channel"
                    name="channelName"
                    onChange={props.handlerChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Input 
                    fluid
                    label="About the Channel"
                    name="channelDetails"
                    onChange={props.handlerChange}
                  />
                </Form.Field>
              </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={props.handlerSubmit} >
                <Icon name="checkmark"/> Add
            </Button>
            <Button color="red" inverted onClick={props.closeModal}>
                <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>

      </Modal>
    </Fragment>

  )
}

export default Channels
