import React, { useState } from 'react'
import reactHtmlParser from 'react-html-parser'
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
                <div className="select-div" >
                    <SelectClass handleChange={handleSelectOptionChange} />
                </div>
                <section className="top-section" >

                    <div className="elements-div" >
                        {reactHtmlParser(animationClasses.find(item => item.className === cssClass).html)}
                    </div>

                </section>

                <section className="html-code-section" >
                    <pre>
                        <h2>HTML</h2>
                        {animationClasses.find(item => item.className === cssClass).html}
                    </pre>
                </section>

                <section className="css-code-section">
                    <pre>
                        <h2>CSS</h2>
                        {animationClasses.find(item => item.className === cssClass).css}
                    </pre>
                </section>


            </main>
        </>
    )
}
