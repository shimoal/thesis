import React from 'react';
import { Link } from 'react-router';
import HelperProfileItem from './HelperProfileItem';

export default React.createClass({
  render() {
    return (
      <div>
        <h3>Find Helpers</h3>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row placeholders">
              
              <HelperProfileItem/>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
})
