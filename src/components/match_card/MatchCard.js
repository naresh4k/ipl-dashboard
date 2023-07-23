import './match_card.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = recentMatch

  return (
    <li>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <h2>{competingTeam}</h2>
      <p className="result">{result}</p>
      <p className={`match-status ${matchStatus.toLowerCase()}`}>
        {matchStatus}
      </p>
    </li>
  )
}
export default MatchCard
