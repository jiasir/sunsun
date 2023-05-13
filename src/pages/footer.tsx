import React from "react";
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

function Footer(): JSX.Element {
    return (
        <div className="container mt-auto">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
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
                    </li>
                </ul>
                <div className="text-center text-body-secondary">
                    <p>© 2023 sunsun.dev</p>
                    <p>Made with <i className="bi bi-heart-fill text-danger"></i> in Beijing, Tokyo &amp; SF</p>
                    {/*<p>Made with &hearts; in China &amp; Japan</p>*/}
                </div>
            </footer>
        </div>
    );
}

export default Footer;
