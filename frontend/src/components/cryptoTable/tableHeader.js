import React from 'react'
import AddButton from "./addButton"

function tableHeader() {
    return (
        <div className="tableHeader">
            <p className="pHeader">Cryptocurrency</p>
            <AddButton/> 
        </div>
    )
}

export default tableHeader
