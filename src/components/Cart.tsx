import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart=() =>{
    const [firstItem , setfirstItem] = useState({
           name :'Biryani',
            quantity : 2
    });
    useEffect(()=> {
        setTimeout(()=> {
            setfirstItem( item =>{
                return {
                    ...item,
                    quantity:10
                }
            })
        },6000)
    });
    return <section className="max-w-md mx-auto">
        <h1>Cart</h1>
        <ul>
            <MenuItem item ={firstItem}/>
          <MenuItem item ={{
             name :'Chicken Handi',
            quantity : 6
        }}/>
          <MenuItem item ={{
             name :'Halva Puri',
            quantity : 3
        }}/>
        </ul>

    </section>
}

export default Cart;