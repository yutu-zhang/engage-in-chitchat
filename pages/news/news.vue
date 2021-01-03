<template>
	<view>
		<view :style="{height : `${statusBarHeight}px`}"></view>


		<my-top-nav :activeIndex="activeIndex" @tabtap="tabtap" class="cal" :navList="navList"></my-top-nav>
		
		<view class="p-2 cal">
			<swiper :current="activeIndex" @change="tabChange" :style="{height:`${calHeight}rpx`}">
				<swiper-item>
					<view class="swiper-item">
						<my-gambit></my-gambit>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<my-attention :calHeight="calHeight"></my-attention>
					</view>
				</swiper-item>
			</swiper>
		</view>
			
		
		
		
	</view>
</template>

<script>
	import $U from '../../utils/unit.js'
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	import myTopNav from '../../components/news/topNav.vue'
	import myAttention from '../../components/news/attention.vue'
	import myGambit from '../../components/news/gambit.vue'
	import {getAttenNav} from '../../model/news/huati.js'
	export default {
		components:{myTopNav,myAttention,myGambit},
		data(){
			return {
				statusBarHeight : statusBarHeight,
				activeIndex:0,
				navList:['关注','话题'],
				calHeight:0,
			
			}
		},
		onLoad(){
		},
		methods:{
			tabtap(index){
				this.activeIndex = index
			},
			tabChange(e){
				// console.log(e)
				this.activeIndex = e.detail.current 
			}
		},
		mounted(){
			$U.calSurplusHeight({
				pageID:this,
				pos:'cal',
				success:(res)=>{
					this.calHeight = res
				}
			})
		}
	}
</script>

<style scoped>

</style>
