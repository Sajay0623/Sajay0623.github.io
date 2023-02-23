import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import { HomePage } from '../Components/HomePage'
import Proj from '../Components/Project/Project'
import Skill from '../Components/Skill/Skill'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomePage/> }  />

        <Route path='/about' element={ <About /> }  />

        <Route path='/skill' element={ <Skill /> }  />

        <Route path='/contact' element={ <Contact/> }  />

        <Route path='/project' element={ <Proj /> }  />

    </Routes>
  )
}
