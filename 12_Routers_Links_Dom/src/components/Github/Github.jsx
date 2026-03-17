import React, { useEffect, useState } from "react"

export default function Github(){

    [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/mihirgupta665")
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            console.log(data)
        })
    }, [])

    return(
        <div className="m-4 p-4 text-center text-3xl text-white bg-gray-500">
            Github Followers : {data.followers}
        </div>
    )
}