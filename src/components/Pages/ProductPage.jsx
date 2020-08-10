import React from 'react'
import NavBar from '../NavBar'
import ProductDetail from '../ProductDetail'
import SimilarProduct from '../SimilarProducts'
import { Divider } from '@material-ui/core'
import Reviews from '../Reviews'
import Footer from '../Footer'

const ProductPage = ({history}) =>{

    return (
        <>
        <NavBar history={history} />
        <ProductDetail />
        <Divider />
        <SimilarProduct />
        <Divider />
        <Reviews />
        <Footer />
        </>
    )
}
export default ProductPage