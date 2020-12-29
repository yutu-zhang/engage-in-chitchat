<template>
	<view>
		<view class="tz flex justify-between py-2 px-4 text-center">
			<view>
				<view>1</view>
				<view>帖子</view>
			</view>
			<view>
				<view>1</view>
				<view>动态</view>
			</view>
			<view>
				<view>2</view>
				<view>评论</view>
			</view>
			<view>
				<view>0</view>
				<view>粉丝</view>
			</view>
			
		</view>
	</view>

</template>

<script>
</script>

<style scoped>
	/* 帖子 */
	.tz>view {
		padding: 0 40rpx;
	}
	.tz>view>view:nth-child(1){
		font-size: 36rpx;
		font-weight: 550;
	}
	
</style>
