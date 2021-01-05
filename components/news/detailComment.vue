<template>
	<view>
		<view class="flex align-center text-center py-2 cal">
			<view class="flex-1" @click="tabtap(index)" v-for="(item,index) in navlist" :key="index">
				<text :class="{'navActive':activeIndex==index}">{{item}}</text>
			</view>
		</view>
		<!--  -->
		<view>
			<swiper :style="{height:`${calHeight}rpx`}" :current="activeIndex" @change="tabChange">
				<swiper-item v-for="(i,ii) in 2" :key="ii">
					<scroll-view scroll-y="true" :style="{height:`${calHeight}rpx`}">
						<view class="swiper-item py-2" v-for="(item,index) in contentList" :key="index">
							<!-- user -->
							<view class="flex justify-between userimg px-2">
								<image :src="item.user.userpic" mode="aspectFill" lazy-load></image>
								<view class="flex flex-1 flex-column pl-2">
									<text>{{item.user.username}}</text>
									<text class="font-sm text-light-muted">{{item.create_time|timeFilter}}</text>
								</view>
								<view class="guanzhu">关注</view>
							</view>
							<!-- con -->
							<view class="pt-4 px-2">{{item.content}}</view>
							<!--  -->
							<view class="flex py-3 justify-between px-2">
								<view>
									<my-icon iconName="icon-dianzan" iconSize="44"></my-icon>
									<text v-if="item.ding_count===0"></text>
									<text v-else> {{item.ding_count}}</text>
								</view>
								<view>
									<my-icon iconName="icon-ccdbaa" iconSize="44"></my-icon>
									<text v-if="item.cai_count===0">踩 </text>
									<text v-else> {{item.cai_count}}</text>
								</view>
								<view>
									<my-icon iconName="icon-pinglun" iconSize="44"></my-icon>
									<text v-if="item.comment_count===0"></text>
									<text v-else> {{item.comment_count}}</text>
								</view>
								<view>
									<my-icon iconName="icon-fenxiang" iconSize="44"></my-icon>
									<text>分享</text>
								</view>
							</view>
							<!-- xian -->
							<view class="xian"></view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
		
	</view>
</template>

<script>
	import $U from '../../utils/unit.js'
	import {getDetailComment} from '../../model/news/huati.js'
	export default {
		data(){
			return {
				navlist:['默认','最新'],
				activeIndex:0,
				id:1,
				page:1,
				contentList:[],
				calHeight:0
			}
		},
		mounted() {
			$U.calSurplusHeight({
				pageID:this,
				pos:'cal',
				success:(res)=>{
					this.calHeight = res
				}
			})
			
			this.getDetailCommentData()
		},
		methods:{
			tabtap(index){
				this.activeIndex = index
			},
			tabChange(e){
				// console.log(e)
				this.activeIndex = e.detail.current
				this.id = e.detail.current+1
				this.getDetailCommentData()
			},
			async getDetailCommentData(){
				let {data} = await getDetailComment(this.page,this.id)
				this.contentList = data.data.list
				// console.log(this.contentList)
			}
		},
		filters: {
		   // 时间过滤
		   timeFilter: (val)=> {
			let hhour = ''
			let time = new Date(val * 1000)
			let year = time.getFullYear()
			let month = time.getMonth()+1
			if(month < 10) {
			 month = '0' + month;
			}
			let day = time.getDate()
			if(day < 10) {
			 day = '0' + day;
			}
			let hour = time.getHours()
			if(hour <= 12) {
			 hhour = '上午';
			}else {
			 hour = hour - 12
			 hhour = '下午'
			}
			let minute = time.getMinutes()
			if(minute < 10) {
			 minute = '0' + minute;
			}
			return `${year}-${month}-${day} ${hhour} ${hour}:${minute}`
		   }
		  },
		
	}
</script>

<style scoped>
	.navActive {
		color: #FF4A6A;
		font-size: 40rpx;
		font-weight: 550;
	}
	.userimg image{
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
	}
	.guanzhu {
		width:90rpx;
		height:50rpx;
		line-height: 50rpx;
		text-align: center;	
		border-radius: 8rpx;
		color: #fff;
		background-color: #ff4a6a!important;
	}
</style>
