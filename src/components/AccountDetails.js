import { Link } from "react-router-dom";
import React, { Component } from 'react';

export default class AccountDetails extends Component {

  state = {
    login: [],
    accounts: [],
    accountView: {}
  }

  componentDidMount() {
    this.setState({
      login: {
        "phoneNumber": "(+65) 92364409",
        "accountKey": "48gif4pk-1iw6-gk83-g18a-qatlrut8g1z",
        "custID": 6,
        "lastName": "Elkins",
        "address": "0910 Hays Cliff\nEast Dustin, CO 00615",
        "email": "june@hotmail.com",
        "gender": "Female",
        "nric": "S5241874B",
        "firstName": "June",
        "age": 69
      },
    })
    this.getUserDetails()
  }

  getUserDetails() {
    fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
      "method": "POST",
      "headers": {
        "x-api-key": "QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ",
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        "custID": 6,
        "accountKey": "48gif4pk-1iw6-gk83-g18a-qatlrut8g1z"
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
          <h2>Hi, <span className="blue">{this.state.login.firstName}</span></h2>
          <div className="spread">
            <div>Account Number</div>
            <div>Available Balance</div>
          </div>
          {this.state.accounts.map(function (account, i) {
            return (
              <div className="spread blue" key={i}>
                <div>{account.accountNumber}</div>
                <div>{account.availableBal.toFixed(2)}</div>
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