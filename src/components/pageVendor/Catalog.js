import Product from "./Product";

function Catalog(props){

    var products =[];
    for (let x=0;   x<props.products.length; x++){
        products.push(<Product product={props.products[x]} />)
    };


    
    return(
        <div className="catalog">
            {products}
        </div>
        
    );
}

export default Catalog;