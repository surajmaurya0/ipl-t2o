import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assest/logo/ipl-logo.png'
import './navbarStyle.css'
import { menuState } from '../../recoil/menuRecoil'
import { useRecoilState } from 'recoil'
const Navbar = () => {
    const [menu, setMenu] = useRecoilState(menuState)
    const [logInModal, setLogInModal] = useState()
    const[logInData,setLogInData] = useState({
        email:'',
        password:''
    })
    return (
        <>
            <nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src={logo} alt="ipl-t20" width="112" height="28" />
                    </a>
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
                                <input class="input-search" type="text" placeholder="Search Player" />
                                <i class="fa-solid fa-magnifying-glass" style={{ marginLeft: 'auto' }}></i>
                            </div>
                            <div className="buttons">
                                <button className="button is-link btn" onClick={()=> setLogInModal('is-active')}><strong>Log in</strong></button>

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
                        <button className="delete" aria-label="close" onClick={()=> setLogInModal('')}></button>
                    </header>
                    <section className="modal-card-body">
                    <div className="card-content">
                  <div className="columns" style={{display:'block'}}>
                    <div className="column is-fullwidth">
                      <input type="text" className="input" placeholder='Enter Email'  value={logInData.email}  onChange={(e)=> setLogInData({...logInData,email:e.target.value})}/>
                    </div>
                    
                    <div className="column is-fullwidth">
                      <input type="password" className="input" placeholder='Enter Password'  value={logInData.password} onChange={(e)=> setLogInData({...logInData,password:e.target.value})} />
                    </div>

                    </div>
                    </div>
                    </section>
                    <footer className="modal-card-foot">
                        <div className="buttons">
                            <Link className="button is-link btn"><strong>Log in</strong></Link>
                        <button className="button" onClick={()=> setLogInModal('')}>Cancel</button>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Navbar
