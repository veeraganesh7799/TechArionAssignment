import React,{useState,useEffect} from 'react'
import './index.css'

const ThirdPblm = () => {
  
    const [data, setData] = useState([])

    useEffect(()=>{
        const getData = () => {
            fetch("https://gorest.co.in/public/v1/todos")
            .then((response)=>response.json()).then((jsonData)=>setData(jsonData.data.slice(0,9)))
        }
        getData()
    },[])
    console.log(data)

  return (
    <div className='main-container'>
        <div className='card-container'>
            {data.map(each=>(
                <li key={each.id} className="each-list">
                    <p className='title'>{each.title}</p>
                </li>
            ))}
        </div>
    </div>
  )
}

export default ThirdPblm
