import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {MadeWithLove} from "./MadeWithLove";
import LanguageSwitcher from "./LanguageSwitcher";

function Footer(): JSX.Element {
    return (
        <div className="container mt-auto">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    {/* <li className="nav-item">
                        <Link href="/" className="nav-link px-2 text-body-secondary" aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/features" className="nav-link px-2 text-body-secondary">
                            Features
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/price" className="nav-link px-2 text-body-secondary">
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/faqs" className="nav-link px-2 text-body-secondary">
                            FAQs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className="nav-link px-2 text-body-secondary">
                            About
                        </Link>
                    </li> */}
                </ul>
                <div className=" container text-center">
                    <div className="row">
                        <div className="col">© 2023 sunsun.dev</div>
                        <div className="col">
                            <MadeWithLove/>
                        </div>
                        <div className="col">
                            <LanguageSwitcher/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
