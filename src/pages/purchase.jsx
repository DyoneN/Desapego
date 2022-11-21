import React from "react"

import Categories from "../components/MainPage/Categories"
import "../components/purchase/Purchase.css"
import foto from '../components/assets/images/uniforme-1.jpg'



const Products = ({  addToCart, CartItem, shopItems }) => {
  

  return (
    <>
      <div className="ContainerProducts">
        <div>
          <Categories className="category" />
        </div>
        <div className="purchase_procudts">
          <div className="positionImg">
            <div className="borderImg"> 
              <img src={foto} alt="" className="imgPurchase"/>
            </div>
          </div>
          <div className="infoProducts">
            <div className="headerProdutcts">
              <h2 className="titleProducts">Moleton Darwin</h2>
              <div >
                <p className="paragrafh">Ensino Fundamental 2</p>
                
              </div>             
            </div>
            <div>
              <p className="paragrafh">7 ano</p>
            </div>
            <div>
              <p className="paragrafh">Darwin</p>
              <p className="paragrafh">Espirito Santo</p>
              <p className="paragrafh">Vitoria</p>
              <p className="paragrafh">Jardim Da Penha</p>
            </div>
            <div>
              <p className="paragrafh">Uniforme</p>
              <p className="paragrafh">Moleton</p>
            </div>
            <div>
              <p className="paragrafh">Uniforme Moleton da escola Darwin.</p>
            </div>
            
           
            <div className="purchase_and_value">
              <div >
                <p className="price">R$ 100,00</p>
                <p className="priceDiscount">R$ 99,00</p>
              </div>
              <div>
                <button className="btn" href="/PageVendor">Comprar</button>
              </div>
              
            </div>
          </div>
          
          
        </div>
        
      </div>
      
    </>
  )
}

export default Products
