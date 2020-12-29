<template>
	<view> 
		<view class="flex justify-between align-center p-2">
			<my-icon class="icon" iconName="icon-sousuo" iconSize="26" iconColor="text-muted"></my-icon>
			<input type="text" placeholder="搜索糗事" />
			<text @click="hui">取消</text>
		</view>
	
	</view>
</template>

<script>
	export default {
		data(){
			return {}
		},
		methods:{
			hui(){
				uni.navigateBack({
					delta:1
				})
			}
			
		}
	}
</script>

<style>
	.icon {
		position: absolute;
		left: 40rpx;
	}
	input {
		width: 88%;
		height: 60rpx;
		border-radius: 20rpx;
		background-color: #eee;
		text-indent: 60rpx;
		font-size: 24rpx;
	}
</style>
