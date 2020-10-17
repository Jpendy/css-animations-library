import React, { useState } from 'react'
import SelectOptions from '../../components/options/SelectOption'
import './MainContainer.css'
// import Options from '../../components/options/SelectOption'

export default function MainContainer() {

    const [cssClass, setCssClass] = useState('original')

    const handleSelectOptionChange = (e) => {
        setCssClass(e.target.value)
    }

    return (
        <>
            <main id="main" >

                <select onChange={handleSelectOptionChange} >
                    <SelectOptions />
                </select>

                <div id="main-element" className={`main-element original-background-color ${cssClass}`} >
                    MAIN ELEMENT
                </div>

            </main>
        </>
    )
}
