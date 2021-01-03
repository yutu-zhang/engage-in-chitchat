<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>

		<view class="flex justify-between p-2 align-center">
			<my-icon iconName="icon-fanhui" iconSize="50" @my-click="fanhui"></my-icon>
			<text class="font-weight-bold flex-1 pl-2 text-center">设置</text>
		</view>
		<!-- 登录状态 -->
		<view v-if="setCut==false">
			<!--  -->
			<view class="pl-3 pr-2 contentList">
				<navigator url="">
					<view>
						<text>账号与安全</text>
						<my-icon iconName="icon-jinru" iconSize="40" iconColor="text-light-muted"></my-icon>
					</view>
				</navigator>
				<navigator url="">
					<view>
						<text>编辑资料</text>
						<my-icon iconName="icon-jinru" iconSize="40" iconColor="text-light-muted"></my-icon>
					</view>
				</navigator>
				<view>
					<text>清除缓存</text>
					<text>1.00KB</text>
				</view>
				<navigator url="">
					<view>
						<text>意见反馈</text>
						<my-icon iconName="icon-jinru" iconSize="40" iconColor="text-light-muted"></my-icon>
					</view>
				</navigator>
				<navigator url="">
					<view>
						<text>关于社区</text>
						<my-icon iconName="icon-jinru" iconSize="40" iconColor="text-light-muted"></my-icon>
					</view>
				</navigator>
			</view>
			<!-- 按钮 -->
			<view class="mt-4 px-3">
				<button class="rounded-80" type="warn" @click="logOut">退出登录</button>
			</view>
		</view>

		<!-- 退出后 -->
		<view v-if="setCut==true">
			<view class="pl-3 pr-2 contentList">
				<view>
					<text>清除缓存</text>
					<text>1.00KB</text>
				</view>

				<navigator url="">
					<view>
						<text>关于社区</text>
						<my-icon iconName="icon-jinru" iconSize="40" iconColor="text-light-muted"></my-icon>
					</view>
				</navigator>

			</view>
		</view>
	</view>
</template>

<script>
	import {loginOut} from '../../model/login.js'
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		data() {
			return {
				statusBarHeight : statusBarHeight,
				setCut: false,
				token:uni.getStorageSync('token').toString()
			}
		},
		methods: {
			fanhui() {
				uni.switchTab({
					url:'/pages/home/home'
				})
			},
			// 退出登录
			logOut() {

				uni.showModal({
					content: '是否要退出登录',
					success:async (res)=>{
						if (res.confirm) {
							console.log('用户点击确定');
							let {data} = await loginOut(this.token)
							// this.setCut = true
							// uni.removeStorageSync('token')
							// uni.removeStorageSync('user')
							// uni.removeStorageSync('userinfo')
							// uni.switchTab({
							// 	url:'/pages/home/home'
							// })
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.contentList view {
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height: 90rpx;
	}
</style>
