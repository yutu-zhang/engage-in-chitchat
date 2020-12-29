<template>
	<view>
		<view class="fu">
			 <scroll-view class="scroll-view_H" scroll-x @scroll="scroll">
				<view class="flex px-2">
					<view class="flex justify-between px-3 navitem" v-for="(item,index) in list" :key="index" @tap="tabtap(index)">
						<text :class="{'navactive':tabIndex==index}">{{item.classname}}</text>
						<view class="swiper-tab-line"></view>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default:[]
			},
			tabIndex:{
				type:Number,
				default:0
			}
		},
		data(){
			return {
				activeIndex:0
			}
		},
		methods:{
			tabtap(index){
				this.$emit('tabtap',index)
			}
		}
	}
</script>

<style>
	.navitem {
		font-size: 28rpx;
		font-weight: 550;
	}
	.fu {
		width: 100%;
	}
	scroll-view {
		width: 880rpx;
	}
	scroll-view>view {
		width: 100%;
	}
	.navactive {
		font-size: 30rpx;
		color: #FB5A7C;
		padding-bottom: 10rpx;
		border-bottom: 6rpx solid #FB5A7C;
	}
	
	
</style>
