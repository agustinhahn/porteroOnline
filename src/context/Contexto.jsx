import { createContext, useState } from "react";
export const DataContext = createContext()

export const DataProvider = ({children}) =>{
    const [data, setData] = useState([])
    const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

    const fetchData = async()=>{
        const response = await fetch(`${API_BASE_URL}/users`)
        const result = await response.json()
        setData(result)
    }

    const putData = async(userId)=>{
        const response = await fetch(`${API_BASE_URL}/users/${userId}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json ; charset=UTF-8',
            },
            body: JSON.stringify({
                username: "LLAMANDO"
            }),
        })
        const result = await response.json()
        setData(prevData=>
            prevData.map(user=> user.id === userId ? {...user, ...result} : user
        ))
    }

    return(
        <DataContext.Provider value={{data, fetchData, putData}}>
            {children}
        </DataContext.Provider>
    )
}
