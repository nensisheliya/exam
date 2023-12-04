import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link, useSearchParams } from 'react-router-dom'



function Home() {
    let [arr, setArr] = useState([])
    useEffect(() => {
        axios('https://dummyjson.com/products')
            .then((res) => {
                setArr(res.data.products)
            })
    }, [])
    console.log(arr)
 
  
    return (
        <>
        <h1>product</h1>
       
            {
                arr.map((p) => {
                    return <>
                        <Link to={`/${p.id} `}> <img id='img' src={p.thumbnail} alt="" /> </Link>
                        <h1>{p.title}</h1></>
                })
            }
        </>
    )
}

export default Home