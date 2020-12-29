import request from "../utils/request.js"


// 昵称邮箱手机号
export function getUserLogin(username,password){
	return request({
		url: '/user/login',
		method:'POST',
		data:{
			username,password
		}
	})
}
// 手机验证码
export function getPhoneCode(phone,code){
	return request({
		url: '/user/phonelogin',
		method:'POST',
		data:{
			phone,code
		}
	})
}
// 发送验证码
export function sendPhoneCode(phone){
	return request({
		url: '/user/sendcode',
		method:'POST',
		data:{
			phone
		}
	})
}