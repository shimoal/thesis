import React from 'react';
import { Link } from 'react-router';
import ReactStars from 'react-stars'

export default React.createClass({

  constructProfileLink() {
    return 'profile/' + this.props.details.id;
  },

  render() {

    console.log('this.props.details', this.props.details);

    return (
      <div className="col-xs-6 col-sm-3 placeholder">
        <img src={this.props.details.profile_img} width="200px"/>
        <h3><Link to={this.constructProfileLink()}>{this.props.details.name}</Link></h3>
        
        <p>&nbsp;</p>
        {this.props.details.reviewRatings !== undefined ? (
          <div>
            <p>averageOverall: {this.props.details.reviewRatings.averageOverall}</p>
            <p>averageKnowledge: {this.props.details.reviewRatings.averageKnowledge}</p>
            <p>averageHelpfulness: {this.props.details.reviewRatings.averageHelpfulness}</p>
            <p>averageExperience: {this.props.details.reviewRatings.averageExperience}</p>
          </div> 
          ) : (
          <p>no reviews</p>
          )
        }
        

      </div>
    );
  }
});
// <div className="table-responsive">
        //       <table className="table">
        //         <tbody>
        //           <tr>
        //             <td>Overall</td>
        //             <td>
        //               <ReactStars
        //               value={this.state.overall}
        //                 count={5}
        //                 half={false}
        //                 edit={false}/>
        //             </td>
        //           </tr>
        //           <tr>
        //             <td>&nbsp;</td>
        //             <td>&nbsp;</td>
        //           </tr>
        //           <tr>
        //             <td>Knowledge</td>
        //             <td>
        //               <ReactStars
        //               value={this.state.knowledge}
        //                 count={5}
        //                 half={false}
        //                 edit={false}/>
        //             </td>
        //           </tr>
        //           <tr>
        //             <td>Helpfulness</td>
        //             <td>
        //               <ReactStars
        //               value={this.state.helpfulness}
        //                 count={5}
        //                 half={false}
        //                 edit={false}/>
        //             </td>
        //           </tr>
        //           <tr>
        //             <td>Overall Experience</td>
        //             <td>
        //               <ReactStars
        //               value={this.state.experience}
        //                 count={5}
        //                 half={false}
        //                 edit={false}/>
        //             </td>
        //           </tr>
        //         </tbody>
        //       </table>
        //     </div>