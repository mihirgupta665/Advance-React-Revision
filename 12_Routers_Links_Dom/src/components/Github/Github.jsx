import React, { useEffect, useState } from "react"

export default function Github(){

    let [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://api.github.com/users/mihirgupta665", {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setData(data)
        })
    }, [])

    return(
        <div className="m-4 p-4 text-center text-3xl text-white bg-gray-500">
            Github Followers : {data?.followers}
            <img src={data?.avatar_url} alt="Git Picture" width={300} 
            />
        </div>
    )
}