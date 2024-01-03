import { api } from "../api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DB_KEY = '@MovieWiki:favorites'

export function useFavorites(){

    async function addFavorites(data){
        try {
            const value = await AsyncStorage.getItem(DB_KEY)
            let newDB = []

            if(value != null){
                const db = JSON.parse(value)
                newDB = [...db, data]
            }else {
                newDB = [data]
            }
            
            await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDB))
            return newDB
        } catch(err){
            console.log({ err })
            return { err }
        }
    }

    async function getFavorites(){
        const value = await AsyncStorage.getItem(DB_KEY)

        if(value != null){
            const db = JSON.parse(value)
            return db
        }

        return []
    }

    async function removeFavorite(data){
        try {
            let newDB = []
            const value = await AsyncStorage.getItem(DB_KEY)
            console.log(value)

            if(value !== null){
                const db = JSON.parse(value)
                console.log(newDB)
                newDB = db.filter((fv) => (fv.id !== data.id && fv.type !== data.type))
            }else {
                newDB = []
            }
            
            
            await AsyncStorage.setItem(DB_KEY, JSON.stringify(newDB))
            return newDB
        } catch(err){
            console.log({ err })
            return { err }
        }
    }

    return { addFavorites, getFavorites, removeFavorite }
}