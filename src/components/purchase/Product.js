function Product(props) {
    return(
        <div className="produto" >
            <img src={ props.product.foto} className="imgProduct" alt=" "/>
            <div className="titlo_and_price_position">
                <p className="titleProduct">{ props.product.name }</p>
                <p className="priceProduct">R$ { props.product.price}</p>
            </div>
            
            <p className="descriptionProduct">{ props.product.description }</p>
            <div className="localeBtn">
                <button className="questionProduct">
                    <p className="textBtn" href="https://google.com">Perguntas</p>
                </button>
                <button className="questionProduct">
                    <p className="textBtn" href="/PageVendor" >Comprar</p>
                </button>
            </div>
        </div>
    )
}

export default Product;