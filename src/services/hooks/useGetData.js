import { api } from "../api";

export function useGetData(){

    async function getFilms(){
        try {
            const response = await api.get('/films')
            console.log(response)
            return response.data
        } catch(err){
            console.log({ err })
            return { err }
        }
    }

    async function getCharacters(){
        try {
            const response = await api.get('/characters')
            console.log(response)
            return response.data
        } catch(error){
            console.log({ error })
            return { error }
        }
    }

    return { getFilms, getCharacters }
}