import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Features from "./Features";
import Pricing from "./Pricing";
import FAQs from "./FAQs";
import About from "./About";




function App() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/features" element={<Features/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/faqs" element={<FAQs/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
