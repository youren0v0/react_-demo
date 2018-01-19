import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Contract extends Component {
  render() {
    const { match, location } = this.props
    console.log(match.params)
    console.log(location)
    return (
      <div>
        Contract
      </div>
    );
  }
}

export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(Contract)
