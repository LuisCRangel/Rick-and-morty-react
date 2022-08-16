import axios from "axios"
import { useEffect, useState } from "react"

const useFectch = url => {
    
    const [response, setResponse] = useState()

    useEffect(() => {
       axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }, [])

    return response
}


export default useFectch