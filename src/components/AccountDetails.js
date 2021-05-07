import React, { Component } from 'react';

export default class AccountDetails extends Component {

  state = {
    // TEMP
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
    accounts: [],
    accountView: {}
  }

  componentDidMount() {
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
          accountView: response[0]
        }, () => console.log(this.state))
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <div className="card border">
          <p>Hi, {this.state.login.firstName}</p>
          <table>
            <tbody>
              {this.state.accounts.map(function (account, i) {
                return (
                  <tr key={i}>
                    <td>Account Number<br></br>{account.accountNumber}</td>
                    <td>Available Balance<br></br>{account.availableBal}</td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
        <div className="card">
          <form>
            <label>Account Type: </label>
            <select>
              {this.state.accounts.map(function (account, i) {
                return (
                  <option key = {i}>{account.accountName}</option>
                )
              })}
            </select>
          </form>
        </div>
        <div className="card border">
          <button>Transfer</button>
        </div>
      </div>
    )
  }

}