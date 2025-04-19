import React, { useState } from "react";

function Welcome({ name }) {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Welcome, {name}!</h1>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage && <p>This is a toggleable message!</p>}
    </div>
  );
}

export default function App() {
  return <Welcome name="Student" />;
}
