
import React, {useState} from 'react';
import foto from '../assets/images/bag.png'
import Catalog from './Catalog';
import "./Painel.css"



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

var products = [p1, p2, p3];

function Painel ({ onChange, onDelete, value }) {
  
  return (
    <div className="Item-container">
      <h3>Produtos</h3>
      <input
        type="text"
        className="search"
        placeholder='Busque o produto'
      />
      <div className='catalogo'>
       <Catalog products={products}/>  
      </div>
      
      <button href="http://google.com.br">Excluir</button>
    </div>
  );
};

export default Painel;