import React from 'react'
import { useState, useEffect } from 'react'



function currencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(" https://v6.exchangerate-api.com/v6/3a44141515936bbd572a3d01/latest/USD")
        .then((response)=> response.json() )
        .then((response)=> setData(response.rates[currency]))
        console.log(data);
        
    
},[])
}
export default currencyInfo