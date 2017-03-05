import React from 'react'
import { IndexLink } from 'react-router'
import axios from 'axios'
import NavLink from './NavLink'
import style from '../sass/App.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    var context = this;

    if (!this.state.user) {
      axios.get('/session')
      .then(function(response) {
        console.log('resonse from session:', response);
        if (response.data.name){
          context.setState({user: response.data});
        } else {
          console.log('user in not authenticated');
        }

        

      }).catch(function(err) {
        console.log('Error calling session:', err);
      });
    }
  }

  addQuestion(questionData) {
    var timeStamp = (new Date()).getTime();
    this.state.questions['id' + timeStamp] = questionData;
    
    axios.post('/question', questionData)
    .then(function(res) {
      console.log('Success writing question to database', res);
    })
    .catch(function(err) {
      if (err) {
        console.log('Fail to write question to database')
      }
    });  
  }

  claimQuestion(userId, questionId) {
    axios.post('/claim', {id_user: userId, id_question: questionId}) //hard coded
    .then(function(res) {
      console.log('Success writing claim to database', res);
    })
    .catch(function(err) {
      if (err) {
        console.log('Fail to write claim to database');
      }
    });
  }

  acceptQuestion() {
    axios.post('/accept', {id_user: userId, id_question: questionId})
    .then(function(res) {
      console.log('Success writing claim to database', res);
    })
    .catch(function(err) {
      if (err) {
        console.log('Fail to write claim to database');
      }
    });
  }

  removeUser() {
    this.setState({user: undefined});
  }

  render() {

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        addQuestion: this.addQuestion.bind(this),
        claimQuestion: this.claimQuestion.bind(this),
        removeUser: this.removeUser.bind(this),
        user: this.state.user,
      })
    );

    return (
      <div>
        
        <NavLink user={this.state.user}/>
        {childrenWithProps}

        <h3>App.js state</h3>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
        
        <div className="row">
          <div className="col-sm-9 col-md-9 main">
            &nbsp;
          </div>
        </div>
      </div>
    )
  }
}
