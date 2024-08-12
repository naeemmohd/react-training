// styles from a module
import styles from "./banner.module.css"

//inline styles
const subTitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large"
};

const Banner = (props) => {
    return (
        <header className="row mb-4">
            <div className="col-2 justify-content-center">
                <img className={styles.logo} src="./logo.png" alt="logo" />
            </div>
            <div className="col-10 mt-5 themeFontColor" style={subTitleStyle}>
                <div className="row justify-content-center">{props.headerText}</div>
                <div className="row justify-content-center">{props.subHeaderText}</div>
            </div>
        </header>
    );
}

export default Banner;