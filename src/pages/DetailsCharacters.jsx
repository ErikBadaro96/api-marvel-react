import React, {useEffect, useState} from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import api, {paramsApi} from '../services/api'


const DetailsCharacters = () => {
    
    const [getCharacters, setCharacters] = useState([]);

    const {params} = useRouteMatch();    
    const getCharactersById = async() => await api.get( `http://gateway.marvel.com/v1/public/characters/${params.id}?ts=${paramsApi.ts}&apikey=${paramsApi.key}&hash=${paramsApi.hash}`);

    useEffect(() => {        
        (async () => { 
            const response = await getCharactersById();  
            setCharacters(response.data.data.results);
        })()
    },[]);

    return (
    <>
    {getCharacters.map(characters => ( 
        <>
        <div className="grid-detalhes">
        <div className="nome-char">
        <span>
            {
            (characters.name != '') 
            ? characters.name
            : 'Não há nome para ser exibido'
            }
        </span>
        </div>
        <div className="detalhes-char">
            <span>
            {
            (characters.description != '') 
            ? characters.description
            : 'No momento, ainda não temos descrição para ser exibida referente ao personagem escolhido. Estamos trabalhando para em breve conseguir proporcionar isso para você. Volte sempre!'
            }
            </span>
        </div>
        <div className="logo-char">
        <img width="100" height="100" 
        src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
        />
        </div>
    </div>
        <div className="btn-voltar">
            <Link to={`/`}>
                <img width="25pt" src={'../assets/icon/back-icon.png'}/>
            </Link>
        </div>
        </>
    ))}
    </>
    )
}
export default DetailsCharacters