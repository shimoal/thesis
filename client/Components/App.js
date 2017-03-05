import React from 'react'
import { IndexLink } from 'react-router'
import axios from 'axios'
import NavLink from './NavLink'
import style from '../sass/App.scss';

//redux experiment
import ContainerOne from '../containers/ContainerOne';
import ContainerTwo from '../containers/ContainerTwo';

export default class App extends React.Component {

  constructor(props) {
    super(props); 
    if (!this.state) {
      this.state = {
        authenticated: 0,
        user: {
    
        },

        user_skills: { 
          // javaScript: 5,
          // CSS: 4,
          // React: 4,
          // Angular: 5,
          // MySQL: 5
        },

        ratings: { 
          // Knowledge: 4,
          // Helpfulness: 4,
          // Experience: 5
        },

        questions: {
          // id1487880252929: { 
          //   title: 'Enable a button in Swift only if all text fields have been filled out',
          //   question: 'I am having trouble figuring out how to change my code to make it so the Done button in the navigation bar is enabled when my three text fields are filled out...',
          //   status: 'open',
          //   deadline: '',
          //   name: 'Max'
          // }
        },

        questionsClaimed: { 
          // id1487880583646: {
          //   title: 'This is a claimed question #1',
          //   question: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh',
          //   status: 'claimed',
          //   deadline: '',
          //   helpers: { //check from claims table
          //     id1487880467435: 'Alison Reed',
          //     id1487880908457: 'Max Quinn',
          //     id1487880443267: 'Hanyen'
          //   }
          // }
        },

        currentUserQuestions: {
          // id2: { 
          //   title: 'One user question',
          //   question: 'this is just one user questions',
          //   status: 'open',
          //   deadline: '',
          //   name: 'The ONe'
          // }
        },

        allUsers: {},
        userPublicProfile: {},
        


      }
    }
    
  }

  componentWillMount() {
    //we can't call 'this' within axios, so need to hold it in 'context'
    var context = this;

    //Check Authentication Session
    axios.get('/session')
    .then(function(response) {
      // console.log('Real response from DB after calling /session', response);

      if (response.data.github_id) {
        //set authenticated state to 1
        context.setState({'authenticated': 1});

        var data = {
          github_id: response.data.github_id
        }

        //do ajax call to get current user info
        axios.get('/user-current', { params: data })
        .then(function(response) {
          console.log('========== Success getting Current User data from DB');
          context.setState({user: response.data});

          //get user's questions
          var data = {
            userId: response.data.id
          }
          axios.get('/question-for-one-user', { params: data })
          .then(function(response) {
            console.log('========== Success getting Current User\'s Questions data from DB');
            context.setState({currentUserQuestions: response.data});
          })
          .catch(function(err) {
            console.log('Error getting Current User\'s Questions data from DB');
          });
          
          //do ajax call to get claimed questions
          axios.get('/claim', { params: data })
          .then(function(response) {
            console.log('========== Success getting Current User\'s Claimed questions from DB');
            //response.data object is in an array, so need to get element 0
            context.setState({questionsClaimed: response.data});
          })
          .catch(function(err) {
            console.log('Error getting Current User\'s Claimed questions from DB');
          });

        })
        .catch(function(err) {
          console.log('Error retrieving Current User data from DB',err);
        })
      } else {
        //set authenticated state to 0
        context.setState({'authenticated': 0});
      }
    })
    .catch(function(err) {
      console.log('Error checking User\'s Authentication Session');
    }) // ------- End of check authentication session


    //Get all questions
    axios.get('/question')
    .then(function(response) {
      console.log('========== Success getting All Questions from DB', response);

      //response.data object is in an array, so need to get element 0
      context.setState({questions: response.data});
    })
    .catch(function(err) {
      console.log('Error getting All Questions from DB');
    }) // -------- End of get all questions

    //Get all users
    axios.get('/users')
    .then(function(response) {
      console.log('========== Success getting All Users from DB', response);

      //response.data object is in an array, so need to get element 0
      context.setState({allUsers: response.data});
    })
    .catch(function(err) {
      console.log('Error getting All Users from DB');
    }) // -------- End of get all users
    
  }

  componentDidMount() {
    
  }

  addQuestion(questionData) {
    var timeStamp = (new Date()).getTime();
    this.state.questions['id' + timeStamp] = questionData;

    //write to database
    //this is where ORM shines, make sure the object that I send here matches
    //the schema in questionsModel.js
    //check what this.state.questions contains, then map it to the schema
    
    axios.post('/question', questionData)
    .then(function(res) {
      console.log('========== Success writing question to database');

    })
    .catch(function(err) {
      if (err) {
        console.log('Error writing question to database')
      }
    });  
  }

  claimQuestion(currentUserId, learnerId, questionId) {
    axios.post('/claim', {id_helper: currentUserId, id_learner: learnerId, id_question: questionId})
    .then(function(res) {
      console.log('========== Success writing claim to database');
    })
    .catch(function(err) {
      if (err) {
        console.log('Error writing claim to database');
      }
    });
  }

  //user click on accept button
  acceptHelper(learnerId, helperId, questionId) {
    //create session table
    axios.post('/accept', {id_learner: learnerId, id_helper: helperId, id_question: questionId})
    .then(function(res) {
      console.log('========== Success writing accept question session to database');
      // setState to include learnerId, helperId, questionId, roomNumber
      // redirect to collaborate
    })
    .catch(function(err) {
      if (err) {
        console.log('Error writing accept question session to database');
      }
    });
  }

  checkUserAuth() {
    var context = this;
    axios.get('/session')
    .then( function(response) {
      console.log('checkUserAuth: response', response);
      if (response.data.github_id) {
        //if session is valid, set authenticated to 1
        console.log('========== checkUserAuth: YES, USER IS AUTHENTICATED.')
        context.setState({'authenticated': 1});
      } else {
        //else, set authenticated to 0
        console.log('========== checkUserAuth: OH NO, USER IS NOT AUTHENTICATED.')
        context.setState({'authenticated': 0});
      }
    });
  }

  getUserPublicProfile(githubId) {
    var context = this;
    var data = {
          github_id: githubId
        }
    axios.get('/user-current', { params: data })
    .then(function(response) {
      console.log('========== Success getting User Profile data from DB');
      context.setState({userPublicProfile: response.data});
    })
    .catch(function(err) {
      if (err) {
        console.log('Error getting User Profile data from DB');
      }
    });
  }

  render() {

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       userData: this.state,
       addQuestion: this.addQuestion.bind(this),
       claimQuestion: this.claimQuestion.bind(this),
       acceptHelper: this.acceptHelper.bind(this),       
       getUserPublicProfile: this.getUserPublicProfile.bind(this),
       checkUserAuth: this.checkUserAuth.bind(this), //need to refactor this
     })
    );

    return (
      <div>
        
        <NavLink userData={this.state}/>
        {childrenWithProps}
        <ContainerOne/>
        <ContainerTwo/>
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
