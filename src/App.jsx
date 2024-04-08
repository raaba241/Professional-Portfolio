import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Banner from './assets/components/Banner'
import Education from './assets/components/Education';
import Contact from './assets/components/Contact'
import Project from './assets/components/Projects'


function App() {

  return (

    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/'element={<Banner/>}/>
            <Route path='/skills'element={<Banner/>}/>
            <Route path='/education'element={<Education/>}/>
            <Route path='/projects'element={<Project/>}>
              <Route path='/projects/#1'element={""}/>
            </Route>
            <Route path='/contact-me'element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
