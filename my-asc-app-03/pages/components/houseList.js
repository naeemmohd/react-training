import HouseRow from "./houseRow";

const houses = [
    {
        id: 1,
        address: "123 Frisco way, Friso, TX 75035",
        country: "USA",
        price: 135000
    },
    {
        id: 2,
        address: "456 Plano Pkwy, Plano, TX 75025",
        country: "India",
        price: 175000
    },
];
const HouseList = (props) => {
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
        </>

    );
};

export default HouseList;