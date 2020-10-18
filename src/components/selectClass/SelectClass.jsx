import React from 'react'
import './SelectClass.css'

export default function SelectClass({ handleChange, classArray }) {

    return (
        <select onChange={handleChange} >
            {
                classArray.map((item, i) => (
                    <option key={i} >
                        {item.className}
                    </option>
                ))
            }
        </select>
    )
}
