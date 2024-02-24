import { useState } from "react";

const SendForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <h2>Agreement Test</h2>
      <div className="send-container">
        <div>
          <input onChange={() => setIsChecked(!isChecked)} type="checkbox" />
          <label htmlFor="">I Agree</label>
        </div>
        <button disabled={!isChecked}>Send</button>
      </div>
    </>
  );
};

export default SendForm;
