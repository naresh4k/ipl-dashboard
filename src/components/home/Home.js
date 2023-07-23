import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './home.css'

const Home = () => {
  const [iplTeams, setIplTeams] = useState([])
  const [loading, setLoadingStatus] = useState(true)

  const getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    setIplTeams(formattedData)
    setLoadingStatus(false)
  }

  useEffect(() => {
    getIplTeamsData()
  }, [])

  const renderIplTeamsPage = () => (
    <ul className="ipl-teams">
      {iplTeams.map(team => (
        <Link to={`/team-matches/${team.id}`}>
          <li>
            <img src={team.teamImageUrl} alt={team.name} />
            <p>{team.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  )

  const renderLoader = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  return (
    <div className="ipl-dashboard">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
        />
        <h1>IPL Dashboard</h1>
      </div>
      {loading ? renderLoader() : renderIplTeamsPage()}
    </div>
  )
}
export default Home
