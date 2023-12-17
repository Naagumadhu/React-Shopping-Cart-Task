import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {
  let product = [
    {
      name:"Fancy Product",
      price:"40.00 - $80.00"
    },
    {
      name:"Special Item",
      price:"20.00 18.00"
      
    },
    {
      name:"Sale Item",
      price:"50.00 $25.00"
    },
    {
      name:"Popular Item",
      price:"40.00"
    },
    {
      name:"Sale Item",
      price:"50.00 $25.00"
    },
    {
      name:"Fancy Product",
      price:"120.00 - $280.00"
    },
    {
      name:"Special Item",
      price:"20.00 $18.00"
    },
    {
      name:"Popular Item",
      price:"40.00"
    },
  ]
  let [cart,setCart] = useState(0)
  return <>
              <Navbar cart = {cart} setCart={setCart}/>
        <section className="py-5">
              <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
                product.map((e,i)=>{
                  return <Card cart={cart} setCart={setCart} product={e} key={i}/>
                })
              }
              </div>
              </div>
        </section>
        </>
}

export default App