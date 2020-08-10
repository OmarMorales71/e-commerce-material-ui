import React from 'react'
import NavBar from '../NavBar'
import HeaderShop from '../HeaderShop'
import { Divider } from '@material-ui/core'
import FeaturedCategories from '../FeaturedCategories'
import Footer from '../Footer'
import Subscribe from '../Subscribe'
import RegardingProduct from '../RegardingProduct'

const ShopPage = () =>{

    return (
        <>
        <NavBar />
        <HeaderShop />
        <Divider />
        <FeaturedCategories />
        <Divider />
        <Subscribe />
        <Divider />
        <RegardingProduct />
        <Footer />
        </>
    )
}

export default ShopPage