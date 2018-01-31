import * as action from '../constants'
import axios from 'axios'
import qs from 'qs'

export function notificationList(notificationList) {
  console.log('action')
  return {
    type: action.notification.NOTIFICATION_LIST,
    notificationList
  }
}
export function getNotificationList(data) {
  console.log('notificationList1')
  return function (dispatch) {
    data = qs.stringify(data)
    console.log(data)
    axios.post('/ControlStation/notificationList', data).then(function (response) {
      var result = response.data
      if (result.code === 200) {
        console.log('notificationList2')
        dispatch(notificationList(result.data))
      }
    }, function (response) {
      console.log('网络错误, 请稍后重试')
    })
  }
}

export function notificationDetail(notificationDetail) {
  console.log('action')
  return {
    type: action.notification.NOTIFICATION_DETAIL,
    notificationDetail
  }
}
export function getNotificationDetail(data) {
  console.log('notificationDetail')
  return function (dispatch) {
    data = qs.stringify(data)
    console.log(data)
    axios.post('/ControlStation/notificationDetail', data).then(function (response) {
      var result = response.data
      if (result.code === 200) {
        console.log('notificationDetail')
        dispatch(notificationDetail(result.data))
      }
    }, function (response) {
      console.log('网络错误, 请稍后重试')
    })
  }
}