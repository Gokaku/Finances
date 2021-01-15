import React from 'react'

function tableItem(props) {
    const {symbol, name} = props;
    const amount = 0;
    const value = 0;


    return (
        <div className="tableItem">
            <button onClick={() => props.delCrypto(symbol)} className="delButton">
                <p className="pX">X</p>
            </button>
            <p style={{float:"right"}}> {value + "$"} </p>
            <div>
                <p style={{float:"left"}}>{name}</p>
                <div>
                    <button style={{clear: "right", margin: "0px", marginRight: "8px"}} className="addBButton">
                        <p className="pSet">Set</p>
                    </button>
                    <p style={{float:"left",fontSize:"small"}} >{amount + " " + symbol.toUpperCase()}</p>
                </div>
            </div>
        </div>
    )
}

export default tableItem
