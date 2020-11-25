import React from "react";
import { Link } from 'react-router-dom';

const GridPersonagem = (props) => {
  //destruct
  const { personagens } = props;
  const temPersonagens = personagens.length > 0;

  return (
    <>
    {!temPersonagens && "Carregando..."}
      
      {temPersonagens &&
        personagens.map((personagem) => (
          <div className="grid-personagens">
            <div className="logo-personagem">
              <img
                className="logo-personagem"
                src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
                alt=""
              />
            </div>
            <div className="nome-personagem">
              <span>
                {personagem.name}
              </span>
              <Link className="detalhes-mobile" to={`/details/${personagem.id}`}>
                <svg height="15pt" viewBox="0 0 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg">
                <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/>
                <path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                <path d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0"/>
                </svg>
              </Link>
            </div>
            <div className="series-personagem">
              {personagem.series.items.map((result) => {
                return <span>{result.name}</span>;
              })}
            </div>
            <div className="eventos-personagem">
              <span>
                {personagem.events.items.map((result) => {
                  return <span>{
                    result.name
                    }</span>;
                })}
                <Link to={`/details/${personagem.id}`}>
                  <svg height="15pt" viewBox="0 0 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg">
                    <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/>
                    <path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                    <path d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0"/>
                    </svg>
                </Link>
              </span>
            </div>
          </div>
        ))}
    </>
  );
};

export default GridPersonagem;
