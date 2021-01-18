import React from 'react'
import AddDialog from "./addDialog"

function TableHeader(props) {
    return (
        <div className="tableHeader">
            <p className="pHeader">Cryptocurrency</p>
            <AddDialog addCrypto={props.addCrypto} />
        </div>
    )
}

export default TableHeader
