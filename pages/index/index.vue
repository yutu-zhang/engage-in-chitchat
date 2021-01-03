<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px`}" class="cal"></view>
		<view class="position-fixed top-0 left-0 right-0 cal pt-3" style="z-index: 9999;background-color: #fff;">
			<!-- 搜索 -->
			<my-search class="cal"></my-search>
			
			<!-- 详情列表 -->
			<my-top-nav :list="list" class="cal" :tabIndex="tabIndex" @tabtap="tabtap"></my-top-nav>
		</view>
		
		<!-- 内容 -->
		<view style="padding-top: 160rpx;">
			
			<swiper  :current="tabIndex" @change="tabChange" :style="{height:`${calHeight}rpx`}">
				<swiper-item v-for="(i,ii) in 6" :key="ii">
					
						<my-con-list :conentList="conentList" :calHeight="calHeight"></my-con-list>
						
					
				</swiper-item>
			</swiper>
			
		</view>
			
	</view>
</template>

<script> 
	import $U from '../../utils/unit.js'
	import mySearch from '../../components/index/search/search.vue'
	import myTopNav from '../../components/index/nav.vue'
	import myConList from '../../components/index/conList.vue'
	import {getIndexTopNav,getConentList} from '../../model/index.js'
	// const indexDataApi = new indexData()
	//获取顶部通知栏的高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		data() {
			return {
				statusBarHeight : statusBarHeight,
				list:[],
				conentList:[],
				tabIndex:0,
				userId:1,
				userPage:1,
				swiperheight:500,
				calHeight:0
			}
		},
		components:{mySearch,myTopNav,myConList},
		onLoad() {
			this.getMessage(),
			this.getList()
			uni.getSystemInfo({
				success:(res)=> {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height
				}
			})
		},
		methods: {
		 	async getMessage(){
				let {data} = await getIndexTopNav()
				this.list = data.data.list			
			},
			async getList(){
				let {data:res} = await getConentList(this.userId,this.userPage)
				// console.log(res)
				this.conentList = res.data.list
			},
			tabtap(data,index){
				// console.log(data,index)
				this.userId = data.id
				this.tabIndex = index
			},
			tabChange(e){
				// console.log(e)
				this.tabIndex = e.detail.current
				this.userId = e.detail.current+1
				
				this.getList()
			},
			
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
	.conview {
		padding: 20rpx;
		border-top:18rpx solid #eee;
	}
	.userimg {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
	button {
		width: 110rpx;
		height: 50rpx;
		line-height: 50rpx;
		background-color: #fb5a7c;
		color: #fff;
		font-size: 26rpx;
	}
	.imagesimg {
		width: 100%;
		padding: 20rpx 0;
	}
	.imagesimg image{
		width: 100%;
		height: 350rpx;
		border-radius: 10rpx;
	}
</style>
