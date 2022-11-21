
import React, {useState} from 'react';
import foto from '../assets/images/bag.png'
import Catalog from './Catalog';
import "./Products.css"



class Product {
  constructor(name, price, description) {
    this.foto = foto;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}


var p1 = new Product('Simples', 50,'Lavagem Simples com cera.');
var p2 = new Product('Completa', 80, 'Lavagem com cera e lempeza do motor.')
var p3 = new Product('especial', 100, 'Deixa o carro como novo de novo :)')


var products = [p1, p2, p3,];

function Painel ({ onChange, onDelete, value }) {
  const [busca, setBusca] = useState('');

  
  return (
    <div className="Item-container">
      <div className='headerProduct'>
      <h3 className='titleCatalog'>Produtos</h3>
      <div className='positionInput'>
      <input
        type="text"
        className="searchProducts"
        placeholder=' Busque o produto'
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />
      </div>
      </div>
      <div className='catalogo'>
       <Catalog products={products}/>  
      </div>
      
    </div>
  );
};

export default Painel;