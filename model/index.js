import request from "../utils/request.js"
// 获取文章所有分类 主页导航
export function getIndexTopNav(){
	return request({
		url: '/postclass',
		method:"GET"
	})
}

export function getConentList(id=1){
	return request({
		url:`/postclass/${id}/post/1`,
		method:'GET',
		// data:{id,page}
	})
}
//  获取文章详情
export function getDetail(id){
	return request({
		url:`/post/${id}`,
		method:'GET'
	})
}