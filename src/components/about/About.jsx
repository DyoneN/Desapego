import React from "react"
import Categories from "./Categories"
import "./About.css"
//import SliderHome from "./Slider"

const About = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
         <Categories className="Categories"/>
         <div>
            <h1 className="title">Sobre</h1>
            <p className="p">Desapego escolar é uma plataforma criada para atender as infinitas demandas do universo escolar que crescem a cada dia. Chegamos para ajudar com isso. Somos um facilitador na venda e compras de produtos que não mais servem a seus usuários mas que são fundamentais a outros e em boas condições de uso.Nós organizamos a sua vida de forma simples e segura, onde anúncios serão visualizados com detalhes, fotos, e fáceis de encontrar. Estão divididos em categorias e sub categorias que atendem desde o jardim de infância até o ensino médio.</p>
            <p className="p">Navegue por elas e encontre produtos específicos para bebês, meninos, meninas e aproveite para conferir categorias afins que atendem a este público escolar como roupas, acessórios, fantasias e eletrônicos. </p>
            <p className="p">Quando seu produto é vendido, você dispõe de uma comissão de desconto de apenas 5% sobre o valor final de cada venda.</p>
            <p className="p">Foca no desapego!</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
