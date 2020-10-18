import React from 'react'
import gridClasses from '../../data/grid-classes'
import DisplayComponent from '../../components/displayComponent/DisplayComponent'

export default function GridsContainer() {

    return (
        <>
            <DisplayComponent classArray={gridClasses} />
        </>
    )
}
