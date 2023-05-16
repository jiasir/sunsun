import Link from "next/link";
import React from "react";
import Image from "next/image";

function Main(): JSX.Element {
    return (
        <main className="container">
            <div className="px-4 py-5 my-5 text-center">
                <Image className="img-thumbnail img-fluid d-block mx-auto mb-4"
                       src="/sunsunChatLogo.png"
                       alt="sunsun Chat"
                       width="200"
                       height="200"/>
                <h1 className="display-5 fw-bold text-body-emphasis">sunsun-Chat</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        sunsun-Chat is an AI chat assistant, chatGPT out of the box, no
                        account and proxy required.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link href="/chat" passHref>
                            <button
                                type="button"
                                className="btn btn-primary btn-lg px-4 gap-3"
                            >
                                Chat Now
                            </button>
                        </Link>
                        <Link href="/faqs" passHref>
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-lg px-4"
                            >
                                Help
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
