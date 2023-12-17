import React,{useState} from 'react'

function Card({cart,setCart,product}) {
  let [taggle,settaggle] = useState(true)
  return <>
  <div className="col mb-5">
  <div className="card h-100">
      <div className="badge bg-dark text-white position-absolute" style={{top:"0.5rem", right:"0.5rem",}}>Sale</div>
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      <div className="card-body p-4">
        <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
            ${product.price}
        </div>
        <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
    </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
      { taggle?
      <button className="btn btn-outline-dark" onClick={()=>{setCart(cart+1);settaggle(prev=>!prev)}} >Add to cart</button> :
      <button className="btn btn-outline-dark" onClick={()=>{setCart(cart-1);settaggle(prev=>!prev)}} >Remove from cart</button>}
      </div>
      </div>
  </div>
</div>
  </>
}

export default Card