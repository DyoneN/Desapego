import React from "react"
import ImgProfile from "../components/assets/images/user.png"
import Categories from "../components/MainPage/Categories"
import Painel from "../components/pageVendor/Painel"
import './pageVendor.css'
import Header from "../components/pageVendor/header"

const Vendor = () => {

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
      <section className='homeSlide-contentWidth'>
        <div className='container'> 
        
          <section className='headProfile'>
            <div className='containeProfile'>

              <div className='lineVendor' >
                <Header/>
                <div className="containerProfile">
                <Categories className="category"/>
                <section className="profile">

                  
                  <div className="imgProfile">
                  <div className="positionImg">
                    <img src={ImgProfile} alt="Profile" className="imgProfilePng" />
                  </div>
                  </div>
                  <div className="profileInformation">
                    <div className="profileInfomartionContainer">
                      <h1 className="nameVendor">Vivian Informatica</h1>
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
                </div>
              </div>
              

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




