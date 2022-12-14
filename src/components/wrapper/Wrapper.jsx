import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Entrega Nacional",
      decs: "Entegamos em toda região Brasileira.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Pagamento 100% seguro",
      decs: "Pagamento 100% seguro e protegido.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Compre com confiança",
      decs: "Transação protegida e criptografia de ponta a ponta.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Suporte 24/7",
      decs: "Nosso suporte esta disponivel a qualquer momento do dia, da semana ou do mês.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
