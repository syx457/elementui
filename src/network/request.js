import axios from 'axios'

//创建实例
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
    console.log(config)
  }, error => {
    console.log(error)
  })

  instance.interceptors.response.use(res => {
    return res.data
    console.log(res);
  }, error => {
    console.log(error)
  })
  return instance(config)
}