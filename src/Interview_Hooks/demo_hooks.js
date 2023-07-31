import { useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

const HooksDemo=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data,setData]=useState({count: 0})
    const [showForm,setShowForm]=useState(false)
    const {register,handleSubmit,errors}=useForm()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleClick=()=>{
        setData((prevState)=>({
            count: prevState.count+1
        }))
    }
    const handleFormData=(formData)=>{
        console.log(formData)
    }
    const handleMultipleClicks=()=>{
    handleClick()
        setShowForm(true)
    }
    // const fetchData=()=>{
    //     return new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             resolve('Data frm sercver')
    //
    //         },1000)
    //     })
    // }
    // fetchData()
    //     .then((data)=>{
    //         console.log(data)
    //     })
    //     .catch((error)=>{
    //         console.error(error)
    //     })
    const fetchData =async ()=>{
        const response=await axios.get(`/api/v1/users`)
        console.log(response.data)
    }

    return(
        <>
            <div>
                <button onClick={handleClick}>Click here</button>
                The button is clicked {data.count} times
                {!showForm ?(
                    <button onClick={(e)=>{handleMultipleClicks()}}>Click here to show the form</button>
                ):(
                    <>
                        <form onSubmit={handleSubmit(handleFormData)}>
                            <>
                                <input type="text" placeholder="enter your username" id="username"  ref={register({required:true})} required/><br/>
                                <input type="text" placeholder="enter your password" id="password" required/><br/>
                                <input type="text" placeholder="enter your email" id="email"/><br/>
                                <button onSubmit={handleSubmit}>Save Data</button>
                            </>
                        </form>
                    </>
                )

                }
            </div>
        </>
    )
}
export default HooksDemo