import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="col-xs-6 col-sm-3 placeholder">
        <img src="/photos/photo-ai.png" width="200px"/>
        <h3><Link to="/dashboard">Ai Shi</Link></h3>
        
        <p>&nbsp;</p>
        <p>Javascript (5)</p>
        <p>HTML (5)</p>
        <p>CSS (5)</p>
        
      </div>
    )
  }
})
