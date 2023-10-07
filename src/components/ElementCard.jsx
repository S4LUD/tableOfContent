/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

function formatNumberWithFourDecimals(inputString) {
  const number = parseFloat(inputString); // Convert to a floating-point number

  if (!isNaN(number)) {
    const roundedNumber = number.toFixed(4); // Round to 4 decimal places and convert to string
    return roundedNumber;
  } else {
    return "Invalid input"; // Handle invalid input, e.g., when the input is not a valid number
  }
}

export default function ElementCard({
  atomicNumber,
  name,
  atomicMass,
  symbol,
  background,
}) {
  if (symbol === undefined) {
    return <div className="elementCardEmpty"></div>;
  }

  return (
    <div className="element-card" style={{ background }}>
      <div className="element-card-1">
        <p className="atomicNumber">{atomicNumber}</p>
        <p className="atomicMass">{formatNumberWithFourDecimals(atomicMass)}</p>
      </div>
      <div className="element-card-2">
        <p className="symbol">{symbol}</p>
        <p className="name">{name}</p>
      </div>
    </div>
  );
}

// Define prop types for ElementCard
ElementCard.propTypes = {
  atomicNumber: PropTypes.string,
  name: PropTypes.string,
  atomicMass: PropTypes.string,
  symbol: PropTypes.string,
  background: PropTypes.string,
};
