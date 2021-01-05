<template>
<view>
	<view :style="{height : `${statusBarHeight}px`}"></view>
	<view class="position-relative">
		<!-- <view class="topview flex justify-between p-1 position-absolute top-0 left-0 right-0">
			<view><my-icon iconName="icon-fanhui" iconSize="54" iconColor="text-white" @my-click="fanhui"></my-icon></view>
			<view><my-icon iconName="icon-gengduo1" iconColor="text-white"></my-icon></view>
		</view> -->
		<view class="topview flex justify-between p-1 position-absolute top-0 left-0 right-0">
			<my-icon iconName="icon-fanhui" iconSize="54" iconColor="text-white" @my-click="fanhui"></my-icon>
			<my-icon iconName="icon-gengduo1" iconColor="text-white"></my-icon>
		</view>
		<view class="bigimg">
			<image :src="userMenu.titlepic" mode="aspectFill" lazy-load></image>
		</view>
		<view class="detilimg pl-2">
			<view>
				<image :src="userMenu.titlepic" mode="aspectFill" lazy-load></image>
				<text class="pl-2">#{{userMenu.title}}#</text>
			</view>
			<view class="text-secondary font-md">
				<text>动态：{{userMenu.post_count}}</text>
				<text class="pl-2">今日：{{userMenu.todaypost_count}}</text>
			</view>
			<view class="text-secondary font-md">{{userMenu.desc}}</view>
		</view>
		<view class="xrbd">
			<view class="p-2 flex align-center border-bottom">
				<my-icon iconName="icon-xihuan" iconColor="text-pink"></my-icon>
				<text>【新人必读】uni-app实战第二季商城类项目开发</text>
			</view>
			<view class="p-2 flex align-center">
				<my-icon iconName="icon-xihuan" iconColor="text-pink"></my-icon>
				<text>【新人必读】uni-app实战第三季仿微信项目开发</text>
			</view>
		</view>
		<!-- 默认最新评论 -->
		<my-detail-comment></my-detail-comment>
	</view>
	
</view>
</template>

<script>
	import {getHottopPic} from '../../model/news/huati.js'
	import myDetailComment from '../../components/news/detailComment.vue'
	export default { 
		components:{myDetailComment},
		data(){
			return {
				statusBarHeight : this.$statusBarHeight,
				userId:0,
				userMenu:null
			}
		},
		onLoad(event) {
			this.userId = event.id
		},
		methods:{
			fanhui(){
				uni.switchTab({
					url:"/pages/news/news"
				})
			},
			// 获取话题的内容
			async getHottopPicData(){
				let {data} = await getHottopPic()
				const list = data.data.list
				this.userMenu = list[this.userId-1]
				console.log(this.userMenu)
				
			},
			
		},
		mounted() {
			this.getHottopPicData()
		}
	}
</script>

<style scoped>
	.topview {
		z-index: 999;
		height: 64rpx;
	}
	.topview>view {
		width: 64rpx;
		height: 64rpx;
		line-height: 64rpx;
		text-align: center;
		border-radius: 50%;
		background-color: rgba(0,0,0,.5);
	}
	.topview>view text {
		background-color: rgba(0,0,0,.5);
	}
	.bigimg {
		width: 100%;
		height: 304rpx;
	}
	.bigimg image{
		width: 100%;
		height: 100%;
	}
	.detilimg{
		line-height: 54rpx;
	}
	.detilimg image {
		width: 154rpx;
		height: 154rpx;
		border-radius: 12rpx;
	}
	.detilimg>view:nth-child(1){
		margin-top: -74rpx;
	}
	/*  */
	.xrbd {
		font-size: 30rpx;
		margin-top: 20rpx;
		padding: 10rpx 0;
		border-top:14rpx solid rgb(245, 245, 244);
		border-bottom:14rpx solid rgb(245, 245, 244);
	}
</style>
