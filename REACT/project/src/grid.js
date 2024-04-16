import React from 'react'
import './grid.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import MainContent from './Components/Main/Main-content'

function Grid() {
  return (
    <div className='container-fluid'>
        <div className='navbar'><Navbar/></div>
        <div className='sidebar'><Sidebar/></div>
        <div className='main-content'><MainContent/></div>
    </div>
  )
}

export default Grid
