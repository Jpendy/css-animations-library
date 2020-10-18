import React from 'react'
import animationClasses from '../../animation-classes.js'
import './SelectClass.css'

export default function SelectClass({ handleChange }) {

    return (
        <select onChange={handleChange} >
            {
                animationClasses.map((item, i) => (
                    <option key={i} >
                        {item.className}
                    </option>
                ))
            }
        </select>
    )
}
