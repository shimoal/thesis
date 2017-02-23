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

      questions: [
        { 
          title: 'title for question 1',
          question: 'Question body for question 1'
        },
        { title: 'title for question 2',
          question: 'Question body for question 2'
        },
        { title: 'title for question 3',
          question: 'Question body for question 3'
        }]
    }
  }


  addQuestion(newQuestion) {
    console.log('addQuestion function is called', newQuestion);

    this.setState()
  }


  render() {

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       addQuestion: this.addQuestion,
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
