// import config from './config.js'

import uniRequest from 'uni-request';

uniRequest.defaults.baseURL = '/api';

// 请求拦截
uniRequest.interceptors.request.use(
	request => {
		//配置基本信息	
		return request;
	},
	err => {
		console.log('请求失败');
		return Promise.reject(err);
	});

// 响应拦截
uniRequest.interceptors.response.use(function(response) {
	console.log('返回进入拦截成功')
	return Promise.resolve(response);
}, function(error) {
	console.log('返回进入拦截失败')
	return Promise.reject(error);
});
export default uniRequest