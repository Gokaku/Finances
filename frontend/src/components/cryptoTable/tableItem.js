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
            <p style={{float:"right"}} >{value + "$"}</p>
            <div>
                <p style={{float:"left"}}>{name}</p>
                <p style={{float:"left",clear:"right",fontSize:"small"}} >{amount + " " + symbol.toUpperCase()}</p>
                <div>
                    <button className="addBButton">
                        <p className="pSet">Set</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default tableItem
