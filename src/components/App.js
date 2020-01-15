import React, {Component } from 'react';
import Main from './Main';
import User from './User';
import '../App.css';
import { connect } from 'react-redux';

class App extends Component {
  
  render(){
      return (
      <div className="container">
        <Main changeUsername={() => {this.props.setName("Anna")} }  />
        <User username={this.props.user.name} />
      </div>
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    user: state.user, 
    math: state.math
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
   setName: (name) => {
     dispatch({
       type: "SET_NAME",
       payload: name
     })
   }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(App);