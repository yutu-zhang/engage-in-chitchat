<template>
	<view>
		<view class="py-3 px-2 flex justify-between">
			<view>
				<my-icon iconName="icon-fanhui" @my-click="fanhui"></my-icon>
			</view>
			<view class="flex-1 flex justify-center">
				<text>所有人可见</text>
				<my-icon iconName="icon-shezhi"></my-icon>
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
	export default {
		
		
		methods:{
			fanhui(){
				console.log('1234')
				uni.switchTab({
				    url: '/pages/news/news'
				});
			}
		}
	}
</script>

<style>
</style>
