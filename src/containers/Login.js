/**
 * Created by zhuyue on 18/1/11.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'
import {toLogin} from '../store/action/user'
import qs from 'qs'
class Login extends Component {
  state = {
    userName: '13333333333',
    password: '123456a'
  }
  inputChange (e, type) {
    this.setState({[type]: e.target.value})
    console.log(e.target.value)
  }
  login () {
    console.log(this.state.userName, 'userName')
    let obj = {
      Mobile: this.state.userName,
      Password: this.state.password
    }
    let data = qs.stringify(obj)
    this.props.toLogin(data)
    console.log('login')
  }
  render() {
    // const { match, location } = this.props
    // console.log(match.params)
    // console.log(location)
    console.log(this.props, 'this.props')
    return (
      <div className="login">
        <h2>有个铺子 | 商业街端</h2>
        <h3>由专业的商铺运营团队，精心打造的商户端平台，为你的生意助力！<br/>
          精准的客户定位，客观的数据分析，智能的人流量追踪，我们更专业！
        </h3>
        <div className="login_box">
          <Input placeholder="用户名" value={this.state.userName} onChange={(e) => this.inputChange(e, 'userName')}/>
          <Input placeholder="密码" type="password" value={this.state.userName} onChange={(e) => this.inputChange(e, 'password')}/>
          <Button onClick={() => this.login()}>登录</Button>
        </div>
      </div>
    );
  }
}

// export default One;

export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
    toLogin,
  }, dispatch)
)(Login)
