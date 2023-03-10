import React, { useState } from "react";
import Alert from "./components/Alert";
import Header from "./components/Header";
import Search from "./components/Search";
import ResultsContainer from "./components/ResultsContainer";
import "./App.scss";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSearchSubmit = (searchTerm) => {
    if (!searchTerm) {
      setAlertMessage("Please enter a search term.");
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    setAlertMessage("");
    setSearchTerm(searchTerm);
  };

  return (
    <div className="App">
      <Header />
      {showAlert && <Alert message={alertMessage} type="danger" />}
      <section className="App-section">
        <Search onSubmit={handleSearchSubmit} />
      </section>
      <section className="App-section">
        <ResultsContainer searchTerm={searchTerm} />
      </section>
    </div>
  );
};

export default App;
