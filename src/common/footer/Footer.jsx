import React from "react"
import logo from "../../components/assets/images/desapego-logo.png"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>
            <p>Acesse nosso site pelo celular, tablet ou computadore.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Sobre nós</h2>
            <ul>
              <li>Carreiras</li>
              <li>Nossa loja</li>
              <li>Nossos cuidados</li>
              <li>termos e Condições</li>
              <li>Politicas de privacidade/LGPD</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Servico de atendimento ao Consumidor</h2>
            <ul>
              <li>Centro de ajuda </li>
              <li>Como comprar</li>
              <li>Track Your Order </li>
              <li>Acompanhe seu pedido </li>
              <li>Reembolso & Devoluções </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contato BR</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +55 27 98765-4321</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
