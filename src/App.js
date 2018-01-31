import React, { Component } from 'react'
import { Home, Login } from './containers'
import {HashRouter as Router} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {loadLocalUserInfo} from './store/action/user'

class App extends Component {
  componentDidMount () {
    this.props.loadLocalUserInfo()
    console.log('getDefaultProps')
  }

  render() {
    let container = (
      <Home />
    )
    console.log(this.props, 'auth')
    if (!this.props.auth) {
      container = (
        <Login />
      )
    }
    
    return (
      <div className="App">
        <Router>
          {container}
        </Router>
      </div>
    )
  }
}

// export default App


export default connect(
  state => ({
    auth: state.user.auth
  }),
  dispatch => bindActionCreators({
    loadLocalUserInfo
  }, dispatch)
)(App)
