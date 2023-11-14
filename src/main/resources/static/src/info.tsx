import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image";

function Info(): JSX.Element {
    return (
        <main className="container">
            <div className="px-4 py-5 my-5 text-center">
                <Image className="img-thumbnail img-fluid d-block mx-auto mb-4" src="/sunsunChatLogo.png"
                       alt="sunsun Chat" width="200" height="200"/>
                <h1 className="display-5 fw-bold text-body-emphasis">sunsun-Chat</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Powered by OpenAI</p>
                </div>
            </div>
        </main>
    );
}

export default Info;