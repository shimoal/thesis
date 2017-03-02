import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//just call the actions you want to trigger inside this container
//these will be available as props in this container
import { actionTwoIncrease, actionTwoDecrease } from '../actions/index';

class ContainerTwo extends Component {

  render() {
    return(
      <div className="counter">
        <h2>Spanish Counter</h2>
        <div onClick={()=> this.props.actionTwoIncrease()}> actionTwoIncrease </div>
        <div onClick={()=> this.props.actionTwoDecrease()}> actionTwoDecrease </div>
        <div>{this.props.StateTwoCurrent} </div>
      </div>
    )
  }
}
//magic happens here. INstead of passing the new state down as props, we just connect it here!!! 
//Reducer returns new state, and we capture it in StateOneCurrent which will be rendered inside this smart component.
const mapStateToProps = state => {
  return {
    StateTwoCurrent: state.reducer_Two,
  }
}

//this bind all the actions to something that we don't know.
//and we don't know what's being pass here (as dispatch)
const mapDispatchToProps = dispatch => {
  return bindActionCreators( {
    actionTwoIncrease,
    actionTwoDecrease
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (ContainerTwo);
