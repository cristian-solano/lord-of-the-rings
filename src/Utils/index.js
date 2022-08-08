import axios from "axios";

const URL = 'https://the-one-api.dev/v2'


const getConfig = () => ({
    headers: { 
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}` 
    }
})

export const getCharacters = async () => {
    const req = await axios.get(`${URL}/character/`, getConfig())
    return req
}