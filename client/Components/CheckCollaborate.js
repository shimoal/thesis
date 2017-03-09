import React from 'react'
import Signup from './Auth/Signup'
import io from 'socket.io-client'
import axios from 'axios'
import { Link } from 'react-router'
let socket = io();

export default class Collaborate extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			success: false
		}

		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleJoinRoom = this.handleJoinRoom.bind(this);
	}

	handleFormChange(e) {
		this.setState({room_name: e.target.value});
	}

	handleJoinRoom(e) {
    var context = this;
    console.log('room_name: ', context.state.room_name);
    axios.get('/collaborate', {
        params: {
          room_number: context.state.room_name
        }
      })
      .then(function(collaborate) {
        console.log('collaborate.data ---> ', collaborate.data);
        context.setState({
          id: collaborate.data.id,
          learnerId: collaborate.data.id_learner,
          helperId: collaborate.data.id_helper,
          questionId: collaborate.data.id_question,
          learner: collaborate.data.Learner,
          helper: collaborate.data.Helper,
          question: collaborate.data.Question,
          room_name: collaborate.data.room_number
        });
        context.setState({success: true});
        socket.emit('join-room', context.state.username, context.state.room_name);
        console.log('context state ---> ', context.state);
      })
      .catch(function(err) {
        context.setState({info: 'Wrong room number. There is no such room.'});
      });
    e.preventDefault();
  }

	render() {

		return (
			<div className="panel panel-default">
        <div className="panel-body">
          <h4>Please enter the room number from the email you got.</h4>

          <form className="col-5" id="joinRoomForm" onSubmit={this.handleJoinRoom}>
            <input id="roomName" onChange={this.handleFormChange} type="text" name="roomName" placeholder="room name" />
            <input type="submit" value="Join" />
          </form>  
          {this.state.success ?
          (<div>
          	<p>You are going to work on {this.state.question.title}</p>
          	<Link to="/collaborate-room" >Go to collaborate</Link>
          	</div>
          	) : null
          }  
        </div> 
      </div>
		)
	}
}