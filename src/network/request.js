/**
 * 用于请求的相关配置，返回的是axios对象
 */
import axios from 'axios'
import { BASEURL } from 'common/const'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: BASEURL
  })

  instance.interceptors.request.use(
    config => {
      return config
    }
  )

  instance.interceptors.response.use(
    res => {
      return res.data
    }
  )

  // instance是一个promise对象
  return instance(config)
}
