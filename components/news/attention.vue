<template>
	<view>
		<scroll-view scroll-y="true" :style="{height:`${calHeight}rpx`}">
			<!-- 热门分类 -->
				<view>
					<view class="flex justify-between align-center p-2" @click="hotFenlei">
						<text>热门分类</text>
						<view style="font-size: 30rpx; color: #aaa;">
							<text>更多</text>
							<my-icon iconName="icon-jinru" iconSize="30" iconColor="text-light-black"></my-icon>
						</view>
					</view>
					<view class="flex justify-between p-1 my-2">
						<view v-for="item in navlist" :key="item.id">
							<text class="hotnav" @click="hotFenlei">{{item.classname}}</text>
						</view>
					</view>
				</view>
				<!-- 搜索 -->
				<view class="p-2 searchView">
					<my-icon iconName="icon-sousuo" iconSize="34"></my-icon>
					<input type="text" placeholder="搜索话题" />
				</view>
				<!-- 轮播 -->
				<view class="bannerView p-1">
					<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
						<swiper-item>
							<image src="../../static/demo/banner1.jpg" mode="aspectFill" lazy-load></image>
						</swiper-item>
						<swiper-item>
							<image src="../../static/demo/banner2.jpg" mode="aspectFill" lazy-load></image>
						</swiper-item>
						<swiper-item>
							<image src="../../static/demo/banner3.jpg" mode="aspectFill" lazy-load></image>
						</swiper-item>
					</swiper>
				</view>
				<view class="line mt-3"></view>
				<!-- 最近更新 -->
				<view class="px-2 updataView">
					<view class="py-2">最近更新</view>
					<view class="py-2 flex" v-for="item in hotPicList" :key="item.id" @click="jumpDetailPic(item.id)">
						<image :src="item.titlepic" mode="aspectFill" lazy-load></image>
						<view class="flex-1 pl-2 flex flex-column justify-between">
							<view>#{{item.title}}#</view>
							<view style="font-size:26rpx; color:#6c757d;">{{item.desc}}</view>
							<view style="font-size:26rpx; color:#6c757d;">
								<text>动态：{{item.post_count}}</text>
								<text>今日：{{item.todaypost_count}}</text>
							</view>
						</view>
					</view>
				</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import {getAttenNav,getHottopPic} from '../../model/news/huati.js'
	export default {
		props:{
			calHeight:Number
		},
		data() {
			return {
				navlist: [],
				hotPicList:[],
			}
		},
		mounted() {
			this.getHotSort()
			this.getHottopPicData()
		},
		methods: {
			async getHotSort(){
				let {data} = await getAttenNav()
				this.navlist = data.data.list
			},
			async getHottopPicData(){
				let {data} = await getHottopPic()
				this.hotPicList = data.data.list
			},
			// 热门分类页面跳转
			hotFenlei(){
				console.log('123123')
				uni.navigateTo({
					url:"../../pages/topic-nav/topic-nav"
				})
			},
			// 跳转图片话题详情页面
			jumpDetailPic(id){
				uni.redirectTo({
					url:`/pages/topic-detail/topic-detail?id=${id}`
				})
			}
		},
	}
</script>

<style scoped>
	.searchView {
		border-top: 2rpx solid #eee;
		position: relative;
	}
	.searchView text {
		position: absolute;
		left: 35%;
		top: 55rpx;
	}
	.searchView input {
		width: 100%;
		height: 90rpx;
		color: #6c757d;
		background-color: #f8f9fa;
		padding: 10rpx 0;
		font-size: 30rpx;
		text-align: center;
	}
	.hotnav {
		padding: 8rpx 16rpx;
		border: 2rpx solid #dee2e6;
		border-radius: 12rpx;
		background: #f8f9fa;
		font-size: 28rpx;
	}
	.bannerView {
		height:300rpx;
	}
	.bannerView image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}
	.line {
		height: 14rpx;
		background-color: #f8f9fa;
	}
	/* 最近更新 */
	.updataView image{
		width: 150rpx;
		height: 150rpx;
		border-radius: 10rpx;
	}
</style>
