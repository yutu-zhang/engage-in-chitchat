<template>
<view>
	<view :style="{height : `${statusBarHeight}px`}"></view>
	<view class="topimg">
		<view class="py-3 px-2">
			<my-icon iconName="icon-guanbi" iconSize="48" @my-click="goOut"></my-icon>
		</view>
		<!-- <view class="topImg position-absolute top-0 left-0 right-0">
			<image src="../../static/common/loginhead.png" mode="aspectFill"></image>
		</view> -->
	</view>
	<!-- 账号密码登录 -->
	<view class="pass"  v-if="UserLogin==true">
		<view style="">
			<view class="font">账号密码登录</view>
		</view>
		<view class="from pt-5 px-2">
			<view class="input">
				<input type="text" v-model="userName" placeholder="昵称/手机号/邮箱" />
			</view>
			<view class="input">
				<input type="password" v-model="passWord" placeholder="请输入密码" />
				<text>忘记密码</text>
			</view>
			<view class="btn mt-2 py-2">
				<button v-if="userName =='' || passWord == '' "  style="background-color:#f87f97; color:#eee;">
				 登录
				</button>
				<button v-else @click="PassLogin">
				 登录
				</button>
			</view>
		</view>
		
		<view class="auth_question mt-2 mb-5">
			<view @click="CheckLogin">
				验证码登陆
			</view>|
			<view class="">
				登录遇到的问题
			</view>
		</view>
	</view>
	<!-- 手机验证码登录 -->
	<view class="phone"  v-if="UserLogin==false">
		<view>
			<view class="font">手机验证码登录</view>
		</view>
		<view class="from pt-5 px-2">
			<view class="input position-relative">
				<input type="text" v-model="userModeil" placeholder="手机号" />
				<text class="position-absolute">+86</text>
			</view>
			<view class="input">
				<input type="password" v-model="userCode" placeholder="请输入验证码" />
				<text @click="getCode">获取验证码</text>
				<text v-if="CodeTime">60秒以后可重试</text>
			</view>
			<view class="btn mt-2 py-2">
				<button v-if="userModeil =='' || userCode == '' "  style="background-color:#f87f97; color:#eee;">
				 登录
				</button>
				<button v-else @click="PhoneLogin">
				 登录
				</button>
			</view>
		</view>
		
		<view class="auth_question mt-2 mb-5">
			<view @click="CheckLogin">
				账号密码登录
			</view>|
			<view class="">
				登录遇到的问题
			</view>
		</view>
	</view>
	
	
	<!--  -->
	<view class="third_party_login flex justify-center align-center">
		<view class="line"></view>
		<view class="px-1 text-light-black">社交账号登录</view>
		<view class="line"></view>
	</view>
	<view class="wx py-5">
		<view>
			<my-icon iconName="icon-weixin" iconColor="text-white"></my-icon>
		</view>
		<view>
			<my-icon iconName="icon-QQ" iconColor="text-white"></my-icon>
		</view>
		<view>
			<my-icon iconName="icon-xinlangweibo" iconColor="text-white"></my-icon>
		</view>
	</view>
	
	<view class="agreement align-center">
		<text>注册即代表同意</text>
		<text class="text-primary">《xxx社区协议》</text>
	</view>
</view>

</template>

<script>
	import {getUserLogin,getPhoneCode,sendPhoneCode} from '../../model/login.js'
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	
	export default{
		data(){
			return {
				statusBarHeight : statusBarHeight,
				userName:'',
				passWord:'',
				userModeil:'',
				userCode:'',
				UserLogin:false,
				CodeTime:false
			}
		},
		onLoad() {
			
		},
		methods:{
			goOut(){
				uni.switchTab({
					url:'/pages/home/home'
				})
			},
			// 账号密码登录获取接口
			async getUserLoginData(){
				let {data} = await getUserLogin(this.userName,this.passWord)
				console.log(data)
				if(data.errorCode){
					uni.showToast({
						title:data.msg,
						icon:'none'
					})
				}else {
					uni.showToast({
						title:data.msg,
						icon:'success'
					})
				}
			},
			// 登录按钮
			PassLogin(){
				this.getUserLoginData()
			},
			PhoneLogin(){
				this.getPhoneCodeData()
				uni.switchTab({
					url:'/pages/home/home'
				})
			},
			// 点击切换登录方式
			CheckLogin(){
				this.UserLogin = !this.UserLogin
			},
			// 手机验证码登录获取
			async getPhoneCodeData(){
				let {data} = await getPhoneCode(this.userModeil,this.userCode)
				if(data.errorCode){
					uni.showToast({
						title:data.msg,
						icon:'none'
					})
				}else {
					uni.showToast({
						title:data.msg,
						icon:'success'
					})
					uni.setStorageSync('token',data.data.token)
					uni.setStorageSync('userinfo',data.data.userinfo)
					uni.setStorageSync('user',data.data)
				}
				
			},
			async getCode(){
				
				let {data:res} = await sendPhoneCode(this.userModeil)
				console.log(res)
				if(res.errorCode){
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
				}else {
					uni.showToast({
						title:res.msg,
						icon:'success'
					})
					this.CodeTime = !this.CodeTime
				}
			}
		}
		
		
	}
</script>

<style scoped>
	.font {
		font-size: 50rpx;
		text-align: center;
	}
	.input {
		padding: 30rpx 10rpx;
		border-bottom: 2rpx solid #efefef;
	}
	.input:nth-child(2){
		position: relative;
	}
	.input:nth-child(2) text {
		position: absolute;
		right: 20rpx;
		bottom: 30rpx;
		color: #ababa2;
	}
	.btn button {
		color: #fff;
		width: 100%;
		height: 95rpx;
		border: 1px solid rgba(0,0,0,.1);
		border-radius: 50rpx;
		background-color: #ff4a6a;
	}
	.auth_question {
		font-size: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.auth_question>view {
		color: #007AFF;
		font-size: 24rpx;
		padding: 0 20rpx;
	}
	.third_party_login .line {
		height:1rpx;
		background-color: rgb(221, 221, 221);
		width: 100rpx;
		/* line-height: 1.8; */
	}
	.agreement {
		display: flex;
		justify-content: center;
		font-size: 24rpx;
		color: #6c757d;
		margin-top: 60rpx;
	}
	.wx {
		display: flex;
		justify-content: center;
	}
	.wx>view {
		margin: 0 40rpx;
		width: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 50%;
		background-color: #2AD19B;
	}
	.wx>view:nth-child(2){
		background-color: #2CAEFC;
	}
	.wx>view:nth-child(3){
		background-color: #FC772A;
	}
	/*  */
	.phone .input:nth-child(1) {
		padding-left: 90rpx;
	}
	.phone .input:nth-child(1) text {
		left: 10rpx;
		top: 30rpx;
	}
	.phone .input:nth-child(2) text {
		color: #fff;
		padding: 20rpx;
		background-color: #ff4a6a;
		bottom: 10rpx;
		border-radius: 20rpx;
		font-size: 28rpx;
	}
	/* top */
	.topimg {
		height:300rpx;
		background: url('../../static/common/loginhead.png') no-repeat 0 0;
		background-size: 100% 300rpx;
	}
</style>
