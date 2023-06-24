import React from 'react'
import './homeCss.css'
import {Link} from 'react-router-dom'
import { menuState } from '../recoil/menuRecoil'
import {useRecoilValue} from 'recoil' 

const Home = () => {
    const teamData = JSON.parse(localStorage.getItem("teamData"))
    const menu =  useRecoilValue(menuState)
    console.log(teamData)
    return (
        <div className="has-background">
            <div className="container">
                <div className="section">
                       {menu && <div className="columns container">
                            <div className="box" style={{width:'-webkit-fill-available'}}>
                                <div className="search-mobile box">
                                    <input class="input-search" type="text" placeholder="Search Player" />
                                    <i class="fa-solid fa-magnifying-glass" style={{ marginLeft: 'auto' }}></i>
                                </div>
                                <div className="buttons-mobile">
                                    <Link to="/" className="button is-link" style={{width:'200px'}}><strong>Log in</strong></Link>

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
