import React from 'react';


const TextSearch = (props) => {

    const {handleSetFiltro, filtro} = props;
    
    return (
        <div className="text-search">
        <h2 className="text-buscar-personagens">Busca de Personagens</h2>
        <h4 className="text-nome-personagem">Nome do Personagem</h4>
            <div className="search-line"> 
                <input type="text" value={filtro} onChange={(evt)=>handleSetFiltro(evt.target.value.toLowerCase())} placeHolder="Search" className="search-personagem"  />
                <button className="btn-icon">
                <img src={'assets/icon/search.png'}/>
                </button>
            </div>
        </div>
    )
}

export default TextSearch