import React, { useState } from "react";
import "./StringCalculator.css";

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    // Function to handle string calculations
    const add = (numbers) => {

    };

    const handleCalculate = () => {
    }


    return (
        <div className="calculator-container">
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers (e.g. 1,2,3)"
                className="input-box"
            />
            <button onClick={handleCalculate} className="calculate-btn">
                Calculate
            </button>
            {result !== null && <h2 className="result">Result: {result}</h2>}
            {error && <h2 className="error">{error}</h2>}
        </div>
    );
};

export default StringCalculator;
