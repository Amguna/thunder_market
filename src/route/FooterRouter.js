import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



// Route 아래에 path, component 등록해서 사용
import MainFooterComponent from '../component/main/footer'

export default function FooterRouter() {
  return (
    <Router>
      <Switch>
        <Route
          path="/" component={MainFooterComponent}
        />
      </Switch>
    </Router>
  )
}
