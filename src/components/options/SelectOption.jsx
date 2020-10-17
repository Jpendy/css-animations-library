import React from 'react'
import animationClasses from '../../animation-classes.js'

export default function SelectOptions() {

    return (
        <>
            {
                animationClasses.map((item, i) => (
                    <option key={i} >
                        {item}
                    </option>
                )
                )
            }
        </>
    )
}
