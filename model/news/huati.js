import request from '../../utils/request.js'
// 导航
export function getAttenNav(){
	return request({
		url:`/topicclass`,
		method:'GET',
	})
}
// 最近更新
export function getHottopPic(){
	return request({
		url:`/hottopic`,
		method:'GET',
	})
}
// 内容
export function getAttenCon(id,page){
	return request({
		url:`/topicclass/${id}/topic/${page}`,
		method:'GET',
	})
}
// 话题详情内的评论
export function getDetailComment(id=1,page=1){
	return request({
		url:`/topic/${id}/post/${page}`,
		method:'GET',
	})
}