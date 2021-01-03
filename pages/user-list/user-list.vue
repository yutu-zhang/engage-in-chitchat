<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<!-- 搜索用户 -->
		<view class="p-2 flex justify-between align-center cal">
			<my-icon iconName="icon-fanhui" @my-click="fanhui"></my-icon>
			<view class="flex-1 position-relative inputs mx-5">
				<my-icon iconName="icon-sousuo" iconSize="32" class="position-absolute" style="top:13rpx;left:32%"></my-icon>
				<input type="text" placeholder="搜索用户" />
			</view>
			<view @click="fanhui">取消</view>
		</view>
	
		<!-- nav -->
		<view class="p-2 flex justify-between text-center cal">
			<view class="flex-1" @click="navTap(ix)" v-for="(it,ix) in navList" :key="ix">
				<text :class="{'navActive':navIndex==ix}">{{it}}</text>
			</view>
		</view>
		
		<!-- 内容 -->
		<view class="p-2">
			<swiper :current="navIndex" @change="tabChange" :style="{height:`${calHeight}rpx`}">
				<swiper-item v-for="(i,ii) in 3" :key="ii">
					<view class="swiper-item">
						<view class="swipers flex justify-center align-center">
							<image src="../../static/common/nothing.png" mode="widthFix"></image>
						</view>
					</view>
				</swiper-item>
				
			</swiper>
			
		</view>
		
		
	</view>
</template>

<script>
	import mySearch from '../../components/index/search/search.vue'
	
	import $U from '../../utils/unit.js'
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		components: {mySearch},
		data(){
			return {
				statusBarHeight : statusBarHeight,
				navIndex:0,
				calHeight:0,
				navList:['互关','关注','粉丝']
			}
		},
		methods:{
			fanhui(){
				uni.switchTab({
					url:'/pages/paper/paper'
				})
			},
			navTap(ix){
				console.log(ix)
				this.navIndex = ix
			},
			tabChange(e){
				// console.log(e)
				this.navIndex = e.detail.current
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
			}
		
	}
</script>

<style scoped>
	.inputs input{
		height: 60rpx;
		background-color: #ddd;
		border-radius: 10rpx;
		font-size: 26rpx;
		text-align: center;
	}
	.navActive {
		font-weight: 600;
		color: #DD4A68;
	}
	.swipers {
		padding:20rpx;
	}
	.swipers image {
		width: 300rpx;
		height: 300rpx;
		
	}
</style>
