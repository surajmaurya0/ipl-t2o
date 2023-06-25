import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuState } from '../../recoil/menuRecoil';
import { useRecoilValue } from 'recoil';
import SearchMenu from '../layout/SearchMenu';

const teamData = JSON.parse(localStorage.getItem("teamData"))
const CreateTeam = () => {
  const [newTeam, setNewTeam] = useState({
    championships: [],
    name: '',
    teamCaptain: '',
    teamCoach: '',
    teamCode: '',
    teamLogo: '',
    themeEndColor: '',
    themeStartColor: ''
  });
  const navigate = useNavigate()
  const [formSubmitted, setFormSubmitted] = useState(false);
  const menu = useRecoilValue(menuState)
  const showError = (field) => {
    if (formSubmitted && !newTeam[field]) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (formSubmitted) {
      setFormSubmitted(false);
      setNewTeam({
        championships: [],
        name: '',
        teamCaptain: '',
        teamCoach: '',
        teamCode: '',
        teamLogo: '',
        themeEndColor: '',
        themeStartColor: ''
      });
    }
  }, [formSubmitted]);

  const createNewTeam = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (
      newTeam.name &&
      newTeam.teamCode &&
      newTeam.teamLogo &&
      newTeam.themeStartColor &&
      newTeam.themeEndColor &&
      newTeam.teamCoach &&
      newTeam.teamCaptain &&
      newTeam.championships.length > 0
    ) {
      console.log(newTeam);
      let newTeamData = [...teamData,newTeam]
      newTeamData = JSON.stringify(newTeamData)

      localStorage.setItem("teamData",newTeamData)
      // console.log(newTeamData)
      navigate('/')

      
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div className="has-background">
      <div className="container">
        <div className="section">
        {menu && <SearchMenu />}
          <div className="columns is-multiline is-flex is-justify-content-center">
            <div className="column is-8">
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title is-size-3">Create Team</p>
                </div>
                <div className="card-content" style={{ padding: '1.5rem !!important' }}>
                  <form onSubmit={createNewTeam}>
                    <div className="columns is-multiline">
                      <div className="column is-full">
                        <label htmlFor="name">Team Name</label>
                        <input
                          type="text"
                          id="name"
                          className={`input ${showError('name') ? 'is-danger' : ''}`}
                          placeholder="Enter Team Name"
                          value={newTeam.name}
                          required
                          onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                        />
                        {showError('name') && <p className="help is-danger">Team Name is required.</p>}
                      </div>
                      <div className="column is-full">
                        <label htmlFor="teamCode">Team Code</label>
                        <input
                          type="text"
                          id="teamCode"
                          className={`input ${showError('teamCode') ? 'is-danger' : ''}`}
                          placeholder="Enter Team Code"
                          value={newTeam.teamCode}
                          required
                          onChange={(e) => setNewTeam({ ...newTeam, teamCode: e.target.value })}
                        />
                        {showError('teamCode') && <p className="help is-danger">Team Code is required.</p>}
                      </div>
                      <div className="column is-full">
                        <label htmlFor="teamLogo">Team Logo</label>
                        <input
                          type="url"
                          id="teamLogo"
                          className={`input ${showError('teamLogo') ? 'is-danger' : ''}`}
                          placeholder="Enter Logo Url"
                          value={newTeam.teamLogo}
                          required
                          onChange={(e) => setNewTeam({ ...newTeam, teamLogo: e.target.value })}
                        />
                        {showError('teamLogo') && <p className="help is-danger">Team Logo is required.</p>}
                      </div>
                      <div className="column is-6">
                        <label htmlFor="themeStartColor">Team Theme Start Color</label>
                        <input
                          type="color"
                          id="themeStartColor"
                          className={`input ${showError('themeStartColor') ? 'is-danger' : ''}`}
                          value={newTeam.themeStartColor}
                          required
                          onChange={(e) => setNewTeam({ ...newTeam, themeStartColor: e.target.value })}
                        />
                        {showError('themeStartColor') && (
                          <p className="help is-danger">Team Theme Start Color is required.</p>
                        )}
                      </div>
                      <div className="column is-6">
                        <label htmlFor="themeEndColor">End Color</label>
                        <input
                          type="color"
                          id="themeEndColor"
                          className={`input ${showError('themeEndColor') ? 'is-danger' : ''}`}
                          value={newTeam.themeEndColor}
                          required
                          onChange={(e) => setNewTeam({ ...newTeam, themeEndColor: e.target.value })}
                        />
                        {showError('themeEndColor') && (
                          <p className="help is-danger">End Color is required.</p>
                        )}
                      </div>
                      <div className="column is-full">
                        <label htmlFor="teamCoach">Coach Name</label>
                        <input
                          type="text"
                          id="teamCoach"
                          className={`input ${showError('teamCoach') ? 'is-danger' : ''}`}
                          placeholder="Enter Coach Name"
                          value={newTeam.teamCoach}
                          required
                          onChange={(e) => setNewTeam({ ...newTeam, teamCoach: e.target.value })}
                        />
                        {showError('teamCoach') && <p className="help is-danger">Coach Name is required.</p>}
                      </div>
                      <div className="column is-full">
                        <label htmlFor="teamCaptain">Captain Name</label>
                        <input
                          type="text"
                          id="teamCaptain"
                          className={`input ${showError('teamCaptain') ? 'is-danger' : ''}`}
                          placeholder="Enter Captain Name"
                          value={newTeam.teamCaptain}
                          required
                          onChange={(e) => setNewTeam({ ...newTeam, teamCaptain: e.target.value })}
                        />
                        {showError('teamCaptain') && <p className="help is-danger">Captain Name is required.</p>}
                      </div>
                      <div className="column is-full">
                        <label htmlFor="championships">Championship Years (Separated by comma)</label>
                        <input
                          type="text"
                          id="championships"
                          className={`input ${showError('championships') ? 'is-danger' : ''}`}
                          placeholder="Enter Championship year"
                          value={newTeam.championships}
                          required
                          onChange={(e) => setNewTeam({ ...newTeam, championships: e.target.value })}
                        />
                        {showError('championships') && (
                          <p className="help is-danger">Championship Years are required.</p>
                        )}
                      </div>
                      <button className="button is-link" style={{ marginTop: '15px' }} type="submit">
                        Create Team
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
