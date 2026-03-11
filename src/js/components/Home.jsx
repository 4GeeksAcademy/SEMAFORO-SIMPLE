import React, { useState } from "react";

const Home = () => {

    const [color, setColor] = useState("red");

    return (
        <div className="d-flex flex-column align-items-center mt-5">

            <div style={{width: "10px", height: "100px", background: "black"}}></div>

            
            <div
                style={{
                    background: "black",
                    padding: "10px",
                    borderRadius: "10px"
                }}
            >

                <div
                    onClick={() => setColor("red")}
                    className={`light red ${color === "red" ? "glow" : ""}`}
                ></div>

                <div
                    onClick={() => setColor("yellow")}
                    className={`light yellow ${color === "yellow" ? "glow" : ""}`}
                ></div>

                <div
                    onClick={() => setColor("green")}
                    className={`light green ${color === "green" ? "glow" : ""}`}
                ></div>

            </div>

        </div>
    );
};

export default Home;