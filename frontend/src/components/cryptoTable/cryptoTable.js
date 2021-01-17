import axios from 'axios'
import React from 'react'
import TableHeader from "./tableHeader.js"
import TableItem from "./tableItem.js"

var currencies = [];

if(localStorage.getItem("localData") !== null)
{
    currencies = JSON.parse(localStorage.getItem("localData"))
}

var data;

axios.get("https://api.coingecko.com/api/v3/coins/list").then(res => {
    data = res.data;
})

function CryptoTable() {

    const [cryptos, setCryptos] = React.useState(currencies)

    const addCryptoToList = (symbol) =>{
        axios.get("https://api.coingecko.com/api/v3/coins/list").then(res => {
            data = res.data;
            data.forEach((crypto) => {
                if(crypto.symbol === symbol)
                {  
                    var alreadyThere = false;
                    cryptos.forEach((filter) => {
                        if(filter.symbol === symbol)
                        {
                            alreadyThere = true
                        }
                    })
                    if(alreadyThere === false){
                        crypto["balance"] = 0
                        crypto["value"] = 0
                        setCryptos(oldState => [...oldState, crypto])
                    }
                }
            })
        })
    }

   
    const [curr, setCurr] = React.useState("eur")

    const updateValue = () =>{
        if(cryptos.length >= 1)
        {
            var ids = ""
            var idsA = []
            cryptos.forEach((cry) => {
                ids = ids + cry.id + "%2C";
                idsA.push(cry.id)
            })

            ids = ids.slice(0, -3)

            var data2 = [];
            let fCrypto = cryptos;
            axios.get("https://api.coingecko.com/api/v3/simple/price?ids=" + ids +"&vs_currencies=" + curr).then(res => {
                data2 = res.data;
                fCrypto.forEach((cryp) =>{
                    cryp.value = Math.round(cryp.balance * data2[cryp.id][curr])
                })

                setCryptos([...fCrypto])
            }) 
        }
    }


    const delCryptoFromList = (crypSymbol) =>{
        let newCryptos = cryptos.filter((cryp) => cryp.symbol !== crypSymbol)
        setCryptos(newCryptos)
    }

    const setBalance = (balance, symbol) =>{
            var fCrypto = cryptos;
            fCrypto.forEach((cry) => {
                if(cry.symbol === symbol)
                {
                cry.balance = balance;
                }
            })
            setCryptos([...fCrypto])
        updateValue()
    }


    React.useEffect(() => {
        localStorage.setItem("localData",JSON.stringify(cryptos))
    }, [cryptos])

    return (
        <div className="cryptoTable">
            <TableHeader addCrypto={addCryptoToList} />
            {cryptos.map((currency) => {
                return <TableItem setBalance={setBalance} delCrypto={delCryptoFromList} key={currency.id} {...currency} />
            })}
        </div>
    )
}

export default CryptoTable
