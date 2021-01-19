import axios from 'axios'
import React from 'react'
import TableHeader from "./tableHeader.js"
import TableItem from "./tableItem.js"
import BalanceComp from "./balanceComp.js"

var currencies = [];

if(localStorage.getItem("localData") !== null)
{
    currencies = JSON.parse(localStorage.getItem("localData"))

}

var storedCurr = ""

if(localStorage.getItem("localCurr") !== null)
{
    storedCurr = JSON.parse(localStorage.getItem("localCurr"))
}
else
{
    storedCurr = "eur"
}

var data;

axios.get("https://api.coingecko.com/api/v3/coins/list").then(res => {
    data = res.data;
})

function CryptoTable() {

    const [cryptos, setCryptos] = React.useState(currencies)


    const totalValue = () =>{
        var totalValue = 0;
        cryptos.forEach((cry) =>{
            totalValue = parseFloat(totalValue) + parseFloat(cry.value);
        })
        
        return totalValue.toFixed(2);
    }


    const [stotalValue, setTotalValue] = React.useState(totalValue())




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

   
    const [curr, setCurr] = React.useState(storedCurr)

    const changeCurr = (changedCurr) =>{
        axios.get("https://api.coingecko.com/api/v3/simple/supported_vs_currencies").then(res =>{
            var supcurr = res.data;
            supcurr.forEach((sc) =>{
                if(sc === changedCurr)
                {
                setCurr(changedCurr)
                }
            })
        })
    }

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
                    cryp.value = (cryp.balance * data2[cryp.id][curr]).toFixed(2)
                })

                setCryptos([...fCrypto])
            }) 
        }
        setTotalValue(totalValue())
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
        const interval = setInterval(() =>{
            updateValue()
            console.log("valueUpdated")
        }, 20000)
        return () => clearInterval(interval)
    }, [cryptos])

    React.useEffect(() =>{
        setTotalValue(totalValue())
    },[cryptos, stotalValue])

    React.useEffect(() =>{
        updateValue()
        localStorage.setItem("localCurr",JSON.stringify(curr))
    },[curr])


    return (
        <>
        <div className="cryptoTable">
            <TableHeader addCrypto={addCryptoToList} />
            {cryptos.map((currency) => {
                return <TableItem curr={curr} setBalance={setBalance} delCrypto={delCryptoFromList} key={currency.id} {...currency} />
            })}
            {cryptos.length === 0 &&
            <p className="tablePlaceholder" >Click ADD to manage crypto!</p>    
            }
        </div>
        <BalanceComp changeCurr={changeCurr} totalValue={stotalValue} curr={curr}/>
        </>
    )
}

export default CryptoTable
