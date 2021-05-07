import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

function Dashboard() {

    const [accountKey, setAccountKey] = useState('')
    const [custID, setCustID] = useState('')
    const [accounts, setAccounts] = useState({})
    const [transaction, setTransaction] = useState([])
    // const [groupedTrans, setGroupedTrans] = useState([])

    useEffect( async () => {
        // FOR TESTING DASHBOARD PAGE ONLY, LOGIN PEOPLE SHOULD PASS AS PROPS
        const login_url = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login'
        const accounts_url = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts'
        const transaction_view_url = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view'

        const res_login = await axios.post(login_url, {
            userName: 'Group6',
            userPass: 'z!80Q&g$aTF983C'
        }, {headers : {'x-api-key': 'QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ'}})

        setAccountKey(res_login.data['accountKey'])
        setCustID(res_login.data['custID'])
        // console.log("login res" , res_login)
        // console.log("login res" , res_login.data['accountKey'])
        // console.log(res_login.data['custID'])

        const res_account = await axios.post(accounts_url, {
            custID: 6,
            accountKey: '48gif4pk-1iw6-gk83-g18a-qatlrut8g1z'
        }, {headers: {'x-api-key': 'QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ'}});

        // Set the default / user's selected account type to view transaction history
        setAccounts(res_account.data[0])
        console.log("res account", res_account)

        const res_transaction_view = await axios.post(transaction_view_url, {
            custID: 6,
            accountKey: '48gif4pk-1iw6-gk83-g18a-qatlrut8g1z'
        }, {headers: {'x-api-key': 'QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ'}});
        console.log(res_transaction_view)
        setTransaction(res_transaction_view.data)
        // console.log("transaction", res_transaction_view.data[0])
    }, []);

    function sortAndGroupTransByDateTime(transaction) {
        // sort 
        const sortedTrans = transaction.sort((a, b) => b.datetime - a.datetime)
        // console.log('sortedTrans', sortedTrans)

        // format date
        for (var i = 0; i < sortedTrans.length; i++) {
            const date_arr = Date(sortedTrans[i]['datetime']).split(' ')
            const date_string = date_arr[2] + ' ' + date_arr[1] + ' ' + date_arr[3]
            sortedTrans[i]['datetime'] = date_string
        }
        console.log(sortedTrans)

        // group
        // const groups = sortedTrans.reduce((groups, trans) => {
        // if (!groups['datetime']) {
        //     groups['datetime'] = [];
        // }

        // groups['datetime'] = (trans);
        // return groups;
        // }, {});
        // console.log(groups)
        // // Edit: to add it in the array format instead
        // const groupArrays = Object.keys(groups).map((datetime) => {
        // return {
        //     datetime,
        //     transaction: groups[datetime]
        // };
        // });

        // setGroupedTrans(groupArrays);
        // console.log('groupArrays', groupArrays)

    }

    // function getPayeeAccountNumber(payeeID) {
        
    // }

    function renderTransView(item) {
        console.log(item)
        return (
            <div className="row">
                <h5>PayeeID: {item['payeeID'].toString()}</h5>
                <div>
                <h3><div className="currency">SGD</div>{item['amount']}</h3>
                </div>
                <button>View More</button>
            </div>
        )
    }

    return (

        <div>
            <h1>Transaction History</h1>

            <div>
                {transaction.length > 0 ? sortAndGroupTransByDateTime(transaction) : null}
                <h3>{transaction.length > 0 ? transaction[0]['datetime'] : ''}</h3>
                {transaction.length > 0 ? transaction.map((item) =>(renderTransView(item))) : ''}
            </div>
            
        </div>

    )
}

export default Dashboard;
