import React from 'react'
import { Link } from 'react-router'
import OpenQuestions from './OpenQuestions'
import HomepageSearchBar from './HomepageSearchBar'
import axios from 'axios'

export default class Home extends React.Component {
  constructor() {
    super(); 
  }

  render() {
    return (
      <div className="row">
      <HomepageSearchBar/>
        <div className="col-sm-1 col-md-1"/>
        
        <div className="col-sm-10 col-md-10 main">

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