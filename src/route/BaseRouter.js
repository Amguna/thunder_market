import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//view page
import MainScreen from '../view/main';



// Route 아래에 path, component 등록해서 사용

export default function BaseRouter() {
  return (
    <Router>
      <Switch>
        <Route
          path="/" component={MainScreen}
        />
      </Switch>
    </Router>
  )
}
