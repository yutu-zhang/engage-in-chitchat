<template>
<view>
	<view :style="{height : `${statusBarHeight}px`}"></view>
	
	<view class="flex justify-between align-center">
		<my-icon iconName="icon-fanhui" @my-click="fanhui"></my-icon>
		<text class="flex-1 text-center">1332342112</text>
		<my-icon iconName="icon-gengduo"></my-icon>
	</view>
	
</view>
</template>

<script>
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	
	export default {
		data(){
			return {
				statusBarHeight : statusBarHeight,
			}
		},
		methods:{
			fanhui(){
				uni.switchTab({
					url:'../index/index'
				})
			}
		}
	}
	
</script>

<style>
</style>
