import React from 'react'
import { Link } from 'react-router'
import OpenQuestions from './OpenQuestions'
import axios from 'axios'

export default class Home extends React.Component {
  constructor() {
    super(); 

    this.state = {
      helloMessage: 'Welcome to Hackeroo! Sign in to collaborate.'
    }

  }

  componentDidMount() {
    var context = this;
    axios.get('/session').then( function(response) {
      console.log('inside response');
      console.log('response', response);
      if (response.data.username) {
        context.setState('helloMessage', ('Hello, ' + response.data.username));
      }
    });
  }



  render() {
    return (
      <div className="row">
        <div className="col-sm-1 col-md-1"/>
        
        <div className="col-sm-10 col-md-10 main">
         <h1> {this.state.helloMessage} </h1>
        
          { /* OpenQuestions.js */}
          <OpenQuestions questions={this.props.userData.questions} />

          { /* FindHelpers Compoent */}
          <div>
            <h3>Find Helpers</h3>
            <div className="panel panel-default">
              <div className="panel-body">

            
                <div className="row placeholders">
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img data-src="holder.js/200x200/auto/sky" className="img-responsive" alt="Generic placeholder thumbnail"/>
                    <h3><Link to="/dashboard">Ai Shi</Link></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>
                    
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img data-src="holder.js/200x200/auto/vine" className="img-responsive" alt="Generic placeholder thumbnail"/>
                    <h3><Link to="/dashboard">Allison Reed</Link></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>

                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img data-src="holder.js/200x200/auto/sky" className="img-responsive" alt="Generic placeholder thumbnail"/>
                    <h3><Link to="/dashboard">Max Quinn</Link></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>

                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img data-src="holder.js/200x200/auto/vine" className="img-responsive" alt="Generic placeholder thumbnail"/>
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