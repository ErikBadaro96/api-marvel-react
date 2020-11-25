import axios from 'axios';

// const privateKey = "106b2efe1c2c26fd1002757a83c12cb9a6dc0683";
const publicKey = "5331488951bd45c8ba6d1d46700440bf";
const timeStamp = '1605059019879';
const hash = '579cbbf92bb87b8b585726bd8e749c60';

const api = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public`
});

export const urlPersonagens = `/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`

export const paramsApi = { key : publicKey, ts: timeStamp, hash: hash}

export default api;