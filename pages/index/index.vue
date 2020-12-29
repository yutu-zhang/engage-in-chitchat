<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<!-- 搜索 -->
		<my-search></my-search>
		
		<!-- 详情列表 -->
		<my-top-nav :list="list"></my-top-nav>
		
		<!-- 内容 -->
		<my-con-list :conentList="conentList"></my-con-list>
			
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
			}
		},
		components:{mySearch,myTopNav,myConList},
		onLoad() {
			this.getMessage()
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
		}
	}
</script>

<style>
</style>
