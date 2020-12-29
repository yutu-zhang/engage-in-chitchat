<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>


		<my-top-nav :activeIndex="activeIndex" :navList="navList"></my-top-nav>
		
		
		
	</view>
</template>

<script>
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	import myTopNav from '../../components/news/topNav.vue'
	export default {
		components:{myTopNav},
		data(){
			return {
				statusBarHeight : statusBarHeight,
				activeIndex:0,
				navList:['关注','话题']
			}
		},
		onLoad(){
			
			
		},
		
	}
</script>

<style scoped>
	
</style>
