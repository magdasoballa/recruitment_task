import React from 'react'
import { SingleButton } from './SingleButton'
import '../styles/keypad.scss'

export const Keypad = () => {
    return (
        <div>
            <div className="row">
                <SingleButton >%</SingleButton>
                <SingleButton>&#x207a;&#x2044;&#x208b;</SingleButton>
                <SingleButton>C</SingleButton>
                <SingleButton>/</SingleButton>
            </div>
            <div className="row">
                <SingleButton>7</SingleButton>
                <SingleButton>8</SingleButton>
                <SingleButton>9</SingleButton>
                <SingleButton>&#215;</SingleButton>
            </div>
            <div className="row">
                <SingleButton>4</SingleButton>
                <SingleButton>5</SingleButton>
                <SingleButton>6</SingleButton>
                <SingleButton>-</SingleButton>
            </div>
            <div className="row">
                <SingleButton>1</SingleButton>
                <SingleButton>2</SingleButton>
                <SingleButton>3</SingleButton>
                <SingleButton>+</SingleButton>
            </div>
            <div className="row">
                <SingleButton>0</SingleButton>
                <SingleButton>,</SingleButton>
                <SingleButton>=</SingleButton>
            </div>
        </div>
    )
}