import React , {useState} from 'react'
import axios from "axios"

function PoByCoinGecko() {

    const [message, setMessage] = useState("")

    const ping = () =>{
        axios.get("https://api.coingecko.com/api/v3/ping").then(res => {
            setMessage("| Status: " + res.status);
        })
        setTimeout(function(){
            setMessage("")
        }, 1000)
    }

    return (
        <div>
            <button className="ping" onClick={ping}>
                <p>PING</p>
            </button>
            <p className="CoinGeckoText">
                Powered by CoinGecko API {message}
            </p>
        </div>
    )
}

export default PoByCoinGecko
