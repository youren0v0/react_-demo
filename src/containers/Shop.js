import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Shop extends Component {
  render() {
    const { match, location } = this.props
    console.log(match.params)
    console.log(location)
    return (
      <div>
        Shop
      </div>
    );
  }
}

export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(Shop)
