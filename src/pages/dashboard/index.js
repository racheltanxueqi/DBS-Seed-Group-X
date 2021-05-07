import React, { Component } from 'react';
import AccountDetails from '../../components/AccountDetails'
import './index.css';

export default class Dashboard extends Component {

  render() {
    return(
      <div className="container">
        <AccountDetails></AccountDetails>
      </div>
    )
  }

}