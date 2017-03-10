import React from 'react'
import axios from 'axios'

export default class HomepageSearchBar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    var context = this;
    console.log(document.getElementsByName("textbox1")[0].value);
    axios.get('/search?term=' + document.getElementsByName("textbox1")[0].value) //+ document.getElementsByName("textbox1")[0].value)
      .then(function(response){
      console.log("searchResp: ", response);
      context.setState({questions: response.data.map(quest => (
        quest.title + ': ' + quest.question)
        )
      });
     // comp.setState({questions: response.data[0].title});
    })
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-1"/>
            <div className="col-md-10 main">
              <h1>Lend a Hacking Hand</h1>
              <p>Help those who are in hacking needs</p>
              <div className="input-group">
                <input type="text" className="form-control" style={{marginBottom: 20 + 'px'}} name="textbox1" placeholder="Search for questions to answer..."/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.clickHandler}>Go!</button>
                </span>
              </div>
              <div>
              {this.state.questions.map(question => (
                  <p>{question}</p>
                ))}
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
};
