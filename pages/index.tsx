// Adding bootstrap https://create-react-app.dev/docs/adding-bootstrap/
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles. e.g. import './index.css';
import React from 'react';
import App from '../src/app';
import reportWebVitals from '../src/reportWebVitals';

export default function Index(): JSX.Element {
    return (
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example, reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
