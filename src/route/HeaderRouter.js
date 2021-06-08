import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



// Route 아래에 path, component 등록해서 사용
import HeaderComponent from '../component/main/header';

export default function HeaderRouter() {
  return (
    <Router>
      <Switch>
        <Route
          path="/" component={HeaderComponent}
        />
      </Switch>
    </Router>
  )
}
