import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



// Route 아래에 path, component 등록해서 사용
import MainNavComponent from '../component/main/nav'

export default function NavRouter() {
  return (
    <Router>
      <Switch>
        <Route
          path="/" component={MainNavComponent}
        />
      </Switch>
    </Router>
  )
}
