import {Switch, Route, Redirect} from 'react-router-dom'
import './app.css'
import Home from './components/home/Home'
import TeamMatches from './components/team_matches/TeamMatches'
import NotFound from './components/not_found/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
