import React,{ Component } from 'react';


export default class User extends Component {

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                       <p> User: {this.props.username} </p>
                    </div>
                </div>
            </div>
        );
    }
}