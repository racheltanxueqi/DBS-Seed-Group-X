import { Link } from "react-router-dom";
import React, { Component } from 'react';

export default class AccountDetails extends Component {

  state = {
    login: {},
    accounts: [],
    accountView: {}
  }

  componentDidMount() {
    // console.log("prop",this.props.userList)
    this.setState({
      login: {
        name: this.props.userList[0],
        custID: this.props.userList[1],
        accountKey: this.props.userList[2],
      }
    }, () => this.getUserDetails())
    
  }

  getUserDetails() {
    console.log(this.state.login)
    fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
      "method": "POST",
      "headers": {
        "x-api-key": "QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ",
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        "custID": this.state.login.custID,
        "accountKey": this.state.login.accountKey
      })
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          accounts: response,
          accountView: response[0] || {}
        }, () => console.log(this.state))
      })
      .catch(err => {
        // err handling
        console.log(err);
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      accountView: this.state.accounts.find(account => account.accountNumber == e.target.value)
    })
  }

  render() {
    return (
      <div>
        <div className="card border">
          <h1>Accounts</h1>
          <h2>Hi, <span className="blue">{this.state.login.name}!</span></h2>
          <div className="spread">
            <h3>Account Number</h3>
            <h3>Available Balance</h3>
          </div>
          {this.state.accounts.map(function (account, i) {
            return (
              <div className="spread blue" key={i}>
                <div className="account">{account.accountNumber}</div>
                <div className="account">{account.availableBal.toFixed(2)}</div>
              </div>
            )
          })}
        </div>
        <div className="spread">
          <label>My Account Type: </label>
          <select onChange={this.handleChange} name="accountView">
            {this.state.accounts.map(function (account, i) {
              return (
                <option key={i} value={account.accountNumber}>{account.accountName}</option>
              )
            })}
          </select>
        </div>
        <div className="card border spread">
          <div>
            {this.state.accountView.accountName}<br></br>{this.state.accountView.accountNumber}
          </div>
          <div>
            {this.state.accountView.availableBal ? this.state.accountView.availableBal.toFixed(2) : 0.00}
          </div>
        </div>
        <div className="card border center">
          <Link
            to={{
              pathname: "/dashboard",
            }}
          ><button>Transfer</button></Link>
        </div>
      </div>
    )
  }

}