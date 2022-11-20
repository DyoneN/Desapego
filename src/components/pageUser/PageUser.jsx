import React from "react"
import Categories from "./Categories"
import "./PageUser.css"
//import SliderHome from "./Slider"

const PageUser = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
         <Categories/>
         <h1>pagina do usuario</h1>
        </div>
      </section>
    </>
  )
}

export default PageUser
