import React, { useState } from 'react'
import reactHtmlParser from 'react-html-parser'
import SelectClass from '../../components/selectClass/SelectClass'
import './DisplayComponent.css'
import '../../styles/grids.css'
import '../../styles/animations.css'

export default function DisplayComponent({ classArray }) {

    const [cssClass, setCssClass] = useState('Original')

    const handleSelectOptionChange = (e) => {
        setCssClass(e.target.value)
    }

    return (
        <>
            <main id="main">
                <div className="select-div" >
                    <SelectClass classArray={classArray} handleChange={handleSelectOptionChange} />
                </div>
                <section className="top-section" >

                    <div className="elements-div" >
                        {reactHtmlParser(classArray.find(item => item.className === cssClass).html)}
                    </div>

                </section>

                <section className="html-code-section" >
                    <pre>
                        <h2>HTML</h2>
                        {classArray.find(item => item.className === cssClass).html}
                    </pre>
                </section>

                <section className="css-code-section">
                    <pre>
                        <h2>CSS</h2>
                        {classArray.find(item => item.className === cssClass).css}
                    </pre>
                </section>


            </main>
        </>
    )
}
