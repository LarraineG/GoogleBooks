import React, { useState } from "react";

function Saving({ type = "default", className, children, onClick }) {

    const [setShow] = useState(false);
    const handleList = () => setShow(true);

    const click = () => {
        handleList()
        onClick()
    };

    return (
        <div>
            <button onClick={click} className={[ `btn-${type}`, className].join(" ")}>{children}</button>
        </div>
    );
};

export default Saving;