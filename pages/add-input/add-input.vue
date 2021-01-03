<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}" class="cal"></view>
		<view class="pb-3 px-2 flex justify-between">
			<view>
				<my-icon iconName="icon-fanhui" @my-click="fanhui"></my-icon>
			</view>
			<view class="flex-1 flex justify-center">
				<text>所有人可见</text>
				<my-icon iconName="icon-shezhi"></my-icon>
			</view>
		</view>
		<!-- 文本框 -->
		<view class="py-1 px-2">
			<view class="uni-textarea">
				<textarea @blur="textAreaBlur" v-model="textCon" auto-height placeholder="说一句话吧" placeholder-style="color:#aaa" />
				</view>
		</view>
		<!--  -->
	
		<!-- 底部 -->
		<view class="tabview">
			<view>
				
				
				
				<my-icon iconName="icon-zengjia1" iconSize="50" @my-click="showFen"></my-icon>
				<my-icon iconName="icon-keyboard" iconSize="50"></my-icon>
				<my-icon iconName="icon-saoyisao" iconSize="50"></my-icon>
			</view>
			<view>
				<button type="success">发送</button>
			</view>
		</view>
		<!-- 分类 -->
<view class="uni-list" v-if="fenLei">
					<view class="uni-list-cell">
						<view class="uni-list-cell-db">
							<picker @change="bindPickerChange" :value="index" :range="array">
								<view class="uni-input"></view>
							</picker>
						</view> 
					</view>
				</view>	
	</view>	
</template>

<script>
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		data(){
			return {
				statusBarHeight : statusBarHeight,
				fenLei:false,
				textCon:''
			}
		},
		methods: {
			fanhui() {
				if(this.textCon==''){
					uni.switchTab({
						url: "/pages/index/index"
					})
				}else {				
					uni.showModal({
						content: '是否要保存为草稿？',
						success: function (res) {
							if (res.confirm) {
							   uni.switchTab({
							   	url: "/pages/index/index"
							   })
							} else if (res.cancel) {
								uni.switchTab({
									url: "/pages/index/index"
								})
							}
						}
					});
					
				}
				// console.log('1234')
				
			},
			// 文本框失焦
			textAreaBlur: function (e) {
				console.log(e.detail.value)
			},
			showFen(){
				this.fenLei = true
			},
			bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
		}
	}
</script>

<style scoped>
	.tabview {
		padding: 0 20rpx;
		height: 84rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.tabview button { 
		width: 140rpx;
		height: 60rpx;
		font-size: 28rpx;
		text-align: center;
		line-height: 60rpx;
		background-color: #ff4a6a!important;
		color: #fff;
	}
	.tabview text {
		padding: 0 20rpx;
	}
</style>
