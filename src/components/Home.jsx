import React, { useEffect } from 'react'
import './homeCss.css'
import { menuState } from '../recoil/menuRecoil'
import { useRecoilValue } from 'recoil'
import SearchMenu from './layout/SearchMenu'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const teamData = JSON.parse(localStorage.getItem("teamData"))
    const menu = useRecoilValue(menuState)
    const navigate = useNavigate()

    return (
        <div className="has-background">
            <div className="container">
                <div className="section">
                    {menu && <SearchMenu />}
                    <div className="columns is-multiline">

                        {
                            teamData && teamData.reverse().map((team) => {
                                const { name, themeEndColor, themeStartColor, teamLogo,
                                    teamCode

                                } = team

                                return (
                                    <>
                                        <div className="column is-3 column_custom" key={teamCode} onClick={()=> navigate(`/team-page/${teamCode}`)}>
                                            <div className="box" style={{ backgroundImage: `linear-gradient(45deg, ${themeStartColor}, ${themeEndColor})` }}>
                                                <figure class="image picture">
                                                    <img src={teamLogo} alt={name} style={{ height: '230px' }} />
                                                </figure>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
