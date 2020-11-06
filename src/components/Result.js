import React, { useContext } from 'react'
import '../styles/result.scss'
import { CalculatorContext } from "../context/CalculatorContext";

export const Result = () => {
    const{ operation, result } = useContext(CalculatorContext)
    return (
        <div className='result-wrapper' >
            <input type='text' value={operation} className='operation' />
            <abbr className='result' title={result}>
                {result}
            </abbr>
        </div>
    )
}