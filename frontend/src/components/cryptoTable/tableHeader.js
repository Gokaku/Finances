import React from 'react'
import AddDialog from "./addDialog"

function tableHeader() {
    return (
        <div className="tableHeader">
            <p className="pHeader">Cryptocurrency</p>
            <AddDialog/>
        </div>
    )
}

export default tableHeader
