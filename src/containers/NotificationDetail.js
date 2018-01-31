import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class NotificationDetail extends Component {


  render() {
    return (
      <div>
      </div>
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch => bindActionCreators({

  }, dispatch)
)(NotificationDetail)
