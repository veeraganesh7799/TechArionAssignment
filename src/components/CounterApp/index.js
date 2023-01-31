import React,{useState} from 'react'
import Header from '../Header';
import './index.css';

function CounterApp() {
    const [count, setCount] = useState(0)

    return(
        <>
        <Header/>
        <div className='counter-app'>
            <div className='counter-card'>
                <h1 className='heading'>Counter</h1>
                <div className='container'>
                    <button className='btn' onClick={()=>setCount(count-1)}>-</button>
                    <h4 className='display-counter'>{count}</h4>
                    <button className='btn' onClick={()=>setCount(count+3)}>+</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CounterApp;