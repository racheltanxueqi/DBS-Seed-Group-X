import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import Modal from 'react-modal';
import AccountDetails from '../../components/AccountDetails'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
};

function Dashboard(props) {

    const [accountKey, setAccountKey] = useState('')
    const [custID, setCustID] = useState('')
    const [accounts, setAccounts] = useState({})
    const [transaction, setTransaction] = useState([])
    // const [groupedTrans, setGroupedTrans] = useState([])

    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = 'black';
    }
  
    function closeModal(){
      setIsOpen(false);
    }

    useEffect( async () => {
        const transaction_view_url = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view'

        const res_transaction_view = await axios.post(transaction_view_url, {
            custID: 6,
            accountKey: '48gif4pk-1iw6-gk83-g18a-qatlrut8g1z'
        }, {headers: {'x-api-key': 'QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ'}});
        console.log(res_transaction_view)
        setTransaction(res_transaction_view.data)
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


    function renderTransView(item) {
        return (
            
            <div className="row">
                <h5>PayeeID: {item['payeeID'].toString()}</h5>
                <h3><div className="currency">SGD</div>{item['amount']}</h3>
                <button onClick={openModal}>View More</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="description"
                    >
                    <h2 ref={_subtitle => (subtitle = _subtitle)}><div className="currency">SGD</div>{item['amount']}</h2>
                    <h2 ref={_subtitle => (subtitle = _subtitle)}>{item['message']}</h2>
                    {item['message'] !== "" > 0 ? 
                        <div className="subtitle">                   
                            <div className="modal-label">Message</div>
                            <div>{item['message']}</div>                   
                        </div>

                    : ""
                    }
                    {item['expenseCat'] !== "" > 0 ?
                        <div className="subtitle">
                            <div className="modal-label">Category</div>
                            <div className="modal-subtitle">{item['expenseCat']}</div>
                        </div> : ""
                    }
    
                    <button onClick={closeModal}>Close</button>
                </Modal>
            </div>
        )
    }

    return (
        <div>
            <div className="container accounts-section">
                <AccountDetails userList={props.userList}></AccountDetails>
            </div>
            <div className="trans-section">
                <h1>Transaction History</h1>

                <div>
                    {transaction.length > 0 ? sortAndGroupTransByDateTime(transaction) : null}
                    <h3>{transaction.length > 0 ? transaction[0]['datetime'] : ''}</h3>
                    {transaction.length > 0 ? transaction.map((item) =>(renderTransView(item))) : ''}
                </div>
                
            </div>
        </div>
        

    )
}

export default Dashboard;
// =======
// import React, { Component } from 'react';
// import AccountDetails from '../../components/AccountDetails'
// import './index.css';

// export default class Dashboard extends Component {

//   // componentDidMount() {
//   //   console.log(this.props)
//   // }
//   render() {
//     return(
//       <div className="container">
//         <AccountDetails userList={this.props.userList}></AccountDetails>
//       </div>
//     )
//   }

// }
// >>>>>>> dashboard-ferne
