import React,{useContext, useState} from 'react'
import {GlobalContext} from '../context/context'
import Shopitemslist from './Shopitemslist'
import './shopitemslist.css'
export default function Shopitem() {
    const [search,setsearch] = useState('')
    const {shopingcart} = useContext(GlobalContext)
    const filtershirt = shopingcart.filter(country =>{
       return country.text.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <div className="j">
            <div>
            <input className="e" type="text" placeholder="Search Shirt" onChange={(e) => setsearch(e.target.value)}/>
            </div>
        <div >
            {filtershirt.map((item)=>(<Shopitemslist item={item.items} text={item.text} key={item.id} img={item.image} amount={item.amount} para={item.para} deff={item.deff} id={item.id} /> ))}
        </div>
        </div>
    )
}
