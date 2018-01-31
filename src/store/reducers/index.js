import user from './user'
import notification from './notification'
import { combineReducers } from 'redux'
export default combineReducers({
  user,
  notification
})