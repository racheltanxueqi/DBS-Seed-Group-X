const TransferAmount = ({ setTransferAmount }) => {
  return (
    <div>
      <label>Amount: </label>
      <input
        type="text"
        placeholder="Amount to transfer:"
        onChange={(e) => setTransferAmount(e.target.value)}
      ></input>
    </div>
  );
};

export default TransferAmount;
