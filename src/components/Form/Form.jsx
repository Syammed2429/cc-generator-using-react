import React from "react";


let Form = ({ children, onSubmit }) => {
    return (
        <>
            <h4>Payment details</h4>
            <form
                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        alignItems: "center",
                        margin: "0 auto",
                        padding: "15px",

                        marginTop: "10px",




                    }
                }
                onSubmit={onSubmit}

            >{children}</form>
        </>
    );
}

export { Form }