import Banner from "./banner";
import HouseList from "./houseList";

const App = () => {
    return (
    <>
        <div>
            <Banner 
                headerText = "Providing houses all over the world" 
                subHeaderText = "Your dream house you want"
            />
        </div>
        <div>
            <HouseList 
                headerText = "Houses currently on market" 
            />
        </div>        
    </>
    );
}

export default App;