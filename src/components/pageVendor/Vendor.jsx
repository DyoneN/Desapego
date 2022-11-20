import React from "react"
import ImgProfile from "../../components/assets/images/user.png"
import Categories from "../MainPage/Categories"
import Painel from "./Painel"

const Vendor = ({ onChange, onDelete, value }) => {

  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Painel",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Pedidos",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Endereço",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Detalhes da conta",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Carteira",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Sair",
    },
  ]
  


  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'> 
        
          <section className='headProfile'>
            <div className='containeProfile'>

              <div className='lineVendor' >
              <Categories/>

                <h1 className="titleVendor">Página do Vendedor</h1>
                
                
                
              </div>
              <section className="profile">
                <div className="imgProfile">
                  <div className="positionImg">
                    <img src={ImgProfile} alt="Profile" className="imgProfilePng" />
                  </div>
                </div>
                
                <div className="profileInformation">
                    <div className="profileInfomartionContainer">
                      <h1 className="nameVendor">Dyone Andrade</h1>
                      <div className="information">
                        <>
                          <div className='functionsOperaction'>
                            {data.map((value, index) => {
                              return (
                                <div className="box" key={index}>
                                  <span className="span">{value.cateName}</span>
                                </div>
                              )
                            })}
                          </div>
                        </>
                    </div>
                  </div>
                </div>

              </section>

              <section>
              <div className="Item-container">
                
                <Painel/>
              </div>
              </section>
              
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Vendor




