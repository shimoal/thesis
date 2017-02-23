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
      name: 'Ai Shi',
      profileImage: 'photo_aishi.jpg',
      description: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      skills: [
        { 
          name: 'javascript',
          rating: 5 },
        { 
          name: 'CSS',
          rating: 4 },
        { 
          name: 'React',
          rating: 4 },
        { 
          name: 'Angular',
          rating: 5 },
        { 
          name: 'MySQL',
          rating: 5 }],
      
      ratings: [
        { 
          name: 'Knowledge',
          rating: 4 },
        { 
          name: 'Helpfulness',
          rating: 4 },
        { 
          name: 'Overall Experience',
          rating: 5 
        }],

      questions: {
        id1487880252929: { 
          title: 'Enable a button in Swift only if all text fields have been filled out',
          question: 'I am having trouble figuring out how to change my code to make it so the Done button in the navigation bar is enabled when my three text fields are filled out...'
        }} 
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
          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </div>
      </div>
    )
  }
}
