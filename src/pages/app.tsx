import {useRouter} from 'next/router';
import Header from './header';
import Footer from './footer';
import Main from './main';
import Features from './features';
import Faqs from './faqs';
import About from './about';
import Price from "./price";

function App(): JSX.Element {
    const router = useRouter();

    return (
        // Auto layout min-vh-100
        <div className="d-flex flex-column min-vh-100">
            <Header/>
            {router.pathname === '/' && <Main/>}
            {router.pathname === '/features' && <Features/>}
            {router.pathname === '/price' && <Price/>}
            {router.pathname === '/faqs' && <Faqs/>}
            {router.pathname === '/about' && <About/>}
            <Footer/>
        </div>
    );
}

export default App;
