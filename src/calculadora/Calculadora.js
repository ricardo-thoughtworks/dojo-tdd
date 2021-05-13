import { useState } from "react";
import Button from "./Button";
import "./Calculadora.css";
import Input from "./Input";

function Calculadora() {

    const [firstNumber, setFirstNumber] = useState(null)
    const [secondNumber, setSecondNumber] = useState("")
    const [result, setResult] = useState("")

    function handleFirstNumber(event) {
        setFirstNumber(Number(event.target.value))
    }

    function handleSecondNumber(event) {
        setSecondNumber(Number(event.target.value))
    }

    function plus() {
        const result = firstNumber + secondNumber
        setResult(result)
    }

    return (
        <div className="container">
            <h1>Calculadora</h1>
            <Input id="first-number" label="First number:" onChange={handleFirstNumber} />
            <Input id="second-number" label="Second number:" onChange={handleSecondNumber} />
            <Input id="result" label="Result:" value={result} readOnly/>
            <Button id="plus" onClick={plus} text="+"/>
        </div>
    );
}

export default Calculadora;
