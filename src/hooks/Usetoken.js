import React, { useEffect, useState } from 'react';

const Usetoken = (user) => {
    const [token, setToken] = useState("")
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        const url = `http://localhost:5000/users/${email}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                if (user) {
                    localStorage.setItem("accessToken", data.token)
                    setToken(data.token)
                }
            })
    }, [user])


    return {
        token, setToken
    }
};


export default Usetoken;


