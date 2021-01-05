<template>
<view>
	<view :style="{height : `${statusBarHeight}px`}" class="cal"></view>
	<my-detail-top :userMenu="userMenu" class="cal"></my-detail-top>
	
	<my-detail-content :detail="detail" :userMenu="userMenu" class="cal"></my-detail-content>
	
	<!-- xian -->
	<view class="xian"></view>
	
	<!-- 最新评论 -->
	<view class="px-2">
		<view class="h4 font-weight-bold py-2">最新评论 ：<text> {{ commentList.length}}</text></view>
		<view class="px-2">
			<view v-for="(item,index) in commentList" :key="index" class="flex py-2">
				<view v-if="item.user.userpic==null" class="img">
					<image src="../../static/bgimg/2.jpg" mode="heightFix" lazy-load></image>
				</view>
				<view class="img" v-else><image :src="item.user.userpic" mode="aspectFill" lazy-load></image></view>
				<view class="flex flex-column pl-2 pllist">
					<text>{{item.user.username}}</text>
					<text>{{item.data}}</text>
					<text>{{item.create_time |timeFilter}}</text>
				</view>
			</view>
			<view style="height: 100rpx;"></view>
		</view>
		<view class="fixed-bottom flex align-center border-top bg-white px-3 btFu">
			<input type="text" placeholder="文明发言" v-model="commentdata"/>
			<my-icon iconName="icon-fabu" class="pl-3" @my-click="clickSent"></my-icon>
		</view>
	</view>
	
	
	
</view>
</template>

<script>
	import $U from '../../utils/unit.js'
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	import {getUserIds,getComment,sendComment,dingCai} from "../../model/index-detail.js"
	import myDetailTop from '../../components/index-detail/top.vue'
	import myDetailContent from '../../components/index-detail/content.vue'
	export default {
		components:{myDetailTop,myDetailContent},
		data(){
			return {
				statusBarHeight : statusBarHeight,
				userId:0,
				userMenu:null,
				title:"",
				calHeight:0,
				detail:null,
				commentList:[],
				commentdata:"", // 评论input
				fid:0,
				post_id:601,
				type:0
			}
		},
		onLoad(e) {
			this.userId =e.id 
			console.log(e)
			this.detail = JSON.parse(e.detail)
			console.log(this.detail)
		},
		methods:{
			fanhui(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			async getUser(){
				let {data} = await getUserIds(this.userId)
				this.userMenu = data.data.detail
				// console.log(this.userMenu)
				this.title = data.data.detail.title
			},
			async getCommentData(){
				let {data:res} = await getComment(this.userId)
				console.log(res)
				this.commentList = res.data.list
			},
			// 发送评论
			async clickSent(){
				if(this.commentdata==""){
					uni.showToast({
					    title: '消息不能为空',
					    duration: 2000,
						icon:"none"
					});
				}else {
					let {data} = await sendComment(this.commentdata,this.fid,this.post_id)
					console.log(data)
					// uni.showToast({
					// 	title:'加载中',
					// 	icon:"loading"
					// })
					let {data:res} = await getComment(this.userId)
					console.log(res)
					this.commentList = res.data.list
					uni.showToast({
					    title: '评论成功',
					});
					this.commentdata=""
				}
			},
			// 顶踩
			async dingcai(){
				let {data} = await dingCai(this.type,this.userId)
				console.log(data)
			}
		},
		onShow() {
			this.getCommentData()
		},
		mounted() {
			$U.calSurplusHeight({
				pageID:this,
				pos:'cal',
				success:(res)=>{
					this.calHeight = res
				}
			})
			this.getUser()
			this.getCommentData()
		},
		filters: {
			   // 时间过滤
			   timeFilter: (val)=> {
			    let hhour = ''
			    let time = new Date(val * 1000)
			    let year = time.getFullYear()
			    let month = time.getMonth()+1
			    if(month < 10) {
			     month = '0' + month;
			    }
			    let day = time.getDate()
			    if(day < 10) {
			     day = '0' + day;
			    }
			    let hour = time.getHours()
			    if(hour <= 12) {
			     hhour = '上午';
			    }else {
			     hour = hour - 12
			     hhour = '下午'
			    }
			    let minute = time.getMinutes()
			    if(minute < 10) {
			     minute = '0' + minute;
			    }
			    return `${year}-${month}-${day} ${hhour} ${hour}:${minute}`
			   }
			  },
		
	}
</script>

<style scoped>
	.img image{
		width: 70rpx;
		height: 70rpx;
		border-radius: 100%;
	}
	.pllist {
		line-height: 38rpx;
		font-size: 24rpx;
	}
	.pllist text:nth-child(1){
		color: #0a98d5;
	}
	.pllist text:nth-child(2){
		font-size: 28rpx;
		padding: 10rpx 4rpx;
	}
	.pllist text:nth-child(3){
		color: #666;
	}
	.btFu {
		height: 100rpx;
	}
	.btFu input {
		flex: 1;
		height: 45rpx;
		background-color: #eee;
	}
</style>
