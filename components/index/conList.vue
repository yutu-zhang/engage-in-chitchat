<template>
	<view>
		<scroll-view scroll-y :style="{height:`${calHeight}rpx`}">
			<view class="conview" v-for="(item,index) in conentList" :key="index">
				<view class="flex justify-between">
					<image class="userimg" :src="item.user.userpic" mode="scaleToFill" lazy-load @click="userinfoPage"></image>
					<view class="flex-1 flex flex-column pl-2">
						<text>{{item.user.username}}</text>
						<text class="text-secondary font-small pt-1">{{item.create_time |timeFilter}}</text>
					</view>
					<button type="default">关注</button>
				</view>
				<!-- 留言内容 -->
				<view @click="jumpDetail(item.id,item)">
					<view>{{item.content}}</view>
					<view v-if="item.titlepic==''"></view>
					<view v-if="item.titlepic" class="imagesimg"><image :src="item.titlepic" mode="aspectFill" lazy-load></image></view>
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
					<view @click="jumpDetail(item.id,item)">
						<my-icon iconName="icon-pinglun" iconSize="44"></my-icon>
						<text v-if="item.comment_count===0">评论</text>
						<text v-else> {{item.comment_count}}</text>
					</view>
					<view>
						<my-icon iconName="icon-fenxiang" iconSize="44"></my-icon>
						<text>分享</text>
					</view>
				</view>
			</view>
			</scroll-view>
		</view>
</template>

<script>
	export default {
		props:{
			conentList:{
				type:Array
			},
			calHeight:{
				type:Number
			}
		},
		onLoad() {
			console.log(item,index)
		},
		methods:{
			userinfoPage(){
				console.log('123')
				uni.reLaunch({
					url:"/pages/user-space/user-space"
				})
			},
			// 跳转详情页面
			jumpDetail(id,details){
				const detail = JSON.stringify(details)
				uni.redirectTo({
					url:`/pages/detail/detail?id=${id}&detail=${detail}`
				})
			}
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
	.imagesimg {
		width: 100%;
		padding: 20rpx 0;
	}
	.imagesimg image{
		width: 100%;
		height: 350rpx;
		border-radius: 10rpx;
	}
	
</style>
