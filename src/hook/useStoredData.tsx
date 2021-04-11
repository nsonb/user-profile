import {useState, useEffect} from 'react'

// custom hook for saving data into localStorage and serve data from localStorage on start up.
export const useStoredData = (type: string, defaultValue?: string) => {

    const [data, setData] = useState<string>(defaultValue || '')

    useEffect (() => {
        try {
            setData(window.localStorage.getItem(type) || '' )
        } catch(err) {
            console.log(err)
        }
    }, [type])

    useEffect(() => {
        try {
            window.localStorage.setItem(type, data)
        } catch(err) {
            console.log(err)
        }
    }, [data, type])

    const setCurrentData = (value: string) =>{
        setData(value)
    }

    const returned = {data, setCurrentData}

    return returned
}


