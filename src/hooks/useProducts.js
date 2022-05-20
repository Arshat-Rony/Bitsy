import { useEffect, useState } from "react"

const useProducts = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(response => setData(response))
    }, [url])

    return { data, setData }
}

export default useProducts;