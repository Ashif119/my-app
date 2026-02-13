import MenuItem from "./MenuItem";

const Cart=() =>{
    return <section className="max-w-md mx-auto">
        <h1>Cart</h1>
        <ul>
            <MenuItem item ={{
             name :'Biryani',
            quantity : 2
        }}/>
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