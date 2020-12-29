<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<!-- 搜索 -->
		<my-search></my-search>
		
		<!-- 详情列表 -->
		<my-top-nav :list="list" :tabIndex="tabIndex" @tabtap="tabtap"></my-top-nav>
		
		<!-- 内容 -->
		<view>
			
			<swiper :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(item,index) in conentList" :key="index">
					<scroll-view scroll-y>
						<block v-for="(items,index1) in item.images" :key="index1">
							<my-con-list :item="item" :items="items" :index="index1"></my-con-list>
							<view class="p-2 mr-3">
								{{item.infonum}}
							</view>
						</block>
					</scroll-view>
				</swiper-item>
			</swiper>
			
		</view>
		
		
		
		<!-- <my-con-list :conentList="conentList"></my-con-list> -->
			
	</view>
</template>

<script>
	import mySearch from '../../components/index/search/search.vue'
	import myTopNav from '../../components/index/nav.vue'
	import myConList from '../../components/index/conList.vue'
	import indexApi from '../../model/index.js'
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
				swiperheight:500
			}
		},
		components:{mySearch,myTopNav,myConList},
		onLoad() {
			this.getMessage(),
			uni.getSystemInfo({
				success:(res)=> {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height
				}
			})
		},
		methods: {
			getMessage(){
				indexApi.getIndexTopNav().then(res=>{
					this.list = res.data.data.list
				})
				indexApi.getConentList(1,2).then(res=>{
					console.log(res)
					this.conentList = res.data.data.list
				})
			},
			tabtap(index){
				this.tabIndex = index
			},
			tabChange(e){
				this.tabIndex = e.detail.current
			}
		}
	}
</script>

<style>
</style>
