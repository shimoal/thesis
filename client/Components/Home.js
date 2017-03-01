import React from 'react'
import { Link } from 'react-router'
import OpenQuestions from './OpenQuestions'
import HomepageSearchBar from './HomepageSearchBar'
import axios from 'axios'

export default class Home extends React.Component {
  constructor() {
    super(); 

    this.state = {
      helloMessage: ''
    }

  }

  getDefaultProps() {
    console.log('getting our default properties');
  }

  //Before component is rendered
  componentWillMount() {
    console.log('Home component is mounting');
    
    //check to make sure user is authenticated and set state to 1 or 0
    this.props.checkUserAuth();
  }

  //Happens after component has rendered
  componentDidMount() {
    console.log('Home component has rendered');

// every component needs to do GET /session to check if the user has been authenticated!!!!
// need to pass down the following function as props to all components

  }
  
  //Happens when component has rendered and about to unmount
  componentWillUnmount() {
    // this.props.showSearch('no');
  }

  //Happen whenever home component's state changes
  render() {
    console.log('Home component is rendered')
    return (
      <div className="row">
      <HomepageSearchBar/>
        <div className="col-sm-1 col-md-1"/>
        
        <div className="col-sm-10 col-md-10 main">
        
          { /* OpenQuestions.js */}
          <OpenQuestions 
            userCurrent={this.props.userData.user}
            questions={this.props.userData.questions}
            claimQuestion={this.props.claimQuestion} 
            authenticated={this.props.userData.authenticated}/>

          { /* FindHelpers Compoent */}
          <div>
            <h3>Find Helpers</h3>
            <div className="panel panel-default">
              <div className="panel-body">

            
                <div className="row placeholders">
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img src="/photos/photo-ai.png" width="200px"/>
                    <h3><Link to="/dashboard">Ai Shi</Link></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>
                    
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img src="/photos/photo-alison.png" width="200px"/>
                    <h3><Link to="/dashboard">Alison Reed</Link></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>

                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img src="/photos/photo-max.png" width="200px"/>
                    <h3><Link to="/dashboard">Max Quinn</Link></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>

                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img src="/photos/photo-hanyen.png" width="200px"/>
                    <h3><Link to="/dashboard">Hanyen Widjaja</Link></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>

                  </div>
                </div>

              </div>
            </div>
                  
          </div>

        </div>

        
      </div>


      
    )
  }
}