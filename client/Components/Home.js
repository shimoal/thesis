import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
  constructor() {
    super(); 

  }

  //Happen whenever home component's state changes
  render() {
    console.log('Home component is rendered');
    return (
      <div className="row">
        <div className="col-sm-1 col-md-1"/>
        
        <div className="col-sm-10 col-md-10 main">

          { /* FindHelpers Compoent */}
          <div>
            <h3>Find Helpers</h3>
            <div className="panel panel-default">
              <div className="panel-body">

            
                <div className="row placeholders">
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <h3>Ai Shi</h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>
                    
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <h3>Alison Reed</h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>

                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <h3>Max Quinn</h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>

                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <h3>Hanyen Widjaja</h3>
                    
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