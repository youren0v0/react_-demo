import React, { Component } from 'react'
import {Login, Home, Check, Contract, Notification, Shop} from '../containers'
import {Redirect, Route, HashRouter as Router} from 'react-router-dom'

class AppRouter extends Component {
  state = {
    pathName: '/menu/one'
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"></Route>
          <Route path="/login" component={Login} ></Route>
          <Route path="/notification" component={Notification} ></Route>
          <Route path="/shop" component={Shop} ></Route>
          <Route path="/contract" component={Contract} ></Route>
          <Route path="/check" component={Check} ></Route>
        </div>
      </Router>
    )
  }
}

export default AppRouter
