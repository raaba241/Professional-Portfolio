import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Banner from './assets/components/Banner'


function App() {

  return (

    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/'element={<Banner/>}/>
            <Route path='/skills'element={<Banner/>}/>
            <Route path='/education'element={<Banner></Banner>}/>
            <Route path='/projects'element={<Banner></Banner>}/>
            <Route path='/contact-me'element={<Banner></Banner>}/>
          </Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
