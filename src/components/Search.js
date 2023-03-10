import React, { useState } from "react";
import "./Search.scss";

const Search = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm.toUpperCase());
  };

  return (
    <div className="Search">
      <h2 className="u-heading">What are you looking for today?</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 mt-5">
          <span className="input-group-text" id="basic-addon1">
            ChEMBL
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="ex: CHEMBL5552"
            aria-label="chemical ID number"
            aria-describedby="basic-addon1"
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className="btn btn-primary btn-custom"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
