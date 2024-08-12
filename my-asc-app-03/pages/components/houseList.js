import { useState } from "react";
import HouseRow from "./houseRow";

const housesArray = [
    {
        id: 1,
        address: "123 Frisco way, Friso, TX 75035",
        country: "USA",
        price: 135000
    },
    {
        id: 2,
        address: "456 Plano Pkwy, Plano, TX 75025",
        country: "USA",
        price: 175000
    },
];
const HouseList = (props) => {
    // use of state with an object reference
    const [houses, setHouses] = useState(housesArray);

    // function to update the state
    const addHouse = () => {
        //how to update state using spread syntax
        setHouses([
            ...houses, // the original array 
            {          // adding an element 
                id: 3,
                address: "567 Prosper Blvd, Prosper, TX 75065",
                country: "USA",
                price: 185000
            },        
        ]);
    };

    return (
        <>
            
            <div>
                <h5 className="themeFontColor text-center">
                    {props.headerText}
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => <HouseRow key={h.id} house = {h} />)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add a house
            </button>
        </>

    );
};

export default HouseList;