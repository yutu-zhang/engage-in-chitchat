<template>
<view>
	
	<view class="flex justify-between px-2">
		<my-icon iconName="icon-fanhui" class="pr-5" @my-click="fanhui"></my-icon>
		<view class="flex-1 text-center siZe">{{userMenu.title}}</view>
		<my-icon iconName="icon-gengduo1" class="pl-5" iconColor="text-dark"></my-icon>
	</view>
	
	
</view>
</template>

<script>
	export default {
		props:{
			userMenu:Object
		},
		methods:{
			fanhui(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style scoped>
	.siZe {
		font-weight: bold;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
