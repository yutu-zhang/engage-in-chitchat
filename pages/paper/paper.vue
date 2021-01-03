<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>
		
		<my-top-nav></my-top-nav>
	</view>
</template>

<script>
	import myTopNav from '../../components/paper/topNav.vue'
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	
	export default {
		data(){
			return {
				statusBarHeight : statusBarHeight,
			}
		},
		components:{myTopNav}
	}
	
</script>

<style>
</style>
