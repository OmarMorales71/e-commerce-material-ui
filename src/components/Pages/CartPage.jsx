import React from 'react'
import NavBar from '../NavBar'
import StepperCart from '../StepperCart'
import Footer from '../Footer'
const CartPage=({history})=>{
    return (
        <>
        <NavBar history={history} />
        <StepperCart />
        <Footer />
        </>
    )
}

export default CartPage