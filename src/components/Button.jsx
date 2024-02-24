import { useState } from "react";

const Button = () => {
  const [btnColor, setBtnColor] = useState("red");
  return (
    <>
      <h2>Button Test:</h2>
      <div className="btn-container">
        <button
          onClick={() => setBtnColor(btnColor === "red" ? "blue" : "red")}
          style={{ background: btnColor }}
        >
          {btnColor === "red" ? "Turn Blue" : "Turn Red"}
        </button>
      </div>
    </>
  );
};

export default Button;
