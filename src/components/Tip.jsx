import React, { useContext, useState } from "react";
import SelectTip from "./SelectTip";
import { BillContext, PeopleContext, TipContext } from "../Contexts/contexts";
import "./Tip.scss";

const Tip = () => {
  const { billInput, bill } = useContext(BillContext);
  const { tip, activeTip } = useContext(TipContext);
  const { people, peopleCount } = useContext(PeopleContext);

  return (
    <div className="left-container">
      <div className="bill-form">
        <label> Bill </label>
        <input type="number" placeholder="" onChange={billInput} value={bill} />
      </div>
      <SelectTip activeTip={activeTip} tip={tip} />
      <div className="num-of-ppl">
        <label>Number of People</label>
        <input type="number" onChange={peopleCount} value={people} />
      </div>
    </div>
  );
};

export default Tip;
