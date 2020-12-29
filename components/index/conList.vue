<template>
		<view class="pt-2">
			<view class="conview">
				<view class="flex justify-between">
					<image class="userimg" :src="item.user.userpic" mode="widthFix" lazy-load></image>
					<view class="flex-1 flex flex-column pl-2">
						<text>{{item.user.username}}</text>
						<text class="text-secondary font-smaller pt-1">{{item.create_time}}</text>
					</view>
					<button type="default">关注</button>
				</view>
				<!-- 留言内容 -->
				<view>
					<view>{{item.content}}</view>
					<view v-if="items.titlepic==''"></view>
					<view v-if="items.titlepic!=''"><image :src="items.titlepic" mode="widthFix" lazy-load class="imagesimg"></image></view>
				</view>
				<!-- 赞评论分享 -->
				<view class="flex pt-3 p-2 justify-between">
					<view>
						<my-icon iconName="icon-dianzan" iconSize="44"></my-icon>
						<text v-if="item.ding_count===0"></text>
						<text v-else> {{item.ding_count}}</text>
					</view>
					<view>
						<my-icon iconName="icon-ccdbaa" iconSize="44"></my-icon>
						<text v-if="item.cai_count===0">踩 </text>
						<text v-else> {{item.cai_count}}</text>
					</view>
					<view>
						<my-icon iconName="icon-pinglun" iconSize="44"></my-icon>
						<text v-if="item.comment_count===0"></text>
						<text v-else> {{item.comment_count}}</text>
					</view>
					<view>
						<my-icon iconName="icon-fenxiang" iconSize="44"></my-icon>
						<text>分享</text>
					</view>
				</view>
			</view>
		</view>
		
</template>

<script>
	export default {
		props:{
			// conentList:{
			// 	type:Array,
			// 	default:[]
			// }
			item:Object,
			items:Object,
			index:Number
		},
		onLoad() {
			console.log(item,index)
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.conview {
		padding: 20rpx;
		border-top:18rpx solid #eee;
	}
	.userimg {
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
	.imagesimg{
		width: 100%;
		height: 500rpx;
		padding: 20rpx;
	}
	
</style>
