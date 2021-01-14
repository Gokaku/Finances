import React from 'react'
import TableHeader from "./tableHeader.js"
import TableItem from "./tableItem.js"

function cryptoTable() {

    const data = [
        {
            "id": "cardano",
            "symbol": "ada",
            "name": "Cardano"
        },
        {
            "id": "ripple",
            "symbol": "xrp",
            "name": "XRP"
        }
    ]

    return (
        <div className="cryptoTable">
            <TableHeader/>
            {data.map((currency) => {
                return <TableItem key={currency.id} {...currency} />
            })}
        </div>
    )
}

export default cryptoTable
