import React, { Component } from 'react';
import AccountDetails from '../../components/AccountDetails'
import './index.css';

export default class Dashboard extends Component {

  // componentDidMount() {
  //   console.log(this.props)
  // }
  render() {
    return(
      <div className="container">
        <AccountDetails userList={this.props.userList}></AccountDetails>
      </div>
    )
  }

}