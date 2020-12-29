import request from "../utils/request.js"
export default {
	// 获取文章所有分类 主页导航
	getIndexTopNav(){
		return request({
			url: '/postclass',
			methods:"GET"
		});
	},
	getConentList(id,page){
		return request({
			url:`/postclass/${id}/post/${page}`,
			methods:'GET'
		});
	}
	
}