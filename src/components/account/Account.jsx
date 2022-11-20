import React from "react"
import Categories from "./Categories"
import "./Account.css"
//import SliderHome from "./Slider"

const Account = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
         <Categories/>
         <h1>Conta</h1>
        </div>
      </section>
    </>
  )
}

export default Account
