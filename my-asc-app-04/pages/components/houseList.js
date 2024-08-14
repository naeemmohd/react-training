import React, { useEffect, useRef, useState } from "react";
import HouseRow from "./houseRow";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/api/houses");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []);

  //how to use useRef for getting reference of a DOM element
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  //how to use useRef  for tracking state changes
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "1132 Valley Way, Prosper, TX 75065",
        description: "A beautiful single family home in sub-urb Prosper.",
        country: "USA",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Description</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add a House
      </button>
      
      <br /><br /><hr />
      <div>
        <label>Demonstrate how to use useRef for getting reference of a DOM element</label>
      </div>
      
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus on Textbox</button>

      <br /><br /><hr />
      <div>
      <label>Demonstrate how to use useRef  for tracking state changes</label>
      </div>
      
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h5>Current Value: {inputValue}</h5>
      <h5>Previous Value: {previousInputValue.current}</h5>
    </>
  );
};

export default HouseList;