import React,{useContext} from 'react'
import {GlobalContext} from '../context/context'
import Shopitemslist from './Shopitemslist'
import './shopitemslist.css'
export default function Shopitem() {
    const {shopingcart} = useContext(GlobalContext)
    return (
        <div className="j">
            {shopingcart.map((item)=>(<Shopitemslist item={item.items} text={item.text} key={item.id} img={item.image} amount={item.amount} para={item.para} deff={item.deff} id={item.id}/> ))}
        </div>
    )
}
