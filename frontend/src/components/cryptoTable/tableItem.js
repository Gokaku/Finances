import React from 'react'
import SetDialog from "./setDialog"


function TableItem(props) {
    const {symbol, name, value, balance} = props;


    return (
        <div className="tableItem">
            <button onClick={() => props.delCrypto(symbol)} className="delButton">
                <p className="pX">X</p>
            </button>
            <p style={{float:"right"}}> {value + "€"} </p>
            <div>
                <p style={{float:"left"}}>{name}</p>
                <div>
                    <SetDialog symbol={symbol} setBalance={props.setBalance}/>
                    <p style={{float:"left",fontSize:"small"}} >{balance + " " + symbol.toUpperCase()}</p>
                </div>
            </div>
        </div>
    )
}



export default TableItem
