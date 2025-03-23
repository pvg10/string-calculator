import React, { useState } from "react";
import "./StringCalculator.css";

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    // Function to handle string calculations
    const handleCalculate = (e) => {
        if (!input) return 0;
        console.log('numbers', input)
        const numArray = input.split(",").map(Number);
        setResult(numArray.reduce((sum, num) => sum + num, 0));
    }
    const handleReset = () => {
        setInput("");
        setResult(null);
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
            <button onClick={handleReset} className="calculate-btn">
                Reset
            </button>
            {result !== null && <h2 className="result">Result: {result}</h2>}
            {error && <h2 className="error">{error}</h2>}
        </div>
    );
};

export default StringCalculator;
