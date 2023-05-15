import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Language } from "@mui/icons-material";
import LanguageSwitcher from "./LanguageSwitcher";

function Header(): JSX.Element {
  const [activeLink, setActiveLink] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <div className="container mb-auto">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <img
            src="/apple-touch-icon.png"
            alt="sunsun"
            width="32"
            height="32"
            className={"me-2"}
          />
          <span className="fs-3 font-monospace">sunsun</span>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              href="/"
              className={`nav-link ${activeLink === "/" ? "active" : ""}`}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/chat"
              className={`nav-link ${activeLink === "/chat" ? "active" : ""}`}
            >
              Chat
            </Link>
          </li>
          {/* <li className="nav-item">
                        <Link href="/price" className={`nav-link ${activeLink === "/price" ? "active" : ""}`}>
                            Pricing
                        </Link>
                    </li> */}
          <li className="nav-item">
            <Link
              href="/faqs"
              className={`nav-link ${activeLink === "/faqs" ? "active" : ""}`}
            >
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/about"
              className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
            >
              About
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
