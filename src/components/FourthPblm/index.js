import React,{useState,useEffect} from 'react'
import Header from '../Header'
import './index.css'
const FourthPblm = () => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState('')
    const [validation, setValidation] = useState({})


    useEffect(()=>{
        const getDataHandler = async () => {
            const data = {
                email: "ramtej.j13@gmail.com",
                message: "This is a basic message",
                name: "ramtejajakka"
            }
            let options = {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer Authorization_token"
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('https://admin.srkprojects.com/web/api/client/v1/contact-us/',options)
            const inputData = await response.json()
            console.log(inputData)
        }
        getDataHandler()
    },[])

    const submitHandler = (event) => {
        event.preventDefault()
        const userData = {
            email,
            message,
            name
        }
        if (email.length !== 0 && name.length !== 0 && message.length !== 0) setValidation(userData)
        setName("")
        setEmail("")
        setMessage("")
    }
    console.log(validation)

  return (
    <>
    <Header/>
    <div className='main-container'>
      <form className='form-container' onSubmit={submitHandler}>
        <div className='input-container'>
            <label className='label'>Email</label>
            <input placeholder='Enter Email' type="email" className='data' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='input-container'>
            <label className='label'>Message</label>
            <input placeholder='Enter Message' type="text" className='data' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </div>
        <div className='input-container'>
            <label className='label'>Name</label>
            <input placeholder='Enter Name' type="text" className='data' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default FourthPblm
