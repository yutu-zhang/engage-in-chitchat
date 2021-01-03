<template>
	<view>
		<view class="flex justify-between align-center p-2">
			<my-icon iconName="icon-qiandao" iconSize="50" iconColor="text-warning"></my-icon>
			<view class="input" @click="search">
				<my-icon iconName="icon-sousuo" iconSize="30" iconColor="text-muted"></my-icon>
				<text class="pl-1">搜索糗事</text>
			</view>
			<my-icon iconName="icon-bianji1" iconSize="50" iconColor="text-dark" @my-click="jumpBian"></my-icon>
		</view>
		
	</view>
</template>

<script>
	const token = uni.getStorageSync('token')
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			search(){
				uni.navigateTo({
					url:"/pages/search/search",
				})
			},
			jumpBian(){
				if(token!=''){
				// console.log('123')
				uni.navigateTo({
					url:"/pages/add-input/add-input"
				})
				}
			}
		}
	}
</script>

<style scoped>
	.input {
			background-color: #efefef;
			width: 80%;
			height: 66rpx;
			border-radius: 30rpx;
			text-align: center;
			font-size: 26rpx;
			line-height: 66rpx;
			color: #a1aaaa;
		}
	
</style>
