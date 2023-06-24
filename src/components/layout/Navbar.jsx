import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assest/logo/ipl-logo.png'
import './navbarStyle.css'
import { menuState } from '../../recoil/menuRecoil'
import  {useRecoilState} from 'recoil'
const Navbar = () => {
   const [menu,setMenu] = useRecoilState(menuState)
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
                                <Link to="/add-product" className="button is-link btn"><strong>Log in</strong></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
