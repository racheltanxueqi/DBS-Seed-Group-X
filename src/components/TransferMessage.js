const TransferMessage = ({ setTransferMessage }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a message:"
        onChange={(e) => setTransferMessage(e.target.value)}
      ></input>
    </div>
  );
};

export default TransferMessage;
