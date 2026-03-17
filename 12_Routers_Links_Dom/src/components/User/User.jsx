// main.jsx define the path along with parameter name and render the element in which parameter is needed
// <Route path="user/:userid" element={<User />} />
// import call and use useParam to extract the parameter in the corresponding Element
// const userid = useParams()
// use the extracted parameter with the same name anywhere in your jsx file
// <div> User: {userid} <div/>


import {useParams} from "react-router-dom"

export default function User(){

    const {userid} = useParams()

    return(
        <div className=" text-center text-3xl bg-gray-600 p-4 ">    
            User: {userid}
        </div>
    )
}