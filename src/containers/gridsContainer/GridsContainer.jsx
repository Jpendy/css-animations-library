import React from 'react'
import gridClasses from '../../data/grid-classes'
import DisplayComponent from '../../components/displayComponent/DisplayComponent'
import './GridsContainer.css'

export default function GridsContainer() {


    return (
        <>
            <DisplayComponent classArray={gridClasses} />
        </>
    )
}
