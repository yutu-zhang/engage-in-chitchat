<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>

		<view class="top flex justify-between p-1">
			<text class="flex-1 text-center font-md">我的</text>
			<my-icon iconName="icon-gengduo1" iconSize="44" @my-click="setting"></my-icon>
		</view>
		
		<!-- user -->
		<my-one-user :flag="flag"></my-one-user>
		
		<!-- 动态 评论 粉丝 -->
		<my-two-message></my-two-message>
		<view class="imgs">
			<image src="../../static/demo/datapic/1.jpg" mode="aspectFill"></image>
		</view>
		<!-- 浏览历史 -->
		<view>
			<my-three-his></my-three-his>
		</view>
		
		
	</view>
</template>
  
<script>
	import myOneUser from '../../components/my/myOneUser.vue';
	import myTwoMessage from '../../components/my/myTwoMessage.vue';
	import myThreeHis from '../../components/my/mythreeHis.vue';
	
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default{
		data(){
			return {
				statusBarHeight : statusBarHeight,
				flag:false
			}
		},
		components:{myOneUser,myTwoMessage,myThreeHis},
		methods:{
			setting(){
				uni.navigateTo({
					url:'/pages/user-set/user-set'
				})
			}
		},
		onShow() {
			const token = uni.getStorageSync('token')
			console.log(token)
			if(token){
				this.flag = true
			}else{
				this.flag = false
			}
		},
		onLoad() {
			
		}
	}
	
</script>

<style scoped>
	.imgs {
		height: 170rpx;
		padding: 20rpx 30rpx;
	}
	.imgs image {
		width: 100%;
		height: 170rpx;
		border-radius: 10rpx;
	}
</style>
