import React, {useContext, useState} from 'react'
import '../styles/single-button.scss'
import {CalculatorContext} from "../context/CalculatorContext";


export const SingleButton = ({children}) => {
    const {handleCalculate} = useContext(CalculatorContext)

    const isOperation = value => {
        if (value === "+" || value === "-" || value === "/" || value === '×') {
            return true
        }

    };

    const isItEqual = value => {
        if (value === '=') {
            return true
        }
    }


    return (
        <button
            className={`
                light-on-hover button-wrapper 
                ${isOperation(children) ? 'math-sign' : null}
                ${isItEqual(children) ? 'equal' : null}
            `}
            onClick={() => {
                handleCalculate(children)
            }
            }
        >
            {children}
        </button>
    )
}