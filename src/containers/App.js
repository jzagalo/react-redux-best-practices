import React, {Component } from 'react';
import { Main } from '../components/Main';
import { User } from '../components/User';
import '../App.css';
import { connect } from 'react-redux';
import { setName } from '../actions/userAction';

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
    dispatch(setName(name))
   }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(App);