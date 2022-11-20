function Header(){
    return(
        <div className="line">
            <h1 className="titleVendor">Página do Vendedor</h1>
            <a className='button' href="/AddProduct"><p className="btnAdd">Novo Produto</p></a>
        </div>
    );
};

export default Header;