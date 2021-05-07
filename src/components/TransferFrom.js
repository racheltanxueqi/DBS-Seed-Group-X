const TransferFrom = ({ setAccountFrom }) => {
  return (
    <div>
      <h1>From</h1>
      <input
        type="text"
        placeholder="Enter account number:"
        onChange={(e) => setAccountFrom(e.target.value)}
      ></input>
    </div>
  );
};

export default TransferFrom;
