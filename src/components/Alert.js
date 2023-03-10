import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Alert = ({ message, type, timeout }) => {
  const [showAlert, setShowAlert] = useState(true);

  timeout = timeout || 10000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  return showAlert ? (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  ) : null;
};

export default Alert;
