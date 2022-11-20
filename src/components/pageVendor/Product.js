function Product(props) {
    return(
        <div className="produto">
            <img src={ props.product.foto} className="imgProduct" alt=" "/>
            <p>{ props.product.name }</p>
            <p> { props.product.price}</p>
            <p>{ props.product.description }</p>
        </div>
    )
}

export default Product;