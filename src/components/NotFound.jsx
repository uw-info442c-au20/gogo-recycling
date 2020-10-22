
import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
    const path = useLocation().pathname;

    return (
        <main>
            <h1>404 Page Not Found</h1>
            <p>
                You tried going to <strong><em>{path}</em></strong>,
                which doesn't seem to exist or isn't working 😢
            </p>
        </main>
    );
};

export default NotFound;