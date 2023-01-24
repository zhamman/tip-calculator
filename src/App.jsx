import "./App.scss";
import Result from "./components/Result";
import Tip from "./components/Tip";
import React, { useState } from "react";
import { BillContext, TipContext, PeopleContext } from "./Contexts/contexts";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  const activeTip = val => {
    setTip(val);
  };

  const billInput = e => {
    setBill((e = e.target.value));
  };

  const resetInputField = e => {
    setBill("");
    setPeople("");
  };

  const peopleCount = e => {
    setPeople((e = e.target.value));
  };

  return (
    <div className="center">
      <div className="app">
        <div className="left-side">
          <BillContext.Provider
            value={{ bill, billInput, setBill, resetInputField }}
          >
            <TipContext.Provider value={{ tip, activeTip, setTip }}>
              <PeopleContext.Provider
                value={{ people, peopleCount, setPeople, resetInputField }}
              >
                <Tip />
              </PeopleContext.Provider>
            </TipContext.Provider>
          </BillContext.Provider>
        </div>
        <div className="right-side">
          <BillContext.Provider
            value={{ bill, billInput, setBill, resetInputField }}
          >
            <TipContext.Provider value={{ tip, activeTip, setTip }}>
              <PeopleContext.Provider
                value={{ people, peopleCount, setPeople, resetInputField }}
              >
                <Result />
              </PeopleContext.Provider>
            </TipContext.Provider>
          </BillContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
