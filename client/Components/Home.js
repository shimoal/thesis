import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-1 col-md-1"/>
        
        <div className="col-sm-10 col-md-10 main">
        
          { /* OpenQuestions.js */}
          <div>
            <h3>Open Questions</h3>
            <div className="panel panel-default">
              <div className="panel-body">

                { /* QuestionItem.js */}
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td><h4><a href="">How do I update the user's model fields in Django?</a></h4></td>
                    </tr>
                    <tr>
                      <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                    </tr>
                    <tr>
                      {/*<td><a href="">Edit</a> | <a href="">Remove</a></td>*/}
                    </tr>
                  </tbody>
                </table>

                { /* QuestionItem.js */}
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td><h4><a href="">how to use a complicated results from paste inside data.table's “i” part?</a></h4></td>
                    </tr>
                    <tr>
                      <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                    </tr>
                    <tr>
                      {/*<td><a href="">Edit</a> | <a href="">Remove</a></td>*/}
                    </tr>
                  </tbody>
                </table>

                { /* QuestionItem.js */}
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td><h4><a href="">Dynamically change supervisor node to null</a></h4></td>
                    </tr>
                    <tr>
                      <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                    </tr>
                    <tr>
                      {/*<td><a href="">Edit</a> | <a href="">Remove</a></td>*/}
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>


          </div>

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