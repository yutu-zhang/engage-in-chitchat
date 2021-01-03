<template>
	<view>
		<view class="img" v-if="guanList.length==0">
			<image src="../../static/common/nothing.png" mode="scaleToFill" lazy-load></image>
		</view>
	</view>
</template>

<script>
	
	export default {
		data(){
			return {
				guanList:[]
			}
		}
	}
	
	
</script>

<style scoped>
	.img {
	display: flex;
	justify-content: center; 
	}
	.img image {
		margin-top: 40rpx;
		width: 400rpx;
		height: 350rpx;
		padding: 20rpx;
	}
	
</style>
