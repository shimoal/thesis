import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import HomepageSearchBar from './HomepageSearchBar'
import style from '../sass/App.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      user: {
        id: 'id1487880252929',
        name: 'Ai Shi',
        profileImage: 'photo_aishi.jpg',
        description: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      },

      user_skills: {
        javaScript: 5,
        CSS: 4,
        React: 4,
        Angular: 5,
        MySQL: 5
      },

      ratings: {
        Knowledge: 4,
        Helpfulness: 4,
        Experience: 5
      },

      questions: {
        id1487880252929: {
          title: 'Enable a button in Swift only if all text fields have been filled out',
          question: 'I am having trouble figuring out how to change my code to make it so the Done button in the navigation bar is enabled when my three text fields are filled out...'
        }
      },

      claimedQuestions: {
        id1487880583646: {
          title: 'This is a claimed question #1',
          question: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh',
          helpers: {
            id1487880467435: 'Allison Reed',
            id1487880908457: 'Max',
            id1487880443267: 'Hanyen'
          } 
        }
      }


    }
  }


  addQuestion(questionData) {
    console.log('addQuestion function is called', questionData);
    console.log(this.state);
    var timeStamp = (new Date()).getTime();
    this.state.questions['id' + timeStamp] = questionData;
    this.setState({
      questions: this.state.questions
    })
  }


  render() {

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       addQuestion: this.addQuestion.bind(this),
       userData: this.state
     })
    );

    return (
      <div>
        <NavLink/>
    
        {childrenWithProps}

        <div className="pre">
          <h3>App.js state</h3>
          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </div>
      </div>
    )
  }
}
