import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
    return (
        <div className="bg-light d-flex flex-column min-vh-100">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
