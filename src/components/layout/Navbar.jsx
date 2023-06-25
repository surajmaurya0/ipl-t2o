import React, { useState } from 'react'
import logo from '../../assest/logo/ipl-logo.png'
import './navbarStyle.css'
import { logInMenu, menuState } from '../../recoil/menuRecoil'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { logInState } from '../../recoil/logInDataRecoil'
import { Link, useNavigate } from 'react-router-dom'
import { searchDataText } from '../../recoil/searchRecoil'
const Navbar = () => {
    const [menu, setMenu] = useRecoilState(menuState)
    const [logInModal, setLogInModal] = useRecoilState(logInMenu)
    const [errorHandle, setErrorHandle] = useState(false)
    const [searchText,setSearchText]= useRecoilState(searchDataText)
    const getUserData = useRecoilValue(logInState)
    const navigate = useNavigate()
    const [logInData, setLogInData] = useState({
        email: '',
        password: ''
    })

    const logInFunc = () => {
        const validateUser = logInData.password == getUserData.password && logInData.email == getUserData.email
        if (validateUser) {
            localStorage.setItem('logInUser', validateUser)
            setErrorHandle(false)
            window.location.reload()
        } else {
            setErrorHandle(true)
        }

    }
    const userLogInOrNot = JSON.parse(localStorage.getItem("logInUser"))
   const searchFunc = ()=>{
    navigate(`/search-player/${searchText}`)
   }

    return (
        <>
            <nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <Link class="navbar-item" to='/'>
                        <img src={logo} alt="ipl-t20" width="112" height="28" />
                    </Link>
                    <div class="navbar-burger" onClick={() => setMenu(!menu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" class="navbar-menu">

                    <div class="navbar-end">
                        <div className="navbar-item">
                            <div className="search">
                                <input class="input-search" type="text" placeholder="Search Player" onChange={(e)=> setSearchText(e.target.value)} value={searchText} />
                                <i class="fa-solid fa-magnifying-glass" onClick={()=> searchFunc()}  style={{ marginLeft: 'auto' }}></i>
                            </div>
                            <div className="buttons">
                                {
                                    userLogInOrNot ?
                                    <>
                                        <button className="button is-link btn column_custom" onClick={() => navigate('/create-new-team')}><strong>Create Team</strong></button>
                                        <button className="button is-danger btn column_custom" onClick={() => localStorage.setItem("logInUser",false)}><strong>Log Out</strong></button>
                                    </>
                                        :
                                        <button className="button is-link btn column_custom" onClick={() => setLogInModal('is-active')}><strong>Log in</strong></button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`modal ${logInModal}`} >
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Log In</p>
                        <button className="delete" aria-label="close" onClick={() => setLogInModal('')}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="card-content">
                            <div className="columns" style={{ display: 'block' }}>
                                {errorHandle && <h3 style={{ color: 'red' }}>Please check Your Email And Password!!!</h3>}
                                <div className="column is-fullwidth">
                                    <input type="text" className="input" placeholder='Enter Email' value={logInData.email} onChange={(e) => setLogInData({ ...logInData, email: e.target.value })} />
                                </div>

                                <div className="column is-fullwidth">
                                    <input type="password" className="input" placeholder='Enter Password' value={logInData.password} onChange={(e) => setLogInData({ ...logInData, password: e.target.value })} />
                                </div>

                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <div className="buttons">

                            <button className="button is-link btn column_custom" onClick={() => logInFunc()} ><strong>Log in</strong></button>
                            <button className="button column_custom" onClick={() => setLogInModal('')}>Cancel</button>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Navbar
