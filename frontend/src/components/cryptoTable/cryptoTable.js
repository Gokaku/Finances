import axios from 'axios'
import React from 'react'
import TableHeader from "./tableHeader.js"
import TableItem from "./tableItem.js"


const currencies = [
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

function CryptoTable() {

    const [cryptos, setCryptos] = React.useState(currencies)

    const addCryptoToList = (symbol) =>{
        var data;
        axios.get("https://api.coingecko.com/api/v3/coins/list").then(res => {
            data = res.data;
            data.map((crypto) => {
                if(crypto.symbol === symbol)
                {
                    setCryptos(oldState => [...oldState, crypto])
                    console.log(cryptos)
                }
            })
        })
    }



    return (
        <div className="cryptoTable">
            <TableHeader addCrypto={addCryptoToList} />
            {cryptos.map((currency) => {
                return <TableItem key={currency.id} {...currency} />
            })}
        </div>
    )
}

export default CryptoTable
