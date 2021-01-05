import request from "../utils/request.js"
// 获取用户
export function getUserIds(id){
	return request({
		url: `/post/${id}`,
		method:"GET"
	})
}
// 获取文章详情页 评论
export function getComment(id){
	return request({
		url: `/post/${id}/comment`,
		method:"GET"
	})
}

// 发送评论
export function sendComment(data,fid,post_id){
	return request({
		url: `/post/comment`,
		method:"POST",
		data:{
			data,fid,post_id
		}
	})
}

// 顶踩
export function dingCai(type,post_id){
	return request({
		url: `/support`,
		method:"POST",
		data:{
			type,post_id
		}
	})
}
