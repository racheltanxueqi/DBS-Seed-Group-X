import React, { Component } from 'react';
import AccountDetails from '../../components/AccountDetails'
import './index.css';

export default class Dashboard extends Component {

  render() {
    return(
      <div>
        <p>Dashboard</p>
        <AccountDetails></AccountDetails>
      </div>
    )
  }

}