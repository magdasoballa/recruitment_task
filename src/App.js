import React from 'react'
import './styles/main.scss'
import {Keypad} from './components/Keypad'
import {Result} from "./components/Result";
import './styles/main.scss'
import {CalculatorContextProvider} from "./context/CalculatorContext";


const App = () => {
    return (
        <div className='app-wrapper'>
            <div className="calculator-wrapper">
                <CalculatorContextProvider>
                <Result/>
                <Keypad/>
                </CalculatorContextProvider>
            </div>
        </div>
    );
}

export default App;
