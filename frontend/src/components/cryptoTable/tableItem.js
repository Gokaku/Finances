import React from 'react'
import AddBalanceButton from "./addBalanceButton"

function tableItem(props) {
    const {id, symbol, name} = props;
    const amount = 0;
    const value = 0;


    return (
        <div className="tableItem">
            <p style={{float:"left"}}>{name}</p>
            <p style={{float:"right"}} >{value + "$"}</p>
            <div>
                <p style={{float:"left",clear:"right",fontSize:"small"}} >{amount + " " + symbol.toUpperCase()}</p>
                <AddBalanceButton/>
            </div>
        </div>
    )
}

export default tableItem
