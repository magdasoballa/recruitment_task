import React, {createContext, useState} from 'react'

export const CalculatorContext = createContext();

export const CalculatorContextProvider = (props) => {
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState('');

    const reset = () => {
        setOperation('')
        setResult('')
    }

    const changeSign = () => {
        if (operation === '0') {
            return;
        }
        if (operation[0] !== '-') {
            setOperation(`-${operation}`)
        } else {
            setOperation(operation.substring(1))
        }
    }

    const makePercentage = () => {
        const newRes = (operation * 0.01).toString()
        setOperation(newRes)
    }

    const handleCalculate = val => {

        let lastElement = operation.slice(-1)[0]
        if (!result) {
            if (isNaN(lastElement) && isNaN(val)) {
                val === "C" && reset();
                return
            }
        }

        if (result && val !== "C") {
            setOperation(result + val)
            setResult('')
            return;
        }
        if (val === '=') {
            try {
                // eslint-disable-next-line
                setResult(eval(operation).toFixed(2))
            } catch (error) {
                alert('Invalid Mathematical Operation');
            }
        }
        if (lastElement === '0' && val === '0') {
            return
        }
        if (val === '×') {
            val = '*'
        }
        if (val === 'C') {
            reset();
            return;
        }
        if (val === '⁺⁄₋') {
            changeSign()
            return;
        }
        if (val === ',') {
            val = '.'
        }
        if (val === '%') {
            makePercentage()
            return;
        }
        setOperation((operation + val))
    }


    return (
        <CalculatorContext.Provider value={{
            operation,
            handleCalculate,
            result,
        }}>
            {props.children}
        </CalculatorContext.Provider>
    )
}
