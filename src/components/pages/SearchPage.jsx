import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { searchDataText, searchResultState } from '../../recoil/searchRecoil'
import { menuState } from '../../recoil/menuRecoil'
import SearchMenu from '../layout/SearchMenu'

const SearchPage = () => {
  const params = useParams()
  const setSearchPlayerText = useSetRecoilState(searchDataText)
  const searchResult = useRecoilValue(searchResultState)
  // setSearchPlayerText(params.name)
  const menu = useRecoilValue(menuState)
  return (
    <>
      <div className="has-background">
        <div className="container">
          <div className="section">
            {menu && <SearchMenu/>}
            <p className="is-size-5" style={{marginBottom:'15px'}}>
              <strong>Search results for:{params.name} </strong>
            
            </p>
            <div className="columns is-multiline">
              {
                searchResult.length ? searchResult.map((player) => {
                  const {playerId, playerName,playerImage,totalWickets,totalRuns,totalMatches,themeEndColor,themeStartColor} = player
                  return (
                    <>
                      <div className="column is-3 column_custom picture-player" key={playerId}>
                        <div className="box"
                         style={{ backgroundImage: `linear-gradient(45deg, ${themeStartColor}, ${themeEndColor})`,padding:'0'}}
                        >
                          <figure class="image">
                            <img src={playerImage} alt={playerName} style={{ height: '200px' }} />
                          </figure>
                          <div className="column  player has-text-centered has-background-light is-fullWidth" style={{}}>
                            <span className='is-size-5' style={{display:'block'}}><strong>{playerName}</strong></span>
                            <div className="column is-flex is-justify-content-space-between">
                            <div  style={{borderRight:'1px solid #ccc',width:'33.3%'}}>
                              <span><strong>{totalMatches}</strong></span>
                              <p>Matches</p>

                            </div>
                            
                            <div  style={{borderRight:'1px solid #ccc',width:'33.3%'}}>
                              <span><strong>{totalRuns}</strong></span>
                              <p>Runs</p>

                            </div>
                            <div >
                              <span><strong>{totalWickets}</strong></span>
                              <p>Wickets</p>

                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }):
                <div style={{margin:'auto',width:'100%'}}><span className='is-size-4'>Player Not found</span></div>

              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage
