import React from 'react';
import produtos from '../data/produtos';
import Card from './MeuCard';


function ListaCards(props) {
    return produtos.map (produto => 
        <MeuCard key={produto.id} titulo={produto.nome}>
            <h3>{produto.preco}</h3>
        </MeuCard>    
    )
}

export default ListaCards;