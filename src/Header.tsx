import React from "react";
import {Link} from "react-router-dom";

function Header(): JSX.Element {
    return (
        <div className="container mb-auto">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/"
                      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <span className="fs-4">Simple header</span>
                </Link>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/features" className="nav-link">
                            Features
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pricing" className="nav-link">
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faqs" className="nav-link">
                            FAQs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
