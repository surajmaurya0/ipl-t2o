import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/layout/Navbar'
import 'bulma/css/bulma.css'
import { teamDataState } from './recoil/teamDataRecoil'
import {useRecoilValue} from 'recoil'
import CreateTeam from './components/pages/CreateTeam'
import { playerDataState } from './recoil/playerDataRecoil'
import SearchPage from './components/pages/SearchPage'
const App = () => {
  const teamData =  useRecoilValue(teamDataState)
  const playerData =  useRecoilValue(playerDataState)
  const playerDataInArray = JSON.stringify(playerData)
    const teamDataINArray = JSON.stringify(Object.values(teamData))
    localStorage.setItem("teamData",teamDataINArray)
    localStorage.setItem("playerData",playerDataInArray)
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create-new-team' element={<CreateTeam/>} />
    <Route path='/search-player/:name' element={<SearchPage/>} />
    <Route path='*' element={<h3>Page Not Found</h3>} />
   </Routes>
   </>
  )
}

export default App
