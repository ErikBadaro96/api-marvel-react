import React,{useEffect, useState} from 'react'
import GridPersonagem from '../components/GridCharacters'
import TextSearch from '../components/TextSearch'
import api, {urlPersonagens} from '../services/api';
import Pagination from '../components/Pagination'
import GridDescription from '../components/GridDescription'

//busca de todos os personagens pela api
const getCharacters = async() => await api.get(urlPersonagens);

//busca de personagens por nome pela api
const getCharactersByName = async(param) => await api.get(`${urlPersonagens}&nameStartsWith=${param}`);

const Home = () => {

    //criando estado para personagem e setPersonagem 
    const [personagens, setPersonagens] = useState([]);
    //filtro de pesquisa de personagem
    const [filtro, setFiltro] = useState('');
    //criando estado para current page
    const [currentPage, setCurrentPage] = useState(1);
    //criando estado para postPerpage
    const [postPerPage] = useState(5);
    
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentsPosts = personagens.slice(indexOfFirstPost, indexOfLastPost)

    //mudanca de pagina
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const previousPage = () => {
        if(currentPage > 1){
            paginate(currentPage - 1);
        }
    }

    const nextPage = () => {        
        let personagens_length = personagens.length;
        let post_per_page = postPerPage;
        let total_pages = personagens_length < post_per_page ? 1 : (personagens_length / post_per_page);
        total_pages = Math.ceil(total_pages);
        if(currentPage < total_pages){
            let nextPage = currentPage + 1
            paginate(nextPage);
        }
    }

    //funcao para filtrar nome personagem ao digitar
    const handleSetFiltro = async (param) => {
        setFiltro(param);
        let response;
        if(!filtro){
            response = await getCharacters(); 
        }
        else{
            response = await getCharactersByName(param);  
        }
        console.log(filtro)
        setPersonagens(response.data.data.results)  
    }


    useEffect(() => {        
        (async () => { 
            const response = await getCharacters();  
            setPersonagens(response.data.data.results)
        })()
    },[]);

    return (
        
        <>
            <TextSearch filtro={filtro} handleSetFiltro={handleSetFiltro}/>
            <GridDescription/>
            <GridPersonagem personagens={currentsPosts}/>
            <Pagination postPerPage={postPerPage} totalPosts={personagens.length} paginate={paginate} nextPage={nextPage} previousPage={previousPage}/>
        </>
        
    )
}
export default Home