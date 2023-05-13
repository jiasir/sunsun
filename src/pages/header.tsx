import React, {useEffect, useState} from "react";
import Link from 'next/link'
import {useRouter} from "next/router";

function Header(): JSX.Element {
    const [activeLink, setActiveLink] = useState<string>("");
    const router = useRouter();
    useEffect(() => {
        setActiveLink(router.pathname);
    }, [router.pathname]);
    return (
        <div className="container mb-auto">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link href="/"
                      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <span className="fs-3 fw-bold text-primary font-monospace">sunsun</span>
                </Link>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link href="/" className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                              aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/features" className={`nav-link ${activeLink === "/features" ? "active" : ""}`}>
                            Features
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/price" className={`nav-link ${activeLink === "/price" ? "active" : ""}`}>
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/faqs" className={`nav-link ${activeLink === "/faqs" ? "active" : ""}`}>
                            FAQs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className={`nav-link ${activeLink === "/about" ? "active" : ""}`}>
                            About
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
