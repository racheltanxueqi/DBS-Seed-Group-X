const TransferTo = ({ setAccountTo }) => {
  return (
    <div>
      <h1>To</h1>
      <input
        type="text"
        placeholder="Enter account number:"
        onChange={(e) => setAccountTo(e.target.value)}
      ></input>
    </div>
  );
};

export default TransferTo;
