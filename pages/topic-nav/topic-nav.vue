<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>
		
		
		<view class="flex justify-between align-center text-center px-2 cal">
			<my-icon iconName="icon-fanhui" @my-click="fanhui"></my-icon>
			<view class="flex-1">话题分类</view>
		</view>
		<!-- 导航 -->
		<view class="cal">
			<scroll-view scroll-x="true">
				<view class="flex justify-between p-2 align-center border-bottom">
					<view v-for="(item,index) in navList" @click="navTap(item,index)" :key="item.id">
						<text :class="{'navActive':navIndex==index}">{{item.classname}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 内容 -->
		<view class="p-2 contentView" >
			<swiper :current="navIndex" @change="tabChange" :style="{height:`${calHeight}rpx`}">
				<swiper-item v-for="(i,ii) in 6" :key="ii">
					<scroll-view scroll-y="true" :style="{height:`${calHeight}rpx`}">
						<view>
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
							<view v-if="hotPicList.length==0" class="nullimage">
								<image src="../../static/common/nothing.png" mode="aspectFill" lazy-load></image>
								<text>什么都没有</text>
							</view>
						</view>
					</scroll-view>
					
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import $U from '../../utils/unit.js'
	import {getAttenNav,getAttenCon} from '../../model/news/huati.js'
	
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default{
		data(){
			return {
				statusBarHeight : statusBarHeight,
				calHeight:0,
				navList:[],
				hotPicList:[],
				navIndex:0,
				page:1,
				id:1
			}
		},
		methods:{
			fanhui(){
				uni.switchTab({
					url:'/pages/news/news'
				})
			},
			navTap(item,index){
				this.id = item.id
				this.navIndex = index
			},
			tabChange(e){
				this.navIndex = e.detail.current
				this.id = e.detail.current+1*1
				this.getAttenConData()
			},
			async getHotSort(){
				let {data} = await getAttenNav()
				this.navList = data.data.list
			},
			async getAttenConData(){
				let {data} = await getAttenCon(this.id,this.page)
				this.hotPicList = data.data.list
			},
			// 跳转图片话题详情页面
			jumpDetailPic(id){
				uni.redirectTo({
					url:`/pages/topic-detail/topic-detail?id=${id}`
				})
			}
			
			
		},
		mounted(){
			$U.calSurplusHeight({
				pageID:this,
				pos:'cal',
				success:(res)=>{
					this.calHeight = res
				}
			})
			this.getHotSort()
			this.getAttenConData()
		}
		
	}
</script>

<style scoped>
	.navActive{
		color: #DD4A68;
		font-weight: 600;
		font-size: 32rpx;
	}
	.contentView image{
		width: 150rpx;
		height: 150rpx;
		border-radius: 10rpx;
	}
	.nullimage {
		height: 410rpx;
		padding-top: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.nullimage image {
		width: 300rpx;
		height: 300rpx;
	}
</style>
