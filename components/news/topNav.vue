<template>
		<view class="flex justify-between align-center p-2">
			<view class="flex-1 flex justify-center">
				<view :class="activeIndex ===index?'topactive':''" v-for="(item,index) in navList" :key="index">
					<text class="px-2">{{item}}</text>
				</view>
				
			</view>
			<view>
				<my-icon iconName="icon-bianji1" @my-click="jumpBianji"></my-icon>
			</view>
		</view>

</template>

<script>
	export default {
		props:{
			activeIndex:Number,
			navList:Array
		},
		methods:{
			jumpBianji(){
				uni.navigateTo({
					url:'/pages/news-editor/editor',
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style scoped>
	.topactive {
		color: #FB5A7C;
		font-size: 34rpx;
		font-weight: 550;
	}
</style>
