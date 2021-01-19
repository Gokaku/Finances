import React from 'react'
import ChangeCurr from "./changeCurr.js"

const BalanceComp = (props) => {

    return (
        <div className="balanceComp">
            <ChangeCurr changeCurr={props.changeCurr}/>
            <p className="balanceHeader">{props.totalValue} {props.curr.toUpperCase()}</p>
        </div>
    )
}

export default BalanceComp
