<template>
	<view>
		<view class="pt-2">
			<view v-for="(t,i) in conentList" :key="i" class="conview">
				<view class="flex justify-between">
					<image :src="t.user.userpic" mode="aspectFill"></image>
					<view class="flex-1 flex flex-column pl-2">
						<text>{{t.user.username}}</text>
						<text class="text-secondary font-smaller pt-1">{{t.create_time}}</text>
					</view>
					<button type="default">关注</button>
				</view>
				<!-- 留言内容 -->
				<view>
					<view>{{t.content}}</view>
					<view v-if="t.images==[]"></view>
					<view v-else><image src="t.images[0].url" mode=""></image></view>
				</view>
				<!-- 赞评论分享 -->
				<view class="flex pt-3 p-2 justify-between">
					<view>
						<my-icon iconName="icon-dianzan" iconSize="44"></my-icon>
						<text v-if="t.ding_count===0"></text>
						<text v-else> {{t.ding_count}}</text>
					</view>
					<view>
						<my-icon iconName="icon-ccdbaa" iconSize="44"></my-icon>
						<text v-if="t.cai_count===0">踩 </text>
						<text v-else> {{t.cai_count}}</text>
					</view>
					<view>
						<my-icon iconName="icon-pinglun" iconSize="44"></my-icon>
						<text v-if="t.comment_count===0"></text>
						<text v-else> {{t.comment_count}}</text>
					</view>
					<view>
						<my-icon iconName="icon-fenxiang" iconSize="44"></my-icon>
						<text>分享</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			conentList:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style scoped>
	.conview {
		padding: 20rpx;
		border-top:18rpx solid #eee;
	}
	image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
	button {
		width: 110rpx;
		height: 50rpx;
		line-height: 50rpx;
		background-color: #fb5a7c;
		color: #fff;
		font-size: 26rpx;
	}
	
</style>
