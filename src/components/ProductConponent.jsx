import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const ProductConponent = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md 6'>
                    <div className='card' style={{width:"rem16"}}>
                        <h5 className='card-title'>IPHONE 15</h5>
                         <button onClick={()=>{dispatch(addToCart({name:"iphone15",price:1000}))}}  >ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
