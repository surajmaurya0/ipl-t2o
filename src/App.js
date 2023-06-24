import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/layout/Navbar'
import 'bulma/css/bulma.css'
import { teamDataState } from './recoil/teamDataRecoil'
import {useRecoilValue} from 'recoil'
import CreateTeam from './components/pages/CreateTeam'
const App = () => {
  const teamData =  useRecoilValue(teamDataState)
    const teamDataINArray = JSON.stringify(Object.values(teamData))
    localStorage.setItem("teamData",teamDataINArray)
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create-new-team' element={<CreateTeam/>} />
   </Routes>
   </>
  )
}

export default App
