import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/layout/Navbar'
import 'bulma/css/bulma.css'
import { teamDataState } from './recoil/teamDataRecoil'
import { useRecoilValue } from 'recoil'
import CreateTeam from './components/pages/CreateTeam'
import { playerDataState } from './recoil/playerDataRecoil'
import SearchPage from './components/pages/SearchPage'
import TeamPage from './components/pages/TeamPage'
const App = () => {
  const teamData = useRecoilValue(teamDataState)
  const playerData = useRecoilValue(playerDataState)
  const playerDataInArray = JSON.stringify(playerData)
  const teamDataInArray = JSON.stringify(Object.values(teamData))
  const getDataFromLocal = JSON.parse(localStorage.getItem("teamData"))
  if (!getDataFromLocal) {
    localStorage.setItem("teamData", teamDataInArray)
  }
  localStorage.setItem("playerData", playerDataInArray)
  const logInStatus = JSON.parse(localStorage.getItem("logInUser"))
  console.log(logInStatus)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/create-new-team' element={logInStatus ? <CreateTeam /> : <Home />} />
        <Route path='/search-player/:name' element={<SearchPage />} />
        <Route path='/team-page/:team' element={<TeamPage />} />
        <Route path='*' element={<h3>Page Not Found</h3>} />
      </Routes>
    </>
  )
}

export default App
