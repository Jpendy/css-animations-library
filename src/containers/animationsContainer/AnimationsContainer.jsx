import React from 'react'
import animationClasses from '../../data/animation-classes.js'
// import './MainContainer.css'
import '../../styles/grids.css'
import DisplayComponent from '../../components/displayComponent/DisplayComponent'

export default function AnimationsContainer() {

    return (
        <>
            <DisplayComponent classArray={animationClasses} />
        </>
    )
}
