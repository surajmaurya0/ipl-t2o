import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/layout/Navbar'
import 'bulma/css/bulma.css'
import { teamDataState } from './recoil/teamDataRecoil'
import {useRecoilValue} from 'recoil'
const App = () => {
  const teamData =  useRecoilValue(teamDataState)
    const teamDataINArray = JSON.stringify(Object.values(teamData))
    localStorage.setItem("teamData",teamDataINArray)
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </>
  )
}

export default App
