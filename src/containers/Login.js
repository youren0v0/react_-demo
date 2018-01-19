/**
 * Created by zhuyue on 18/1/11.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Login extends Component {
  render() {
    const { match, location } = this.props
    console.log(match.params)
    console.log(location)
    return (
      <div>
        <div className="">
          <h2>有个铺子 | 商业街端</h2>
          <h3>由专业的商铺运营团队，精心打造的商户端平台，为你的生意助力！<br/>
            精准的客户定位，客观的数据分析，智能的人流量追踪，我们更专业！
          </h3>
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
  }, dispatch)
)(Login)
