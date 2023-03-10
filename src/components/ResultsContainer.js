import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";
import Stats from "./Stats";
import "./Results.scss";
import MoleculeStructure from "./MoleculeStructure";

const ResultsContainer = ({ searchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setSearchResults([]);
      try {
        const response = await axios.get(
          //https://www.ebi.ac.uk/chembl/api/data/activity.json?target_chembl_id__in=CHEMBL5552,assay_type=B&only=molecule_chembl_id,pchembl_value
          `https://www.ebi.ac.uk/chembl/api/data/activity.json?target_chembl_id__in=${searchTerm}&pchembl_value__gte=5&assay_type=B&only=activity_id,canonical_smiles,molecule_chembl_id,pchembl_value`
        );
        setSearchResults(response.data.activities);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <Alert message={error} type="danger" />}

      {searchResults.length > 0 && (
        <div className="Results-content">
          <h2 className="u-heading">
            Results for:
            <span className="Results-accentText">{searchTerm}</span>
          </h2>
          <h3 className="Results-listName">IC50 Value Info</h3>
          <Stats key="stats-{result.activity_id}" activities={searchResults} />

          <h3 className="Results-listName">Distribution of IC50 Values</h3>
          <ul className="Results-list">
            <li className="Results-listItem">histogram</li>
          </ul>

          <h3 className="Results-listName">Molecular Weight Against IC50</h3>
          <ul className="Results-list">
            <li className="Results-listItem">scatter</li>
          </ul>

        </div>
      )}

      {searchResults.length > 0 && (
        <>
          <h3 className="Results-listName">Compounds</h3>
          <ul className="Results-list">
            {searchResults.map((result) => (
              <li className="Results-listItem" key={result.canonical_smiles}>
                <MoleculeStructure
                  id="structure-example-substruct-svg-caffeine"
                  structure={result.canonical_smiles}
                  width={350}
                  height={300}
                  svgMode
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ResultsContainer;
