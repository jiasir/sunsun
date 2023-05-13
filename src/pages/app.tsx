import {useRouter} from 'next/router';
import Main from './main';
import Faqs from './faqs';
import About from './about';
import Price from "./price";
import Chat from "./chat";
import 'bootstrap/dist/css/bootstrap.css'

function App(): JSX.Element {
    const router = useRouter();

    return (
        <>
            {router.pathname === '/' && <Main/>}
            {router.pathname === '/chat' && <Chat/>}
            {router.pathname === '/price' && <Price/>}
            {router.pathname === '/faqs' && <Faqs/>}
            {router.pathname === '/about' && <About/>}
        </>
    );
}

export default App;
