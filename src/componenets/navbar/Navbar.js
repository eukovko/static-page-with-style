import reactLogo from "../../images/react-logo.png";
import "./style.css"

function Navbar() {
    return (
        <header className={"header"}>
            <div className={"title"}>
                <img className={"logo"} src={reactLogo}/>
                <h1>ReactFacts</h1>
            </div>
            <ul className={"menu"}>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <h1 className={"name"}>React Course - Project 1</h1>
        </header>
    )
}

export default Navbar