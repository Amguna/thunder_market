import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



// Route 아래에 path, component 등록해서 사용
import MainBodyComponent from '../component/main/body'

export default function BodyRouter() {
  return (
    <Router>
      <Switch>
        <Route
          path="/" component={MainBodyComponent}
        />
      </Switch>
    </Router>
  )
}
