import { useEffect, useState } from "react"

const useProducts = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(response => setData(response))
    }, [])
    return { data, setData }
}

export default useProducts;