import React from 'react';
import { browserHistory, Link } from 'react-router';
import OpenQuestions from './OpenQuestions';
import HomepageSearchBar from './HomepageSearchBar';


export default class SearchResults extends React.Component {

  componentDidMount() {
    // this.props.getSearchResults();
    // console.log('inside search results will mount');
    // console.log('results:', this.props.userData.searchResults);
  }


  // if (this.props.userData.searchResults)  
  render() {
    console.log('Search Component is rendered');
    return (
      <div className="row">
      <HomepageSearchBar getSearchResults={this.props.getSearchResults}/>
        <div className="col-sm-1 col-md-1"/>
        
        <div className="col-sm-10 col-md-10">
          { /* OpenQuestions.js */}
          <OpenQuestions 
            userCurrent={this.props.userData.user}
            questions={this.props.userData.searchResults}
            claimQuestion={this.props.claimQuestion} />


        </div>

        
      </div>


      
    );
  }
}