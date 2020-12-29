<template>
	<view>
		<view>
			 <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
			<view class="flex px-2">
				<view class="flex justify-between px-3 navitem" v-for="(item,index) in list" :key="index">{{item.classname}}</view>
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
			}
		},
		methods:{
			 scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style>
	.navitem {
		font-size: 28rpx;
		font-weight: 550;
	}
</style>
