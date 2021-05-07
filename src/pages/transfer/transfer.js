import { useState } from "react";

import TransferFrom from "../../components/TransferFrom";
import TransferTo from "../../components/TransferTo";
import TransferAmount from "../../components/TransferAmount";
import TransferConfirmBtn from "../../components/TransferConfirmBtn";
import TransferMessage from "../../components/TransferMessage";
import TransferEGift from "../../components/TransferEGift";
import Modal from "react-modal";
import React from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Transfer = ({ userList }) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#0f0";
  }

  function closeModal() {
    setIsOpen(false);
  }
  // Data
  const [accountFrom, setAccountFrom] = useState(0);
  const [accountTo, setAccountTo] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferMessage, setTransferMessage] = useState("");
  const [transferEGift, setTransferEGift] = useState(false);

  // When submit button is pressed
  const onSubmit = async (e) => {
    e.preventDefault();

    // Make API call to add transaction
    const addTransaction = async () => {
      const res = await fetch(
        "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "x-api-key": "QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ",
          },
          body: `"custID": ${accountFrom},
          "accountKey": "${userList[2]}",
          "payeeID": ${accountTo},
          "amount": ${transferAmount},
          "eGift": ${transferEGift},
          "message": ${transferMessage}`,
        }
      );
      console.log(res);
    };
    addTransaction();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="transfer">
          <h1>Funds Transfer</h1>
          <div>
            <TransferFrom setAccountFrom={setAccountFrom} />
            <TransferTo setAccountTo={setAccountTo} />
          </div>
          <div>
            <TransferAmount setTransferAmount={setTransferAmount} />
            <TransferMessage setTransferMessage={setTransferMessage} />
            <TransferEGift
              setTransferEGift={setTransferEGift}
              giftChecked={transferEGift}
            />
            <input type="submit" value="Transfer" onClick={openModal}></input>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Success!</h2>
              <button onClick={closeModal}>close</button>
            </Modal>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
