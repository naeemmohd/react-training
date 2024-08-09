'use client';

import { useState } from "react";
import Banner from "./components/banner";
export default function Home() {
  // React is Reactive - use of useState life hook

  function MyHeader(){
    return (
      <>
        <h1>My NextJs App - Header</h1>
        <Banner />
      </>
    )
  }

  function MyFooter(){
    return (
      <>
        <h5>@2024 - My NextJs App Footer</h5>
      </>
    )
  }

  function MyList({values, addtoValues}){
    const incrementBy = 2;
    return (
      <>
      <button onClick={ () => addtoValues(incrementBy) }>Add an Item to List</button>
      {
        values.map(id =>{
          return (
            <li key={id}>Item: {id}</li>
          );
        })
      }        
      </>
    );
  }

  // instead of using a normal const declaration, lets use a life hook useState
  // const values =[1,2,3,4,5];
  const [values, setValues] = useState([1,2,3,4,5]);
  function addtoValues(incrementBy) {
    const newValue = Math.max(...values) + incrementBy;
    setValues([...values, newValue]);
  }

  return (
    <div>
      <div>
        <MyHeader />
      </div>
      <div>
        <ul>
        <MyList values = {values} addtoValues = {addtoValues} />
        </ul>
      </div>
      <div>
        <MyFooter />
      </div>
    </div>
  );
}