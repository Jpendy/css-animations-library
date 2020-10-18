import React, { useState } from 'react'
import SelectClass from '../../components/selectClass/SelectClass'
import animationClasses from '../../animation-classes.js'
import './MainContainer.css'
// import Options from '../../components/options/SelectOption'

export default function MainContainer() {

    const [cssClass, setCssClass] = useState('original')

    const handleSelectOptionChange = (e) => {
        setCssClass(e.target.value)
    }

    return (
        <>
            <main id="main">

                <section className="top-section" >

                    <div className="select-div" >
                        <SelectClass handleChange={handleSelectOptionChange} />
                    </div>
                    <div id="main-element" className={`main-element original-background-color ${cssClass}`} >
                        MAIN ELEMENT
                    </div>

                </section>

                <section className="code-section">
                    <pre>
                        {animationClasses.find(item => item.className === cssClass).code}
                    </pre>
                </section>


            </main>
        </>
    )
}
