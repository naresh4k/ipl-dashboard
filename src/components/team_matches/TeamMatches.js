import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './team_matches.css'
import LatestMatch from '../latest_match/LatestMatch'
import MatchCard from '../match_card/MatchCard'

const TeamMatches = () => {
  const [teamBanner, setTeamBanner] = useState('')
  const [latestMatch, setLatestMatch] = useState({})
  const [recentMatches, setRecentMatches] = useState([])
  const [loading, setLoading] = useState(true)

  const params = useParams()

  const getIplTeamDetails = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${params.id}`)
    const data = await response.json()
    const lateshMatchData = data.latest_match_details
    const formattedLateshMatch = {
      umpires: lateshMatchData.umpires,
      result: lateshMatchData.result,
      manOfTheMatch: lateshMatchData.man_of_the_match,
      id: lateshMatchData.id,
      date: lateshMatchData.date,
      venue: lateshMatchData.venue,
      competingTeam: lateshMatchData.competing_team,
      competingTeamLogo: lateshMatchData.competing_team_logo,
      firstInnings: lateshMatchData.first_innings,
      secondInnings: lateshMatchData.second_innings,
      matchStatus: lateshMatchData.match_status,
    }
    const formattedRecentMatches = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    setTeamBanner(data.team_banner_url)
    setLatestMatch(formattedLateshMatch)
    setRecentMatches(formattedRecentMatches)
    setLoading(false)
  }

  useEffect(() => {
    getIplTeamDetails()
  }, [])

  const renderMatchDetailsPage = () => (
    <div className="team-matches">
      <img src={teamBanner} alt="team banner" />
      <h1>Latest Matches</h1>
      {latestMatch !== {} && (
        <LatestMatch latestMatch={latestMatch} key={latestMatch.id} />
      )}
      <h1>Recent Matches</h1>
      {recentMatches.length !== 0 && (
        <ul className="team-recent-matches">
          {recentMatches.map(each => (
            <MatchCard recentMatch={each} key={each.id} />
          ))}
        </ul>
      )}
    </div>
  )

  const renderLoader = () => (
    <div className="loader">
      <Loader type="Oval" color="white" height={50} width={50} />
    </div>
  )

  return (
    <div className={`team-matches-page ${params.id}`}>
      {loading ? renderLoader() : renderMatchDetailsPage()}
    </div>
  )
}

export default TeamMatches
