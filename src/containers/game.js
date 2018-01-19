import React, { Component } from 'react';
import ArrTable from '../components/arrTable'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getTabelNum} from '../store/actions'
import { matchPath } from 'react-router'

const matchs = matchPath('/game/:level', {
  path: '/users/:id',
  exact: true,
  strict: false
})

const location = {
  pathname: '/login',
  state: { oo: 'heoolo'}
}

class Game extends Component {
  state = {
    objkey: 'hello',
    objkey1: 'helaslo'
  }

  confirm () {
    // console.log(this.props.num)
    // let num = console.log(this.props.num)
    // let { history, location, match } = this.props
    // console.log(location)
    // console.log(history)
    // console.log(match, 'match')
    // console.log(matchs, 'matchs')
    // history.push('/login', {})
    this.props.history.push(location)
  }
  clear () {
    this.props.getTabelNum({})
  }
  goBack () {
    this.props.history.goBack()
  }
  render() {
    const { match } = this.props
    console.log(match.params)
    return (
      <div>
        <h3><button onClick={() => this.goBack()}>返回</button>{match.params.level} game</h3>
        <div>XYZ123</div>
        <div>
          <span>ABCabc</span>
          <ArrTable />
        </div>

        <button onClick={() => this.confirm()}>确认</button>
        <button onClick={() => this.clear()}>重置</button>

      </div>
    );
  }
}

// export default One;

export default connect(
  state => ({
    num: state.table.num
  }),
  dispatch => bindActionCreators({
    getTabelNum
  }, dispatch)
)(Game)
