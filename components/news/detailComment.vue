<template>
	<view>
		<view class="flex align-center text-center py-2">
			<view class="flex-1" @click="tabtap(index)" v-for="(item,index) in navlist" :key="index">
				<text :class="{'navActive':activeIndex==index}">{{item}}</text>
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
	import {getDetailComment} from '../../model/news/huati.js'
	export default {
		data(){
			return {
				navlist:['默认','最新'],
				activeIndex:0
			}
		},
		methods:{
			tabtap(index){
				
			}
		},
		
	}
</script>

<style>
	.navActive {
		color: #FF4A6A;
		font-size: 40rpx;
		font-weight: 550;
	}
</style>
