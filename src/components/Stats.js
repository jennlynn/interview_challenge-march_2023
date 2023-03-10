import React from "react";
import "./Header.scss";

const Stats = ({ activities }) => {
  // Calculate the mean, median, std-dev.
  function calculateStats(activities) {
    // Extract pchembl_values from activities array
    const pchemblValues = activities.map((activity) =>
      parseFloat(activity.pchembl_value)
    );

    // Calculate mean
    const mean =
      pchemblValues.reduce((sum, value) => sum + value, 0) /
      pchemblValues.length;

    // Calculate median
    const sortedValues = pchemblValues.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedValues.length / 2);
    const median =
      sortedValues.length % 2 === 0
        ? (sortedValues[middleIndex - 1] + sortedValues[middleIndex]) / 2
        : sortedValues[middleIndex];

    // Calculate standard deviation
    const deviationFromMean = pchemblValues.map((value) => value - mean);
    const squaredDeviations = deviationFromMean.map(
      (deviation) => deviation ** 2
    );
    const sumOfSquaredDeviations = squaredDeviations.reduce(
      (sum, deviation) => sum + deviation,
      0
    );
    const variance = sumOfSquaredDeviations / pchemblValues.length;
    const standardDeviation = Math.sqrt(variance);

    return { mean, median, standardDeviation };
  }

  const stats = calculateStats(activities);

  return (
    <ul className="Results-list">
      <li className="Results-listItem"><p className="Results-listItemName">mean</p> {stats.mean}</li>
      <li className="Results-listItem"><p className="Results-listItemName">mean</p> {stats.median}</li>
      <li className="Results-listItem"><p className="Results-listItemName">mean</p> {stats.standardDeviation}</li>
    </ul>
  );
};

export default Stats;
