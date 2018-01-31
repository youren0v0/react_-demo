import * as action from '../constants'
import axios from 'axios'
import qs from 'qs'
const login = (isAuth) => {
  console.log('action login333333')
  let auth = false
  if (isAuth) {
    auth = isAuth
  }
  return {
    type: action.user.LOGIN,
    auth
  }
}

export const toLogin = (data) => {
  console.log('action login1111111')
  return function (dispatch) {
    let auth = false
    console.log(data)
    axios.post('/UserMerchant/userLogin', data).then(function (response) {
      var result = response.data
      if (result.code === 200) {
        window.localStorage.setItem('yougepuzi_userInfo', JSON.stringify(result.data))
        auth = true
        console.log('登陆成功')
        dispatch(login(auth))
      }
      dispatch(login(auth))
    }, function (response) {
      auth = false
      dispatch(login(auth))
      console.log('网络错误, 请稍后重试')
    })
  }
}

export function loadLocalUserInfo() {
  console.log('action loadLocal')
  let auth = false
  try {
    let userInfo = JSON.parse(window.localStorage.getItem('yougepuzi_userInfo'))
    console.log(userInfo, 'userInfo')
    if (userInfo) {
      auth = true
    }
  } catch (err) {
    window.localStorage.clear()
  }
  return {
    type: action.user.LOAD_LOCAL_USERINFO,
    auth
  }
}

export function signOut() {
  console.log('action loadLocal')
  let auth = false
  window.localStorage.clear()
  return {
    type: action.user.SIGN_OUT,
    auth
  }
}


