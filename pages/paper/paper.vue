<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>
		
		<my-top-nav></my-top-nav>
		<view class="tsImg" v-if="menuList==''">
			<image src="../../static/common/nothing.png" mode="aspectFill" lazy-load></image>
			<text>什么都没有</text>
		</view>
	</view>
</template>

<script>
	const token = uni.getStorageSync('token')
	import myTopNav from '../../components/paper/topNav.vue'
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	
	export default {
		data(){
			return {
				statusBarHeight : statusBarHeight,
				menuList:[]
			}
		},
		components:{myTopNav}
	}
	
</script>

<style scoped>
	.tsImg {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 100rpx;
		
	}
	.tsImg image{
		width: 300rpx;
		height: 300rpx;
		border: 1rpx solid #eee;
		margin-bottom: 20rpx;
	}
</style>
