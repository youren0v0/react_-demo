/**
 * Created by zhuyue on 17/12/26.
 */
import {notification} from '../constants'

const initState = {}

export default function getTable(state = initState,action){
  switch(action.type){
    case notification.NOTIFICATION_LIST:
      console.log(action.notificationList, 'action.notificationList')
      let totalItems = state.totalItems
      if (action.notificationList.hasOwnProperty('TotalItems')) {
        totalItems = action.notificationList.TotalItems
      }
      return {
        ...state,
        notifyList: action.notificationList.notifyList,
        totalItems
      }

    case notification.NOTIFICATION_DETAIL:
      console.log(action.notificationDetail, 'action.notificationList')
      return {
        ...state,
        notificationDetail: action.notificationDetail
      }

    default:
      return state
  }
}