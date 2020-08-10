import React from 'react'
import NavBar from '../NavBar'
import ProductDetail from '../ProductDetail'
import SimilarProduct from '../SimilarProducts'
import { Divider } from '@material-ui/core'

const ProductPage = ({history}) =>{

    return (
        <>
        <NavBar history={history} />
        <ProductDetail />
        <Divider />
        <SimilarProduct />
        </>
    )
}
export default ProductPage