const TransferFrom = ({ setAccountFrom }) => {
  return (
    <div className="transfer-from">
      <h3>Account to transfer from</h3>
      <input
        type="text"
        placeholder="Enter account number:"
        onChange={(e) => setAccountFrom(e.target.value)}
      ></input>
    </div>
  );
};

export default TransferFrom;
