import React, { useState } from 'react'
import { logInMenu, menuState } from '../../recoil/menuRecoil'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { searchDataText } from '../../recoil/searchRecoil'

const SearchMenu = () => {
    const setMenu = useSetRecoilState(menuState)
    const navigate = useNavigate()
    const setSearchText = useSetRecoilState(searchDataText)
    const [searchData,setSearchData] = useState()
    const setLogInModal = useSetRecoilState(logInMenu)
    const userLogInOrNot = JSON.parse(localStorage.getItem("logInUser"))
    const logOutFunc = () => {
        localStorage.setItem("logInUser", false)
        window.location.reload()
    }
    const searchFunc = () => {
        navigate(`/search-player/${searchData}`)
        setSearchText(searchData)
        setMenu(false)
    }
    return (
        <div className="columns container">
            <div className="box" style={{ width: '-webkit-fill-available' }}>
                <div className="search-mobile box">
                    <input class="input-search" type="text" placeholder="Search Player" value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                    <i class="fa-solid fa-magnifying-glass" style={{ marginLeft: 'auto' }} onClick={() => searchFunc()}></i>
                </div>
                <div className="buttons-mobile">
                    {
                        userLogInOrNot ?
                            <>
                                <button className="button is-link column_custom" style={{ width: '200px' }} onClick={() => [navigate('/create-new-team'), setLogInModal('')]}><strong>Create Team</strong></button>
                                <button className="button is-danger btn column_custom" style={{ width: '200px' }} onClick={() => logOutFunc()}><strong>Log Out</strong></button>
                            </>
                            :
                            <button className="button is-link column_custom" style={{ width: '200px' }} onClick={() => setLogInModal('is-active')}><strong>Log in</strong></button>
                    }

                </div>
            </div>
        </div>
    )
}

export default SearchMenu
