const TransferEGift = ({ setTransferEGift, giftChecked }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={giftChecked}
        value={giftChecked}
        onChange={(e) => setTransferEGift(e.currentTarget.checked)}
      ></input>
    </div>
  );
};

export default TransferEGift;
