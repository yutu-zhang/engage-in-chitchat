<template>

	<view>
		<view class="his px-2 pt-4">
			<view>
				<my-icon iconName="icon-liulan"></my-icon>
				<text>浏览历史</text>
				<my-icon iconName="icon-jinru"></my-icon>
			</view>
			<view>
				<my-icon iconName="icon-huiyuanvip"></my-icon>
				<text>社区认证</text>
				<my-icon iconName="icon-jinru"></my-icon>
			</view>
			<view>
				<my-icon iconName="icon-keyboard"></my-icon>
				<text>审核帖子</text>
				<my-icon iconName="icon-jinru"></my-icon>
			</view>
		</view>
	</view>


</template>

<script>
</script>

<style scoped>
	/* 浏览历史 */
	.his>view {
		line-height: 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.his>view>text:nth-child(2) {
		flex: 1;
		padding-left: 10rpx;
	}
	
</style>
