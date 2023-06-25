import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { playerDataState } from '../../recoil/playerDataRecoil'

const TeamPage = () => {
  const params = useParams()
  const teamdata = JSON.parse(localStorage.getItem("teamData"))
  const teamInfo = teamdata.filter((team) => team.teamCode === params.team)
  const { championships, name, teamCaptain, teamCoach, teamCode, teamLogo, themeEndColor, themeStartColor
  } = teamInfo[0]
  const playerInfo = useRecoilValue(playerDataState)
  console.log(playerInfo)
  const playerByTeam = playerInfo.filter((player) => player.playerTeam == params.team)
  console.log(playerByTeam)
  return (
    <div className="has-background">
      <div className="container">
        <div className="section">
          <div className="card">
            <div className="card-content">
              <div className="columns">
                <div className="column is-3 column_custom" style={{ padding: '0' }}>
                  <div className="box" style={{ backgroundImage: `linear-gradient(45deg, ${themeStartColor}, ${themeEndColor})` }}>
                    <figure class="image picture">
                      <img src={teamLogo} alt={name} style={{ height: '230px' }} />
                    </figure>
                  </div>
                </div>
                <div className="column is-9 box ">
                  <p className="is-size-2 "><strong>{name}</strong></p>
                  <p className="is-size-5 teamStyle"><strong>Championships:</strong>{championships.map((champ) => <span>{champ},</span>)}</p>
                  <p className="is-size-5 teamStyle"> <strong>Coach:</strong>{teamCoach}</p>
                  <p className="is-size-5 teamStyle"><strong>Captain:</strong>{teamCaptain}</p>
                </div>
              </div>
            </div>
          </div>
          <p className='is-size-4' style={{ marginTop: '25px' }}><strong>Player List:</strong> </p>
          <div className="columns is-multiline" style={{ marginTop: '25px' }}>
          {playerByTeam.map((player) => {
            const { playerId, playerName, playerImage, totalWickets, totalRuns, totalMatches, themeEndColor, themeStartColor } = player
            return (
              <div className="column is-3 column_custom picture-player" key={playerId}>
                <div className="box"
                  style={{ backgroundImage: `linear-gradient(45deg, ${themeStartColor}, ${themeEndColor})`, padding: '0' }}
                >
                  <figure class="image">
                    <img src={playerImage} alt={playerName} style={{ height: '200px' }} />
                  </figure>
                  <div className="column  player has-text-centered has-background-light is-fullWidth" style={{}}>
                    <span className='is-size-5' style={{ display: 'block' }}><strong>{playerName}</strong></span>
                    <div className="column is-flex is-justify-content-space-between">
                      <div style={{ borderRight: '1px solid #ccc', width: '33.3%' }}>
                        <span><strong>{totalMatches}</strong></span>
                        <p>Matches</p>

                      </div>

                      <div style={{ borderRight: '1px solid #ccc', width: '33.3%' }}>
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
            )
          })

          }
        </div>
      </div>
    </div>
    </div >
  )
}

export default TeamPage
