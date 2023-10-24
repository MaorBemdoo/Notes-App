import "../styles/loading.css";
import React from "react";

const Loading = ({ notes }) => {
    return (
    <div id="loading">
        <div id="spinner"></div>
        <p>{!notes || notes.length == 0 ? "Initializing notes" : "Fetching notes"}</p>
    </div>
    );
};

export default Loading;
