
// 首页
import request from '@/utils/request'

// 登录
export const Login = (data?: any) =>
  request({        
    url: '/auth/oauth/token',
    method: 'post',
    data: {
      ...data,
      contentType: '_forndata',
      loginT: 'login'
    }
  })
export const NoticesNum = (data?: any) =>
  request({        
    url: '/scrm/notices/num',
    method: 'post',
    data: data || {}
  })