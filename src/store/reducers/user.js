import {user} from '../constants'
const initState = {}
export default function isLogin(state = initState,action){
  
  console.log(action, 'action')
  switch(action.type){
    case user.LOGIN:
      console.log('LOGIN')
      return {
        ...state,
        auth: action.auth
      }

    case user.LOAD_LOCAL_USERINFO:
      console.log('LOAD_LOCAL_USERINFO')
      return {
        ...state,
        auth: action.auth
      }

    case user.SIGN_OUT:
      console.log('SIGN_OUT')
      return {
        ...state,
        auth: action.auth
      }

    default:
      return {
        ...state
      }
  }
}