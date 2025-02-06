'use client'


import { Product } from '../../../types/product';
import React, { useEffect, useState} from 'react'
import { getCartItems, removeFromCart } from '../actions/actions';
import { title } from 'process';
import { Result } from 'postcss';
import Swal from 'sweetalert2';


const CartPage = () => {

  const [cartItems, setCartItems] = useState<Product[]>([])

  useEffect(() => {
    setCartItems(getCartItems())
  },[])

const handleRemove = (id : string) => {
  Swal.fire ({
    title: "Are you sure?",
    text: "You will not be able to recover this item!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3205d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "yes, remove it!"
  }). then((result) => {

    if(result.isConfirmed) {
      removeFromCart(id)
      setCartItems(getCartItems())
      Swal.fire("Removed !", "Item has been removed");
    }
  }
  )
}
const handlQuantityChange = (id: string, quantity : number) => {
  updateCartQuantity(id, quantity);
  setCartItems(getCartItems())
}

const handleIncreament = (id: string) => {
  const product = cartItems.find((item) => item._id === id);
  if(product)
    handlQuantityChange(id, product.quantity + 1)
}

const handleDecreament = (id: string) => {
  const product = cartItems.find((item) => item._id === id);
  if(product && product. quantity > 1)
    handlQuantityChange(id, product.quantity - 1)
}

const calculatedTotal = () =>{
  return cartItems.reduce((total, item) => total + item.price * item.quantity,0)
}

const handleProceed = () => {
  Swal.fire ({
    title: "Proceed to checkout?",
    text: "Please review your cart before checkout",
    icon: "Question",
    showCancelButton: true,
    confirmButtonColor: "#3205d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "yes, proceed!"
  }). then((result) => {

    if(result.isConfirmed) {
      Swal.fire("success", "Your order has been successfully proceed", "success")
       setCartItems({result})
    }
  })
}

  return (
    <div>
{cartItems.map((item) =>(
  <div key={item._id}>
    {item.name}
    </div>
))}
    </div>
  )
   
  
}
export default CartPage