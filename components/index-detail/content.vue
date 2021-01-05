<template>
	<view class="pt-2 px-2">
		<view class="flex justify-between align-center py-2 userImg">
			<image :src="userMenu.titlepic" mode=""></image>
			<view class="flex-1 flex flex-column pl-2">
				<text>{{userMenu.user.username}}</text>
				<text class="text-light-black font-small pt-2">{{userMenu.create_time |timeFilter}}</text>
			</view>
			<view class="guanzhu">关注</view>
		</view>
		<view class="py-2">{{userMenu.content}}</view>
		<view class="imageS">
			<view v-for="(itemimg,indeximg) in userMenu.images" :key="indeximg" class="mt-2">
				<image :src="itemimg.url" mode="aspectFill" lazy-load></image>
			</view>
		</view>
		<!--  -->
		<view class="flex py-3 justify-between align-center px-2">
			<view >
				<my-icon iconName="icon-dianzan" iconSize="44"></my-icon>
				<text v-if="detail.ding_count===0">支持</text>
				<text v-else> {{detail.ding_count}}</text>
			</view>
			<view>
				<my-icon iconName="icon-ccdbaa" iconSize="44"></my-icon>
				<text v-if="detail.cai_count===0">踩 </text>
				<text v-else> {{detail.cai_count}}</text>
			</view>
			<view>
				<my-icon iconName="icon-pinglun" iconSize="44"></my-icon>
				<text v-if="detail.comment_count===0">评论</text>
				<text v-else> {{detail.comment_count}}</text>
			</view>
			<view>
				<my-icon iconName="icon-fenxiang" iconSize="44"></my-icon>
				<text>分享</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			userMenu:Object,
			detail:Object
		},
		filters: {
		   // 时间过滤
		   timeFilter: (val)=> {
			let hhour = ''
			let time = new Date(val * 1000)
			let year = time.getFullYear()
			let month = time.getMonth()+1
			if(month < 10) {
			 month = '0' + month;
			}
			let day = time.getDate()
			if(day < 10) {
			 day = '0' + day;
			}
			let hour = time.getHours()
			if(hour <= 12) {
			 hhour = '上午';
			}else {
			 hour = hour - 12
			 hhour = '下午'
			}
			let minute = time.getMinutes()
			if(minute < 10) {
			 minute = '0' + minute;
			}
			return `${year}-${month}-${day} ${hhour} ${hour}:${minute}`
		   }
		  },
		
	}
</script>

<style scoped>
	.userImg image {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
	}

	.guanzhu {
		width: 90rpx;
		height: 50rpx;
		font-size: 28rpx;
		line-height: 50rpx;
		text-align: center;
		border-radius: 8rpx;
		color: #fff;
		background-color: #ff4a6a !important;
	}

	.imageS image {
		width: 100%;
		max-height: 712rpx;
		border: 1rpx solid #eee;
	}
</style>
