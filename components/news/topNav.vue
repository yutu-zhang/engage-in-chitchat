<template>
		<view class="flex justify-between align-center pb-2 px-2">
			<view class="flex-1 flex justify-center align-center">
				<view @tap="tabtap(index)" v-for="(item,index) in navList" :key="index">
					<text class="px-2" :class="{'topactive':activeIndex==index}" >{{item}}</text>
				</view>
				
			</view>
			<view>
				<my-icon iconName="icon-bianji1" @my-click="jumpBianji"></my-icon>
			</view>
		</view>

</template>

<script>
	export default {
		props:{
			activeIndex:Number,
			navList:Array
		},
		methods:{
			jumpBianji(){
				uni.redirectTo({
					url:'/pages/add-input/add-input',
				})
			},
			tabtap(index){
				this.$emit('tabtap',index)
			}
		}
	}
</script>

<style scoped>
	.topactive {
		color: #FB5A7C;
		/* font-size: 39rpx;
		font-weight:600; */
	}
</style>
