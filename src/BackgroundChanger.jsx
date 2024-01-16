import { useState } from "react";

function BackgroundChanger() {
  const [backgroundColor, setBackgroundColor] = useState("#242424");
  const [showMessage, setShowMessage] = useState(true);

  const handleColorChange = (color) => {
    document.body.style.backgroundColor = color;
    setBackgroundColor(color);
    setShowMessage(false);
  };

  const handleDefaultColorChange = (color) => {
    document.body.style.backgroundColor = color;
    setBackgroundColor(color);
    setShowMessage(true);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between", // space between buttons
    alignItems: "center", // center vertically
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "20px",
    width: "700px", // change the width if more buttons are added
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    backgroundColor: "#242424",
  };

  const messageStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: showMessage ? "block" : "none",
  };

  return (
    <>
      <div style={messageStyle}>
        {showMessage && <p>This is a Background Changer app</p>}
      </div>
      <div style={containerStyle}>
        <button onClick={() => handleDefaultColorChange("#242424")}>
          Default
        </button>
        <button onClick={() => handleColorChange("#fb3640")}>Red</button>
        <button onClick={() => handleColorChange("#FFC300")}>Mango</button>
        <button onClick={() => handleColorChange("#dabcff")}>Violet</button>
        <button onClick={() => handleColorChange("#3EB489")}>Mint</button>
        <button onClick={() => handleColorChange("#89CFF0")}>Baby Blue</button>
        <button onClick={() => handleColorChange("#FFF5EA")}>Creme</button>
      </div>
    </>
  );
}

export default BackgroundChanger;
