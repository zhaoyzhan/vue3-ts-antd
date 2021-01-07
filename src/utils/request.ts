import axios from 'axios'
import { setContentType, setFormatData } from './reqSetting'

const service = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000
})
// Request interceptors
service.interceptors.request.use(
  (config: any) => {

    // 设置请求头
    config.headers['Content-Type'] = setContentType(config.data['contentType']);
    config.headers['platform'] = 3;

    if (config.data['contentType']) {
      delete config.data['contentType'];
    }
 
    config.headers['Authorization'] = 'Basic MTAwNDoxMjM0NTY=';

    if(config.data['noToken']) {
      delete config.data['noToken'];
    }

    // 参数处理
    const { headers, data } = config;
    config.data = setFormatData(headers['Content-Type'], data);
    return config;
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    // Some example codes here:
    // code == 200: success
    // code == 2516: token失效或者没有token
    const res = response.data
    return res;
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default service
