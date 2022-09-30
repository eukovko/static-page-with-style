import MainContent from "./componenets/main/MainContent";
import Navbar from "./componenets/navbar/Navbar";
import Footer from "./componenets/footer/Footer";
import "./style.css"

function App() {
    return (
        <div className={ "container" }>
            <Navbar/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
