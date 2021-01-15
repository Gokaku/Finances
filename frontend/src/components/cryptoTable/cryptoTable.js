import axios from 'axios'
import React from 'react'
import TableHeader from "./tableHeader.js"
import TableItem from "./tableItem.js"


const currencies = [

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
                    var alreadyThere = false;
                    cryptos.map((filter) => {
                        if(filter.symbol === symbol)
                        {
                            alreadyThere = true
                        }
                    })
                    if(alreadyThere === false){
                        setCryptos(oldState => [...oldState, crypto])
                        console.log(cryptos)
                    }
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
