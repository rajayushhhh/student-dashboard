
import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();


  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>🎓 Welcome to Student Dashboard Portal</h2>
      <p style={{ margin: "10px 0 20px", color: "#555" }}>
        Manage students easily and securely with Firebase.
      </p>
      <button onClick={goToLogin}>Start →</button>
    </div>
  );
}

export default Welcome;
