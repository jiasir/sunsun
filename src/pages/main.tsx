import React from 'react';

function Main(): JSX.Element {
    function handleClick() {
        // click this button will change the url to /chat
        window.location.href = "/chat";
    }

    return (
        <main className="container">
            <div className="px-4 py-5 my-5 text-center">
                <img className="img-thumbnail img-fluid d-block mx-auto mb-4" src="/sunsunChatLogo.png" alt="sunsun Chat" width="200" height="200"/>
                <h1 className="display-5 fw-bold text-body-emphasis">sunsun Chat</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        sunsun Chat 是一个 AI 聊天 Assistant，基于 ChatGPT 的底层能力，提供给无法直接使用 ChatGPT 的国家或地区，ChatGPT out of the box 的聊天能力。
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleClick}>
                            Chat Now
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                            帮助
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
