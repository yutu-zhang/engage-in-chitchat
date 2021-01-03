import request from '../utils/request.js'

export function getUserAttention(page){
	return request({
		url:`/followpost/${page}`,
		method:'GET',
	})
}