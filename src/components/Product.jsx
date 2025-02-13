import React from 'react'
import './Product.css'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';

const Product = ({}) => {

  const { 
    state: { products },
    productState: { sort, byStock, byFastDelivery, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a,b) => (
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      ))
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod) => prod.byFastDelivery);
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  }

  return (
    <div className='product'>
       <Filters/>
       <div className='productContainer'>
       {
        transformProducts().map((prod) => {
          return <SingleProduct prod ={ prod } key={ prod.id } />
        })
       }
       </div>
    </div>
  )
}

export default Product