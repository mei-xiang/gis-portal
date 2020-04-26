/**
 * 用于请求的相关配置，返回的是axios对象
 */
import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://192.168.44.152:8080'
  })

  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err)
    }
  )

  instance.interceptors.response.use(
    res => {
      // console.log(res)
      return res.data
    },
    err => {
      console.log(err)
    }
  )

  // instance是一个promise对象
  return instance(config)
}
