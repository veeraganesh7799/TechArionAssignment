import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import CounterApp from './components/CounterApp';
import FourthPblm from './components/FourthPblm'
import ThirdPblm  from './components/ThirdPblm';

function App() {
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<CounterApp/>}/>
        <Route path='/display_3x3_grid' element={<ThirdPblm/>}/>
        <Route path='/postApi' element={<FourthPblm/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
