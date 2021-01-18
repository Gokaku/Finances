import React from 'react'

const BalanceComp = (props) => {

    return (
        <div className="balanceComp">
            <p className="balanceHeader">{props.totalValue} {props.curr}</p>
        </div>
    )
}

export default BalanceComp
