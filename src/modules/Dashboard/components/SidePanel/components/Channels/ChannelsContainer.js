import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Menu } from 'semantic-ui-react';


import Channels from './Channels';
import firebase from '../../../../../../config/firebase';
import { setCurrentChannel } from '../../../../../redux/actions';


 class ChannelsContainer extends Component {
  state = {
    user: this.props.user,
    channels: [],
    channelName: '',
    channelDetails: '',
    channelsRef: firebase.database().ref('channels'),
    modal: false,

  }

  componentDidMount() {
    this.addListeners(); 
  }

  //Retrive Data from firebase database
  addListeners = () => {
    let loadedChannels = [];
    this.state.channelsRef.on('child_added', snap => {
      loadedChannels.push(snap.val());
      this.setState({ channels: loadedChannels });
    })
  }

  //Dipslay Channel Data
  displayChannels = channels => (
    channels.length > 0 && channels.map(channel => (
      <Menu.Item 
        key={channel.id}
        onClick={() => this.changeChannel(channel)}
        name={channel.name}
        style={{ opacity: 0.7 }}
      >
        # {channel.name}
      </Menu.Item>
    ))
  )

  //on input change Values
  handlerChange = event => {
    this.setState({ [event.target.name ]: event.target.value });
  }

  openModal = () => this.setState({ modal: true }); 

  closeModal = () => this.setState({ modal: false }); 

  //form submit method
  handlerSubmit = event => {
    event.preventDefault();
    if(this.isFormValid(this.state)) {
        this.addChannel();
    }
  }

  isFormValid = ({ channelName, channelDetails }) => channelName && channelDetails;

  // Channel Data add into database
  addChannel = () => {
    const { channelsRef, channelName, channelDetails, user } = this.state;
    const key = channelsRef.push().key;
    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      creartedBy: {
        name: user.displayName,
        avatar: user.photoURL,
      }
    };

    channelsRef
      .child(key)
      .update(newChannel)
      .then( () => {
        this.setState({ channelName: '', channelDetails: ''});
        this.closeModal();
        toast.success('New channel is created');
      })
      .catch( err => {
        console.error(err);
      })
  }

  //Global state Channel Active
  changeChannel = channel => {
    this.props.setCurrentChannel(channel)
  }


  render() {
    const { channels, modal} = this.state; 
    return (
      <Channels
        channels={channels} 
        modal={modal}
        handlerChange={this.handlerChange}
        openModal={this.openModal}
        closeModal={this.closeModal}
        handlerSubmit={this.handlerSubmit}
        displayChannels={this.displayChannels(channels)}
      />
      
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentChannel: (channel) => dispatch(setCurrentChannel(channel)),
});

export default connect('',mapDispatchToProps)(ChannelsContainer);