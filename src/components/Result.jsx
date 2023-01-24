import React, { useContext } from "react";
import { BillContext, PeopleContext, TipContext } from "../Contexts/contexts";
import "./Results.scss";

const Result = () => {
  const { bill, resetInputField } = useContext(BillContext);
  const { tip, activeTip } = useContext(TipContext);
  const { people, peopleCount } = useContext(PeopleContext);

  const tipAmount = parseInt(tip) * 0.01 * bill;
  const totalTipPer = tipAmount / parseInt(people);
  const totalTipPerDecimal = totalTipPer.toFixed(2);
  const totalAmountPer = (tipAmount + parseInt(bill)) / parseInt(people);
  const totalAmountPerDecimal = totalAmountPer.toFixed(2);

  return (
    <div className="result-container">
      <div className="results">
        <div className="result-section">
          <div className="label-section">
            <div className="label">
              <p>Tip Amount</p>
              <p className="sub-head">/ person</p>
            </div>
          </div>
          <div className="number-section">
            {bill && tip && people ? (
              <h1>${totalTipPerDecimal} </h1>
            ) : (
              <h1>$0.00</h1>
            )}
          </div>
        </div>
        <div className="result-section">
          <div className="label-section">
            <div className="label">
              <p>Total</p>
              <p className="sub-head">/ person</p>
            </div>
          </div>
          <div className="number-section">
            {bill && tip && people ? (
              <h1>${totalAmountPerDecimal} </h1>
            ) : (
              <h1>$0.00</h1>
            )}
          </div>
        </div>
      </div>
      <div className="button">
        <button
          onClick={() => {
            activeTip("");

            resetInputField();
          }}
        >
          {" "}
          reset{" "}
        </button>
      </div>
    </div>
  );
};

export default Result;
