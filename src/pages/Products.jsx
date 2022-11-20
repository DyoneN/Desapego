import React from "react"
import Painel from "../components/products/Painel"
import Categories from "../components/MainPage/Categories"
import "../components/products/Products.css"


const Products = ({  addToCart, CartItem, shopItems }) => {
  return (
    <>
      <div className="ContainerProducts">
        <div>
          <Categories className="category" />
        </div>
        <div className="catalog">
          <Painel />
        </div>
        
      </div>
      
    </>
  )
}

export default Products



