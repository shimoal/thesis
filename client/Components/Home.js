import React from 'react'
import OpenQuestions from './OpenQuestions'

export default React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-1 col-md-1"/>
        
        <div className="col-sm-10 col-md-10 main">
        
          { /* OpenQuestions.js */}
          <OpenQuestions />

          { /* FindHelpers Compoent */}
          <div>
            <h3>Find Helpers</h3>
            <div className="panel panel-default">
              <div className="panel-body">

            
                <div className="row placeholders">
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img data-src="holder.js/200x200/auto/sky" className="img-responsive" alt="Generic placeholder thumbnail"/>
                    <h3><a href="">Ai Shi</a></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>
                    
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img data-src="holder.js/200x200/auto/vine" className="img-responsive" alt="Generic placeholder thumbnail"/>
                    <h3><a href="">Allison Reed</a></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>

                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img data-src="holder.js/200x200/auto/sky" className="img-responsive" alt="Generic placeholder thumbnail"/>
                    <h3><a href="">Max Quinn</a></h3>
                    
                    <p>&nbsp;</p>
                    <p>Javascript (5)</p>
                    <p>HTML (5)</p>
                    <p>CSS (5)</p>

                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder">
                    <img data-src="holder.js/200x200/auto/vine" className="img-responsive" alt="Generic placeholder thumbnail"/>
                    <h3><a href="">Hanyen Widjaja</a></h3>
                    
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
})