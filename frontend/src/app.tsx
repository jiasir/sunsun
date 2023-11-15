import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.css'
import MainComponent from './main';

if (typeof window !== 'undefined') {
  ReactGA.initialize('G-C8X75XBX0J');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App(): JSX.Element {
    return (
        <div className="container">
            <MainComponent/>
        </div>
    );
}

export default App;
