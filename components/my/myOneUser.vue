<template>
	<view>
		<view v-if="token==''" class="flex flex-column justify-center align-center">
			<view class="align-center pt-2 pb-5">登录社区，体验更多功能</view>
			<view class="align-center pt-5 pb-3" style="color: #6A6A6A;">
				<navigator url="/pages/login/login">
					<text class="pr-2">账号/邮箱/手机登录</text>
					<my-icon iconName="icon-jinru" iconSize="32"></my-icon>
				</navigator>
			</view>
		</view>
		<view v-if="token" class="flex justify-between ">
			<image :src="user.userpic" mode="aspectFill"></image>
			<view class="pl-2 flex-1">
				<view class="font-weight-bold">{{this.user.username}}</view>
				<view class="font-sm text-light-black pt-1">
					<text>总帖子 1  </text>
					<text> 今日发帖 0 </text>
				</view>
			</view>
			<view>
				<my-icon iconName="icon-jinru" iconSize="50"></my-icon>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data(){
			return {
				user:uni.getStorageSync('user'),
				token:uni.getStorageSync('token')
			}
		},
		onLoad() {
			console.log(this.user)
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
	
</style>
