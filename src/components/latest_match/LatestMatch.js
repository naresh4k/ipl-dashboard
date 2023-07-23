import './latest_match.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch

  return (
    <div className="latest-match">
      <div className="latest-match-content1">
        <div>
          <h2>{competingTeam}</h2>
          <h3>{date}</h3>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <hr />
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <div className="latest-match-content2">
        <div>
          <p className="label">First Innings </p>
          <p className="label-value">{firstInnings}</p>
        </div>
        <div>
          <p className="label">Second Innings </p>
          <p className="label-value">{secondInnings}</p>
        </div>
        <div>
          <p className="label">Man Of The Match </p>
          <p className="label-value">{manOfTheMatch}</p>
        </div>
        <div>
          <p className="label">Umpires </p>
          <p className="label-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
