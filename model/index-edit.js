import request from '../utils/request.js'

// 选择分类
export function getIndexTopNav(){
	return request({
		url: '/topicclass',
		method:"GET"
	})
}

// 选择话题
export function getIndexTopNav(){
	return request({
		url: '/topicclass/1/topic/1',
		method:"GET"
	})
}

// 图片上传
export function getIndexTopNav(){
	return request({
		url: '/image/uploadmore',
		method:"POST"
	})
}

// 文章上传
export function getIndexTopNav(){
	return request({
		url: '/post/create',
		method:"POST"
	})
}
