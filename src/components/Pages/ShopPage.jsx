import React from 'react'
import NavBar from '../NavBar'
import HeaderShop from '../HeaderShop'
import { Divider } from '@material-ui/core'
import FeaturedCategories from '../FeaturedCategories'
import Footer from '../Footer'

const ShopPage = () =>{

    return (
        <>
        <NavBar />
        <HeaderShop />
        <Divider />
        <FeaturedCategories />
        <Divider />
        <Footer />
        </>
    )
}

export default ShopPage