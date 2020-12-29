<template>
	<view>
		<view class="flex justify-between p-1 align-center">
			<my-icon iconName="icon-fanhui" iconSize="50" @my-click="fanhui"></my-icon>
			<text class="font-weight-bold flex-1 pl-2 text-center">设置</text>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		methods:{
			fanhui(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
</style>
