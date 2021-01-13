import React from 'react'
import AddButton from "./addButton"

function tableHeader() {
    return (
        <div class="tableHeader">
            <p class="pHeader">Cryptocurrency</p>
            <AddButton/> 
        </div>
    )
}

export default tableHeader
