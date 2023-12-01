import React from 'react'
import Header from './Header'
import SortingDropdowns from './SortingDropdowns/SortingDropdowns'
import ProductList from './ProductList/ProductList'
import SkincareBanner from './SkincareHeader/SkincareBanner/SkincareBanner'


function Skin() {
  return (
    <div>
        <Header/>
        <SkincareBanner/>
        <SortingDropdowns />
        <ProductList />
    </div>
  )
}

export default Skin