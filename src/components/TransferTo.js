const TransferTo = ({ setAccountTo }) => {
  return (
    <div className="transfer-to">
      <h3>Account to transfer to</h3>
      <input
        type="text"
        placeholder="Enter account number:"
        onChange={(e) => setAccountTo(e.target.value)}
      ></input>
    </div>
  );
};

export default TransferTo;
