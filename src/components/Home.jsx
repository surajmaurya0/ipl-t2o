import React, { useEffect } from 'react'
import './homeCss.css'
import { Link, useNavigate } from 'react-router-dom'
import { logInMenu, menuState } from '../recoil/menuRecoil'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const Home = () => {
    const teamData = JSON.parse(localStorage.getItem("teamData"))
    const navigate = useNavigate()
    const menu = useRecoilValue(menuState)
    const setLogInModal = useSetRecoilState(logInMenu)
    console.log(teamData)
    const userLogInOrNot = JSON.parse(localStorage.getItem("logInUser"))
    const logOutFunc = ()=>{
        localStorage.setItem("logInUser",false)
        window.location.reload()
    }
    return (
        <div className="has-background">
            <div className="container">
                <div className="section">
                    {menu && <div className="columns container">
                        <div className="box" style={{ width: '-webkit-fill-available' }}>
                            <div className="search-mobile box">
                                <input class="input-search" type="text" placeholder="Search Player" />
                                <i class="fa-solid fa-magnifying-glass" style={{ marginLeft: 'auto' }}></i>
                            </div>
                            <div className="buttons-mobile">
                                {
                                    userLogInOrNot ?
                                    <>
                                        <button className="button is-link column_custom" style={{ width: '200px' }} onClick={() => [navigate('/create-new-team'),setLogInModal('')]}><strong>Create Team</strong></button>
                                        <button className="button is-danger btn column_custom" style={{ width: '200px' }} onClick={() => logOutFunc()}><strong>Log Out</strong></button>
                                    </>
                                        :
                                        <button className="button is-link column_custom" style={{ width: '200px' }} onClick={() => setLogInModal('is-active')}><strong>Log in</strong></button>
                                }

                            </div>
                        </div>
                    </div>}
                    <div className="columns is-multiline">

                        {
                            teamData && teamData.map((team) => {
                                const { name, themeEndColor, themeStartColor, teamLogo,
                                    teamCode

                                } = team

                                return (
                                    <>
                                        <div className="column is-3 column_custom" key={teamCode}>
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
