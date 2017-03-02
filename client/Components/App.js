import React from 'react'
import { IndexLink } from 'react-router'
import axios from 'axios'
import NavLink from './NavLink'
import style from '../sass/App.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    if (!this.state) {
      this.state = {
        authenticated: 0,
        user: { //check from user table
          id: '0',
          email: 'nan',
          name: 'Visitor',
          profileImage: '/photos/photo-ai.png',
          description: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
        },

        user_skills: { //check skills table and user_skills
          javaScript: 5,
          CSS: 4,
          React: 4,
          Angular: 5,
          MySQL: 5
        },

        ratings: { //check the review table
          Knowledge: 4,
          Helpfulness: 4,
          Experience: 5
        },

        questions: {
          id1487880252929: { //check the question
            title: 'Enable a button in Swift only if all text fields have been filled out',
            question: 'I am having trouble figuring out how to change my code to make it so the Done button in the navigation bar is enabled when my three text fields are filled out...',
            status: 'open',
            deadline: '',
            name: 'Max'
          }
        },

        questionsClaimed: { //check the question's status
          id1487880583646: {
            title: 'This is a claimed question #1',
            question: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh',
            status: 'claimed',
            deadline: '',
            helpers: { //check from claims table
              id1487880467435: 'Alison Reed',
              id1487880908457: 'Max Quinn',
              id1487880443267: 'Hanyen'
            }
          }
        },

        currentUserQuestions: {
          id2: { //check the question
            title: 'One user question',
            question: 'this is just one user questions',
            status: 'open',
            deadline: '',
            name: 'The ONe'
          }
        },
      }
    }
    
  }

  componentWillMount() {
    //we can't call 'this' within axios, so need to hold it in 'context'
    var context = this;

    //do ajax call to check authentication session
    axios.get('/session')
    .then(function(response) {
      console.log('Real response from DB after calling /session', response);

      if (response.data.github_id) {
        //set authenticated state to 1
        context.setState({'authenticated': 1});

        var data = {
          github_id: response.data.github_id
        }

        //do ajax call to get current user info
        axios.get('/user-current', { params: data })
        .then(function(response) {
          console.log('User data from DB', response.data);
          context.setState({user: response.data});

          //get user's questions
          var data = {
            userId: response.data.id
          }
          axios.get('/question-for-one-user', { params: data })
          .then(function(response) {
            console.log('One User Question data from DB', response.data);
            context.setState({currentUserQuestions: response.data});
          })
        })
        .catch(function(err) {
          console.log('Error retrieving user from DB',err);
        })
      } else {
        //set authenticated state to 0
        context.setState({'authenticated': 0});
      }
    });

    //do ajax call to get questions
    axios.get('/question')
    .then(function(response) {
      console.log('Questions data from DB', response.data);

      //response.data object is in an array, so need to get element 0
      context.setState({questions: response.data});
    })
    .catch(function(err) {
      console.log(err);
    })

    //do ajax call to get claimed questions
    axios.get('/claim')
    .then(function(response) {
      console.log('CLaims data from DB', response.data);
      //response.data object is in an array, so need to get element 0
      context.setState({questionsClaimed: response.data});
    })
    .catch(function(err) {
      console.log(err);
    });
  }


  addQuestion(questionData) {
    // console.log('The dummy data', this.state.questions);
    // console.log('addQuestion questionData object', questionData);
    var timeStamp = (new Date()).getTime();
    this.state.questions['id' + timeStamp] = questionData;
    console.log('Dummy data', this.state.questions);

    //write to database
    //this is where ORM shines, make sure the object that I send here matches
    //the schema in questionsModel.js
    //check what this.state.questions contains, then map it to the schema
    
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

  checkUserAuth() {
    var context = this;
    axios.get('/session').then( function(response) {
      console.log('checkUserAuth: response', response);
      if (response.data.github_id) {
        //if session is valid, set authenticated to 1
        console.log('checkUserAuth: YES, USER IS AUTHENTICATED!!!!')
        context.setState({'authenticated': 1});
      } else {
        //else, set authenticated to 0
        console.log('checkUserAuth: OH NO, USER IS NOT AUTHENTICATED!!!!')
        context.setState({'authenticated': 0});
      }
    });
  }

  render() {

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       addQuestion: this.addQuestion.bind(this),
       claimQuestion: this.claimQuestion.bind(this),
       checkUserAuth: this.checkUserAuth.bind(this),
       userData: this.state,
     })
    );

    return (
      <div>
        
        <NavLink userData={this.state}/>
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
