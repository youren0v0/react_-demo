import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Pagination } from 'antd';
import {getNotificationList, getNotificationDetail} from '../store/action/notification'

class Notification extends Component {
  goDetail (id) {
    console.log(id, 'id')
    let data = {
      NotificationId: id
    }
    this.props.getNotificationDetail(data)
  }
  changePage (current, pageSize) {
    console.log(current, pageSize)
    let data = {
      PageSize: pageSize+'',
      PageNumber: current+''
    }
    this.props.getNotificationList(data)
  }

  componentWillMount () {
    let data = {
      PageSize: '5',
      PageNumber: '0'
    }
    this.props.getNotificationList(data)
  }

  render() {
    const { match, location } = this.props
    console.log(match.params)
    console.log(location)
    console.log(this.props, 'props~~~~~~~~~~')
    let notificationListArr = []
    if (this.props.notifyList) {

      for (let i = 0; i<this.props.notifyList.length; i++) {
        notificationListArr.push(
          <li key = {i}>
            <span>【系统更新】</span>
            <span>{this.props.notifyList[i]['Title']}</span>
            <span>{this.props.notifyList[i]['CrtDt']}</span>
            <span onClick={() => this.goDetail(this.props.notifyList[i]['NotificationId'])}>查看详情NotificationId</span>
          </li>
        )
      }
    }
    console.log(notificationListArr, 'notificationListArr')
    return (
      <div>
        <ul>
          <li>重要通知</li>
          {notificationListArr}
        </ul>
        <Pagination  defaultCurrent={1} total={this.props.totalItems ? parseFloat(this.props.totalItems) : 0} pageSize={5} onChange={(current, pageSize) => this.changePage(current, pageSize)}/>
      </div>
    );
  }
}

export default connect(
  state => ({
    notifyList: state.notification.notifyList,
    totalItems: state.notification.totalItems
  }),
  dispatch => bindActionCreators({
    getNotificationList,
    getNotificationDetail
  }, dispatch)
)(Notification)
